import React from 'react'

import { Card, CardTitle, CardText, Button, Row, Col} from "reactstrap";
import {Animated} from "react-animated-css";
import axios from 'axios';

    const TableAcd = ({ patients }) => {

      function onKlik(obj) {
        console.log(obj);
        axios.put('https://bnwcsnniopjzils-atpdbbmsk.adb.uk-london-1.oraclecloudapps.com/ords/books_admin/covid/clients/',obj)
        .then(res => console.log(res.data));
        }

      return (
        <div>  
            {patients.map((patient) => ( 
              <Row>
              <Col sm="12">  
              <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
              <Card body outline color="primary">
              <CardTitle>{patient.firstname} {patient.lastname}</CardTitle>
              <CardText>Adresa: {patient.street} {patient.strnumber}, {patient.city} ; Telefón: {patient.telephone}</CardText>
                    <Button color="primary" onClick={onKlik(patient.telephone)}>Prevziať</Button> 
              </Card><p></p>
              </Animated>
              </Col>
              </Row>
           ))}  
        </div>
      )
    };

export default TableAcd