import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbarh from './Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Footer from './Footer';


//  function account(){
//     const acc = localStorage.getItem(acc);
//     var accc = JSON.parse(acc);
//     console.log(parsedObject.items[0].Desc);
// }

const Home1 = (props) => {
    return (
        <body >
            {/* <header> */}
            <Navbarh />
            {/* </header> */}
            <div>
                <div className="container-fluid">
                    <div className="row bg-light">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div></div>
                            <div className="try">
                                <div>


                                    <br></br><br></br>
                                    <Carousel slide={false}>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 img-fluid"
                                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                                alt="First slide"
                                            />
                                            <Carousel.Caption className="d-none d-md-block">
                                                <p className="bg-info">Don't wait for the perfect moment,Take the moment and make it perfect.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 img-fluid"
                                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                                alt="First slide"
                                            />
                                            <Carousel.Caption className="d-none d-md-block">
                                                <p className="bg-info">Choose a job you love, and you will never have to work a day in your life.</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 img-fluid"
                                                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                                                alt="Third slide"
                                            />

                                            <Carousel.Caption className="d-none d-md-block">
                                                <p className="bg-info">
                                                    You don’t have to be great to start, but you have to start to be great.
                                                </p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-sm-7">
                                <h1>ABOUT PLACEMENT PANEL</h1>
                                <div>
                                    <br></br>
                                    <p> Our System helps Students to find its details regarding the placement data
                                        certificates etc stuffs
                                    </p>
                                    <div>
                                        <div className="col-sm-1"></div>
                                        <div className="col-sm-4">
                                            <div className="try2">
                                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudHN8ZW58MHx8MHw%3D  &ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                                    width="400px" height="250px"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </body>
    );
}

export default Home1;
