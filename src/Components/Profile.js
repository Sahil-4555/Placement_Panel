import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Navbarh from './Navbar';

function Profile() {
    return (
        <>
        <Navbarh />
        <div className='mainprofile'>
        <h2 className='profileH'>Profile</h2>
        <div className='profile'>
            <ListGroup>
                <div>ID No</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['ID No']}</ListGroup.Item>
                <br></br>
                <div>Name</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account"))).Name}</ListGroup.Item>
                <br></br>
                <div>Date of Birth</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['DOB(dd-mm-yyyy)']}</ListGroup.Item>
                <br></br>
                <div>Gender</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Gender']}</ListGroup.Item>
                <br></br>
                <div>Career Path</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Career path(Job/Higher studies/Entrepreneur)']}</ListGroup.Item>
                <br></br>
                <div>Permanent Address</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Permanent address']}</ListGroup.Item>
                <br></br>
                <div>Permanent City</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Permanent city']}</ListGroup.Item>
                <br></br>
                <div>Pin Code</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['PIN']}</ListGroup.Item>
            </ListGroup>
        </div>
        </div>
        </>
    )
}

export default Profile