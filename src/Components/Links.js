import React from 'react'
import Navbarh from './Navbar'
import ListGroup from 'react-bootstrap/ListGroup';

function Links() {
  return (
    <>
      <Navbarh />
      <div className='mainprofilel'>
      <h2 className='profileH'>Links</h2>
      <div className='profile'>
        <ListGroup>
          <div>Miscellaneous</div>
          {(JSON.parse(localStorage.getItem("account")))['Miscellaneous'] && <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Miscellaneous']}</ListGroup.Item>}
          {!(JSON.parse(localStorage.getItem("account")))['Miscellaneous'] && <ListGroup.Item>N/A</ListGroup.Item>}
          <br></br>
          <div>Linkedln Profile Link</div>
          {/* <a href="{(JSON.parse(localStorage.getItem("account")))['LinkedIn Profile link']}">team</a> */}
          <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['LinkedIn Profile link']}</ListGroup.Item>
          <br></br>
          <div>Github Link</div>
          <ListGroup.Item>{(JSON.parse(localStorage.getItem("account")))['Github link']}</ListGroup.Item>
        </ListGroup>
      </div>
      </div>
    </>
  )
}

export default Links