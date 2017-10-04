import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home.jsx';
import Cities from './components/Cities.jsx';
import CityDetail from './components/CityDetail.jsx';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/cities/:id" component={CityDetail}/>
            <Route path='/cities' component={Cities}/>
        </Switch>
    </main>
);

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cities'>Ciudades: </Link></li>
            </ul>
        </nav>
    </header>
);

class App extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

export default App;