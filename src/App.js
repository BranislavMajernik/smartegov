import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from './logo.svg';
import './App.css';
import './Animate.css';
import About from './components/About';
import ContractInfo from './components/ContractInfo';
import BuildContract from './components/BuildContract';
import Provider from './components/Provider';
import Menu from './components/Menu';
import Header from './components/Header';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Menu/>
					<Switch>
						<Route exact path='/' render={
							props =>
							<div>
								<Header />
							</div>
							} />
						<Route exact path='/about' component={About} />
						<Route exact path='/contractinfo' component={ContractInfo} />
						<Route exact path='/buildcontract' component={BuildContract} />
						<Route exact path='/provider' component={Provider} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;