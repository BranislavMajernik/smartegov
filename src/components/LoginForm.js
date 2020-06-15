import React, {Component} from 'react';
import {Button, Card, CardImg, FormText, CardTitle, CardText, Row, Col,  InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import { 	withRouter } from 'react-router-dom';
import axios from 'axios';
import {Animated} from "react-animated-css";
import midimage from './frame1.png'

class LoginForm extends Component{
  constructor(props) {
    super(props);
    this.onChangeSMS1 = this.onChangeSMS1.bind(this);
    this.onChangeSMS2 = this.onChangeSMS2.bind(this);
    
    this.state = {
        SMSNumber1: '',
        SMSNumber2: '',
        SMSNumber1valid: false,
        SMSNumber2valid: false
    }
    }
    onChangeSMS1(e) {
        this.setState({
            SMSNumber1: e.target.value
        });
        
    }
    onChangeSMS2(e) {
      this.setState({
          SMSNumber2: e.target.value
      });
      
    }

    handleValidation1(){
      let sms = this.state.SMSNumber1;

      if (sms.length < 4) {
        this.SMSNumber1valid = false;
      }
      else {this.SMSNumber1valid = true}
     return this.SMSNumber1valid;
    }

    handleValidation2(){
      let sms = this.state.SMSNumber2;

      if (sms.length < 4) {
        this.SMSNumber2valid = false;
      }
      else {this.SMSNumber2valid = true}
     return this.SMSNumber2valid;
    }

    onSubmit1(e) {
      e.preventDefault();
      const obj = {
          SMSNumber1: this.state.SMSNumber1
      };

      if(this.handleValidation1()){
        axios.post('http://localhost:4000/verify/addsms1',obj)
        .then(res => console.log(res.data));
           
        this.setState({
        SMSNumber1: '',
        })  
        this.props.history.push('/contractinfo');
        } else {
          alert("Zadajte SMS kód !")
      }
      
      }

      onSubmit2(e) {
        e.preventDefault();
        const obj = {
            SMSNumber2: this.state.SMSNumber2
        };
        
        if(this.handleValidation2()){
          axios.post('http://localhost:4000/verify/addsms2',obj)
          .then(res => console.log(res.data));
             
          this.setState({
          SMSNumber2: '',
          })  
          this.props.history.push('/result2');
          } else {
            alert("Zadajte SMS kód !")
        }
        }

    render(){
        return (
    <Row> 
      <Col sm="2"></Col>  
      <Col sm="4">
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <Card body outline color="success" width="18rem">
        <form onSubmit={this.onSubmit1.bind(this)}>   
          <CardTitle><h2>Identifikujte sa s mobileID</h2></CardTitle>
          <img src={midimage} alt="Card image SQ" />
          <CardText>
            <FormText>Počkajte si na prepojenie s telefónom. Po úspešnom zaregistrovaní zadajte overovací kód</FormText>
          </CardText>
          <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>Overovací kód</InputGroupText>
                </InputGroupAddon>
                <Input value={this.state.onChangeSMS1} onChange={this.onChangeSMS1} placeholder="zadajte overovací kód z SMS" />
          </InputGroup>
          <p></p>
          <Button type="submit" color="success">Odoslať</Button>
          </form>
        </Card>
       </Animated> 
      </Col>
    </Row>
          );
    }
}

export default withRouter(LoginForm);