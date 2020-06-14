import React,{Component} from 'react';
import {Container,Jumbotron,Progress} from 'reactstrap';
import {Button, Card, CardImg, CardTitle, CardText, Row, Col,  InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import {Animated} from "react-animated-css";

import bgimage from './images.jpg'

export default class Result extends Component{

    constructor(props) {
        super(props);
        this.state = {
          contacts: [],
          albums:[],
          patients: []
        };
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
                <h1 className="display-5">COVID Pomoc</h1>
                <p className="lead">Stav vybavenia požiadavky</p>
                <hr className="my-2" />
                <p><Progress multi>
                    <Progress animated bar value="10">V systéme</Progress>
                    <Progress animated bar color="success" value="5" >Na ceste k Vám</Progress>
                   </Progress>
                </p>
                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                <Card body outline color="primary">
                    
                    <CardTitle><h2>Vybrali ste si: Donášku potravín</h2></CardTitle>
                    <CardText>Pripravte na príjazd kuriérskej služby. Zelená farba ukazovateľa znamená, že sú na ceste.</CardText>
                        <InputGroup>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>Na ceste k Vám</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="je kuriér spoločnosti Bold František, ŠPZ BA234AC" />
                        </InputGroup>
                        <br /><p/>
                        <InputGroup>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>Osoba</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="" />
                        </InputGroup>
                        <br /><p/>
                        <InputGroup>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>Adresa</InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="" />
                        </InputGroup>
                        
                </Card>
                </Animated>
                </Container>
                </Jumbotron>
            </div>
        );
    }
}