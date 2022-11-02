import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Navbarh from './Navbar';

function Result() {
    return (
        <>
        <Navbarh />
        <div className='mainprofile'>
        <h2 className='profileH'>Result</h2>
        <div className='profile'>
            <ListGroup>
                <div>SSC Score</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['SSC %']} %</ListGroup.Item>
                <br></br>
                <div>SSC Board</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['SSC Board']}</ListGroup.Item>
                <br></br>
                <div>HSC Score</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['HSC %']} %</ListGroup.Item>
                <br></br>
                <div>HSC Board</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['HSC Board']}</ListGroup.Item>
                <br></br>
                <div>Diploma Score</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Diploma %']}</ListGroup.Item>
                <br></br>
                <div>1st semester SGPA</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Sem-1 SGPA']}</ListGroup.Item>
                <br></br>
                <div>2nd semester SGPA</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Sem-2 SGPA']}</ListGroup.Item>
                <br></br>
                <div>3rd semester SGPA</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Sem-3 SGPA']}</ListGroup.Item>
                <br></br>
                <div>4th semester SGPA</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Sem-4 SGPA']}</ListGroup.Item>
                <br></br>
                <div>5th semester SGPA</div>
                <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Sem-5 SGPA']}</ListGroup.Item>
                <br></br>
            </ListGroup>
        </div>
        </div>
        </>
    )
}

export default Result