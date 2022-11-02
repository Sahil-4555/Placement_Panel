import React from 'react'
import Navbarh from './Navbar'
import ListGroup from 'react-bootstrap/ListGroup';

function Achievement() {
  return (
    <>
      <Navbarh />
      <div className='mainprofile'>
      <h2 className='profileH'>Achievements</h2>
      <div className='profile'>
        <ListGroup>
          <div>Competitive Exam</div>
          <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Competitive exam(s) / certified courses (AWS, CEH, CHFI, ECIH, CISCO,NPTEL etc.)']}</ListGroup.Item>
          <br></br>
          <div>Achievements</div>
          {(JSON.parse(localStorage.getItem("account")))['Achievements(Sports/extracurricular etc.)'] && <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Achievements(Sports/extracurricular etc.)']}</ListGroup.Item>}
          {!(JSON.parse(localStorage.getItem("account")))['Achievements(Sports/extracurricular etc.)'] && <ListGroup.Item>N/A</ListGroup.Item>}
          <br></br>
          <div>HackerRank / Codechef / LeetCode Score</div>
          <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['HackerRank/CodeChef/LeetCode score']}</ListGroup.Item>
          <br></br>
          <div>Remarks</div>
          <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Remarks']}</ListGroup.Item>
        </ListGroup>
      </div>
      </div>
    </>
  )
}

export default Achievement