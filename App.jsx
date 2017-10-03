import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { cities: [] }
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
                    <Header title="Ciudades"/>
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

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.lat}</td>
                <td>{this.props.data.lng}</td>
            </tr>
        );
    }
}

export default App;