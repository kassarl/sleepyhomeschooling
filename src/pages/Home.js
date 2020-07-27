import React, {Component} from 'react'
import {Container, Col, Row, Jumbotron, Button} from 'react-bootstrap'
import '../App.css'
import logo from "../images/yellowlogo.png"
export class Home extends Component{
    render(){
return(<div>
    <Container>
        <div className="logo"> 
             <img className="logo" src={logo}></img> </div>
         <Row>
            <Col ></Col>
            <Col xs={8}>
                <h1 className="Jugemu homecenter"  > the modern homeschooler</h1>
            </Col>
            <Col></Col>
        </Row>
        </Container>
        

             <Jumbotron className="Jugemu"> 
                 
                 <p className="whitetext"> 2020 Covid Situation</p>
                 <p className="whitetext"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                 </Jumbotron>  


                 <div className="starthome"> 
                 <h3 className="Jugemu"> New to homeschooling?  <Button className="Jugemu" variant="startbut"> Start Here </Button></h3> 
                 </div>


        
</div>)
    }


}

export default Home