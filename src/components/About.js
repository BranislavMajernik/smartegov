import React,{Component} from 'react';
import {Container,Jumbotron,UncontrolledCarousel, Row, Col} from 'reactstrap';
import bgimage from './o1.png'

export default class About extends Component{

    items = [
        {
          src: './health.jpeg',
          altText: 'Spájame sa v pomoci',
          caption: 'Digitálne zdravotné služby',
          header: 'Dáta',
          key: '1'
        },
        {
          src: './health.jpeg',
          altText: 'Spájame sa v pomoci',
          caption: 'Digitálne zdravotné služby',
          header: 'Integrácia',
          key: '2'
        },
        {
          src: './health.jpeg',
          altText: 'Spájame sa v pomoci',
          caption: 'Digitálne zdravotné služby',
          header: 'Aplikácie',
          key: '3'
        }
      ];

    render(){
        return(
            <div>
                <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }} fluid>
                <Container fluid>
                <h1 className="display-5">COVID Pomoc</h1>
                <p className="lead">Rýchla pomoc.</p>
                <hr className="my-2" />
                <p></p>
                <Row>
                <Col sm="4"></Col> 
                <Col sm="4"><UncontrolledCarousel items={this.items} /></Col>
                
                </Row>
              </Container>
                </Jumbotron>
            </div>
        );
    }
}