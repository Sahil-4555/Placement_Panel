import React, { useState, useEffect } from 'react'
import Home1 from './Home1.js'
// import { Container } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import './student.css';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
const fetch = require('node-fetch');

const LoginForm = (props) => {
    const navigate = useNavigate();
    // const myStyle = {
    //     backgroundImage: "url(https://connectgujarat.com/wp-content/uploads/2020/05/IMG_20200510_080830.jpg)",
    //     marginTop: '-70px',
    //     height: '100vh',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // }
    const [formValues, setFormValues] = useState({ id: "", password: "" });
    const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // navigate('/Home1');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        // if (setFormErrors.acc !== null) {
        //     console.log(setFormErrors.acc);
        //     // navigate('/Home1');
        // }
        // setIsSubmit(true);
    };


    const validate = (values) => {
        const errors = {};
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.id) {
            errors.id = "ID is required!";
        }
        // else if (!regex.test(values.email)) {
        //     errors.email = "This is not a valid email format!";
        // }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (errors.password == null && errors.id == null) {
            fetch('https://script.googleusercontent.com/macros/echo?user_content_key=C_vS9AWA4S8dqv9CyDwyEPN6UhCL38uqECL9ti4h-awC_odcflnfNNKPELvmx-lCTNgzOpkbTr0FXB-37fPh3enkOAAxDAIam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLM2u_ATMx0G79HVMVKPEXFNRunYr-RCJW6r-4D9XmsPX5ai26ltMx5F2rbsS2ZvlAvVbvUtX-iXGsKeFeAqPdbjLlyNQ3ooVdz9Jw9Md8uu&lib=MpNJIOklRc_-eBCQ29KQ5zheN2ohQBFtF')
                .then(res => res.json())
                .then(json => {
                    let acc;
                    if (values.id.toUpperCase() === 'ADMIN' && values.password.toUpperCase() === 'ADMIN') {
                        navigate('/admin');
                    }
                    else {
                        for (const account of json) {
                            if (account['ID No'] === values.id.toUpperCase()) {
                                acc = account;
                                let tmppass = acc['DOB(dd-mm-yyyy)'].substr(0, 10);
                                const arr = tmppass.split("-");
                                let pass = arr.join("");
                                console.log(pass);

                                if (pass === values.password) {
                                    props.showAlert("Successfully Logged In", "success");
                                    console.log(acc['ID No']);
                                    localStorage.setItem('account', JSON.stringify(acc));
                                    navigate('/home', account);
                                }
                                else {
                                    props.showAlert("Invalid Details", "danger");
                                    console.log("INVALID DETAILS")
                                    acc = null;
                                }
                            }
                        }
                        if (acc == null) {
                            console.log("INVALID DETAILS")
                            props.showAlert("Invalid Details", "danger");
                        }
                    }
                })
        }
        else {
            return errors;
        }
    };


    return (
        <div className="containerloginform">
            <div className="container1">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 max-auto bg-light border rounded border-primary">
                        <Form className="form-control" onSubmit={handleSubmit}>
                            <h2 className="text-center">Student Login</h2>
                            <hr className="hl1"></hr><br></br>
                            <div className="label">
                                Student ID
                                <br></br>
                            </div>
                            <input
                                type="text"
                                name="id"
                                placeholder="Enter Your ID"
                                value={formValues.id}
                                onChange={handleChange}
                                style={{ width: "325px", marginLeft: "10px" }}
                            />
                            {/* <p className="error">{formErrors.id}</p> */}
                            <div className="label">
                                Password
                                {/* style={{marginLeft:"10px"}}; */}
                                <br></br>
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                value={formValues.password}
                                onChange={handleChange}
                                style={{ width: "325px", marginLeft: "10px", variant: "outlined", size: "small" }}
                            />
                            {/* <p className="error">{formErrors.password}</p> */}
                            <button type="submit" className="btn btn-primary" name="file" style={{ marginTop: "10px" }}>Login</button>

                            {/* <div className="form-group has-error has-danger">
                                <label>HRName</label>
                                <input type="text" name="user_name" data-error="You must have a hrname." id="inputName" class="form-control" placeholder="HRName" value="" required="" />
                                <div class="help-block with-errors"><ul class="list-unstyled"><li>You must have a hrname.</li></ul></div>
                            </div>

                            <br></br>
                            <Form.Group controlId="inputPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
                            </Form.Group>

                            <br></br>
                            <Form.Group className="form-group">
                                <Button type="submit" className="btn" >
                                    Login
                                </Button>

                            </Form.Group> */}
                        </Form>
                    </div>
                </div>
            </div >
            {/* <Routes>
                <Route path="/Home1" element={<Home1 />} />
                <Route path="/" element={<LoginForm />} />
            </Routes> */}
            {/* </div> */}
        </div>
    );
}

export default LoginForm