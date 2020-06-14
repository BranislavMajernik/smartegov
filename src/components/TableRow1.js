// TableRow.js

import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle, CardText, Button} from "reactstrap";

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.setClaimp = this.setClaimp.bind(this);
       
    }
   
    async setClaimp() {
      console.log("telefon:", this.props.obj.telephone);

      const headers = {
          'Content-Type': 'text/plain'
      };
      //await axios.put('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/covid/clients/',this.props.obj.telephone)
      await axios.post('http://localhost:4000/claimp/claimp',{telephone:this.props.obj.telephone})
         .then(res => console.log(res.data))
         .catch(err => console.log(err))
      this.props.history.push('/result1');    
  }

  render() {
    return (
        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
        <Card body outline color="danger">
        <CardTitle>{this.props.obj.firstname} {this.props.obj.lastname}</CardTitle>
        <CardText>Adresa: {this.props.obj.street} {this.props.obj.strnumber}, {this.props.obj.city} ; Telefón: {this.props.obj.telephone}</CardText>
              <Button color="danger" onClick={this.setClaimp}>Prevziať</Button> 
        </Card><p></p>
        </Animated>
    );
  }
}

export default withRouter(TableRow);