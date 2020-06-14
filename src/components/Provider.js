import React,{Component} from 'react';
import {Container,Jumbotron,Card, Button, CardTitle, CardText, Row, Col, Table, Badge} from 'reactstrap';
import HBarChart from './HBarChart';
import TableAc from './TableAc';
import TableAcd from './TableAcd';
import axios from 'axios';
import bgimage from './images.jpg'
import {Animated} from "react-animated-css";
import TableRow from './TableRow';
import TableRow1 from './TableRow1';


export default class About extends Component{

    constructor(props) {
        super(props);
        this.state = {
          contacts: [],
          patients: [],
          concount: []
        };
      }

    componentDidMount() {

        fetch('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/covidp/patients/')
        //fetch('https://127.0.0.1:4000/api/patients/')
        .then(res => res.json())
        .then((data) => {
        this.setState({ patients: data.items });
        })
        fetch('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/covid/clients/count/')
        //fetch('https://127.0.0.1:4000/api/patients/')
        .then(res => res.json())
        .then((data) => {
        console.log("Toto je pocet: " + data.items.map((ludia) => ({ludia})));
        this.setState({ concount: data.items });
        })
        fetch('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/covid/clients/')
        //fetch('https://localhost:4000/api/clients/')
        .then(res => res.json())
        .then((data) => {
        this.setState({ contacts: data.items }) 
        })
        .catch(console.log);
      }

      tabRow(){
        return this.state.contacts.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        })};


      tabRow1(){
            return this.state.patients.map(function(object, i){
                return <TableRow1 obj={object} key={i} />;
            })};   

    render(){
        return(
            <div>
                <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }} fluid>
                <Container fluid>
                <h1 className="display-5">COVID Pomoc</h1>
                <p className="lead">Poskytovatelia.</p>
                <Row>
                <Col sm="2"> </Col>
                <Col sm="2">
                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>    
                <Card body inverse color="danger">
                <Button color="warning" outline>
                    Počet čakajúcich pacientov <h2><Badge color="secondary">4</Badge></h2>
                </Button>
                </Card>
                </Animated>
                </Col>
                <Col sm="2">
                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>    
                <Card body inverse color="primary">
                <Button color="warning" outline>
                    Počet čakajúcich na jedlo <h2><Badge color="secondary">2</Badge></h2>
                </Button>
                </Card>
                </Animated>
                </Col>
                <Col sm="2">    
                <HBarChart/>
                </Col>
                </Row>
                <hr className="my-2" />
                <p></p>
                <Row>
                <Col sm="4">
                { this.tabRow1() }
                </Col> 
                <Col sm="4">
                { this.tabRow() }    
                </Col>
                </Row>
              </Container>
                </Jumbotron>
            </div>
        );
    }
}