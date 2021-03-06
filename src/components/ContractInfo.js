import React,{Component} from 'react';
import {Container,Jumbotron,Progress} from 'reactstrap';
import {Button, Card, CardImg, CardTitle, CardText, ListGroup, ListGroupItem, Dropdown,DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {Animated} from "react-animated-css";
import bgimage from './o1.png'
import { Link } from 'react-router-dom';

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
                <p className="lead">Stav vybavenia požiadavky</p>
                <hr className="my-2" />
                <p><Progress multi>
                    <Progress animated bar value="10">Aktívne</Progress>
                    <Progress animated bar color="success" value="30" >Vybavené</Progress>
                   </Progress>
                </p>
                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                <Card body outline color="success">
                    
                    <CardTitle><h2>Vaše konania</h2></CardTitle>
                    <CardText>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle  color="primary" caret>
                    Nové konanie
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem header color="danger">Vyberte konanie</DropdownItem>
                    <DropdownItem tag={Link} to={'/buildcontract'}>Stavebné povolenie</DropdownItem>
                    <DropdownItem >Ohlásenie drobnej stavby</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Zaregistrovanie nového vozidla</DropdownItem>
                    <DropdownItem>Žiadosť o prechodný pobyt</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                    </CardText>
                    <h1>Upozornenie </h1>
                    <p>Konanie je začaté dňom, keď došiel návrh na jeho začatie alebo keď bolo vydané uznesenie.</p>
                    <ListGroup>
                      <ListGroupItem active tag="a" href="#" action>Stavebné konanie ID 124578</ListGroupItem>
                      <ListGroupItem tag="a" href="#" color="success" action>Žiadosť o prechodný pobyt ID 89456546</ListGroupItem>
                      <ListGroupItem tag="a" href="#" color="success" action>Prepis auta ID 2565687</ListGroupItem>
                      <ListGroupItem tag="a" href="#" color="success" action>Zaregistrovanie auta ID 45644</ListGroupItem>
                      <ListGroupItem disabled tag="a" color="success" href="#" action>Testovacie konanie</ListGroupItem>
                    </ListGroup>    
                </Card>
                </Animated>
                </Container>
                </Jumbotron>
            </div>
        );
    }
}