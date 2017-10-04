import React from 'react';
import { Link } from 'react-router-dom';

class Cities extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cities: [] };
    }

    componentWillMount() {
        fetch('http://localhost:3000/api/cities')
            .then((response) => {
                return response.json()
            })
            .then((cities) => {
                this.setState({ cities: cities })
            })
    }


    render() {
        if (this.state.cities.length > 0) {
            return (
                <div>
                    <h1>Ciudades</h1>
                    <table>
                        <tbody>
                        {this.state.cities.map((city, i) => <TableRow key = {i} data = {city} />)}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return <p className="text-center">Cargando empleados...</p>
        }
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <Link to={"/cities/"+this.props.data.id} key={this.props.data.id}>
                        {this.props.data.id}
                    </Link>
                </td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.lat}</td>
                <td>{this.props.data.lng}</td>
            </tr>
        );
    }
}


export default Cities;