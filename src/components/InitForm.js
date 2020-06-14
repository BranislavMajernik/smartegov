import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import axios from 'axios';

export default class InitForm extends Component {
    
    constructor(props) {
    super(props);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeStreet = this.onChangeStreet.bind(this);
    this.onChangeStrNumber = this.onChangeStrNumber.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);

    this.state = {
        PhoneNumber: '',
        FirstName: '',
        LastName: '',
        Street: '',
        StrNumber: '',
        City: ''
    }
    }
    onChangePhoneNumber(e) {
        this.setState({
            PhoneNumber: e.target.value
        });
        
    }

    onChangeFirstName(e) {
        this.setState({
            FirstName: e.target.value
        });
        
    }

    onChangeLastName(e) {
        this.setState({
            LastName: e.target.value
        });
        
    }

    onChangeStreet(e) {
        this.setState({
            Street: e.target.value
        });
        
    }

    onChangeStrNumber(e) {
        this.setState({
            StrNumber: e.target.value
        });
        
    }

    onChangeCity(e) {
        this.setState({
            City: e.target.value
        });
        
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            PhoneNumber: this.state.PhoneNumber,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Street: this.state.Street,
            StrNumber: this.state.StrNumber,
            City: this.state.City

        };
        
        axios.post('http://localhost:4000/verify/add',obj)
            .then(res => console.log(res.data));
               
        this.setState({
            PhoneNumber: '',
            FirstName: '',
            LastName: '',
            Street: '',
            StrNumber: '',
            City: ''
        })

        
       
    }


    handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.PhoneNumber;
    
        fetch('http://example.com',{
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(response => {
            response.json().then(data =>{
              console.log("Successful" + data);
            })
        })
      }  

    render(){
        return ( 
            <div>
            <form onSubmit={this.onSubmit.bind(this)}>    
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>Telefónne číslo</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.PhoneNumber} onChange={this.onChangePhoneNumber} placeholder="zadajte Vaše telefónne číslo" />
            </InputGroup>
            <br />
            <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>Meno</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.FirstName} onChange={this.onChangeFirstName} placeholder="Ján" />
            <InputGroupAddon addonType="prepend">    
                <InputGroupText>Priezvisko</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.LastName} onChange={this.onChangeLastName} placeholder="Novák" />
            </InputGroup>
            <br />
            <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>Ulica</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.Street} onChange={this.onChangeStreet} placeholder="Karloveská" />
            <InputGroupAddon addonType="prepend">    
                <InputGroupText>Číslo</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.StrNumber} onChange={this.onChangeStrNumber} placeholder="35" />
            <InputGroupAddon addonType="prepend">    
                <InputGroupText>Mesto/Obec</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.City} onChange={this.onChangeCity} placeholder="Bratislava" />    
            </InputGroup>
            <br />
            <Button type="submit "color="success">Odoslať</Button>
            </form>
            </div>
            );
    }
};



