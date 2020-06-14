import React,{Component} from 'react';
import {Container,Jumbotron,Progress} from 'reactstrap';
import {Button, Card, CardImg, CardTitle, CardText, ListGroup, ListGroupItem, Dropdown,DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {Animated} from "react-animated-css";
import bgimage from './o1.png'
import { Link } from 'react-router-dom';
import TimeLine from './TimeLine'

export default class Result extends Component{

    constructor(props) {
        super(props);
        this.state = {
          contacts: [],
          albums:[],
          patients: []
        };

        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }

      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }  


    componentDidMount() {
        fetch('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/transactions/list/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ patients: data.items }) 
        })
        .catch(console.log)
      }

    render(){
        return(
            <div>
                <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }} fluid>
                <Container fluid>
                <h1 className="display-5">Konania v štátnej a verejnej správe</h1>
                <p className="lead">Žiadosť o stavebné povolenie</p>
                <hr className="my-2" />
                <p><Progress multi>
                    <Progress animated bar value="20">Aktívne</Progress>
                    <Progress animated bar color="success" value="40" >Vybavené</Progress>
                    <Progress animated bar color="danger" value="20" >Vyžaduje Vašu pozornosť</Progress>
                   </Progress>
                </p>
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                <Card body outline color="success">
                    
                    <CardTitle><h2>Stavebné konanie ID 12345678</h2></CardTitle>
                    <CardText>
                    </CardText>
                    <h1>Upozornenie </h1>
                    <p>Smart eGov za Vás automaticky inicializuje potrebné kroky. Sledujte časovú os a stav ikony.</p>
                    <TimeLine/>    
                </Card>
                </Animated>
                </Container>
                </Jumbotron>
            </div>
        );
    }
}