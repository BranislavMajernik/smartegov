import React, {Component} from 'react';
import {Jumbotron, Button} from 'reactstrap';
import bgimage from './o1.png'
import LoginForm from './LoginForm';
import MenuCard from './MenuCard';

export default class Header extends Component{
    render(){
        return (
          <div>
          <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover'}}>
            <h1 className="display-5">Smart eGovernment</h1>
            <p className="lead">Prosím identifikujte sa prostredníctvom mobileID. Pošleme Vám spätne SMS kód na kontrolu.</p>
              <LoginForm/>
            <hr className="my-2" />
            <p>Smart eGovernment je definovaný ako inteligentná elektronická forma výkonu verejnej správy prostredníctvom informačno-komunikačných technológií (IKT). Smart eGovernment je maximálne využitie prostriedkov a nástrojov informačných technológií zo strany štátu tak, aby občan nemusel dodávať informácie, ktoré už štát má.
               Pomocou Smart Contracts, auditovaného transparetného inteligentného konania, už nie je potrebné zisťovať ako má občan postupovať. Smart Contracts garantujú bezpečnú automatizáciu konania bez prieťahov.
               Poskytuje tak skvalitnenie verejných služieb pre občanov, podnikateľov a celú spoločnosť.</p>
          </Jumbotron>
        </div>
          );
    }
}

