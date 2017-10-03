import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: [
                {
                    id: 'CL',
                    name: 'Santiago',
                    lat: '-33.45',
                    lng: '-70.6667'
                },
                {
                    id: 'CH',
                    name: 'Zurich',
                    lat: '47.3686',
                    lng: '8.5392'
                },
                {
                    id: 'NZ',
                    name: 'Auckland',
                    lat: '-36.8485',
                    lng: '174.7633'
                },
                {
                    id: 'AU',
                    name: 'Sydney',
                    lat: '-33.8678500',
                    lng: '151.2073200'
                },
                {
                    id: 'UK',
                    name: 'Londres',
                    lat: '51.5072',
                    lng: '-0.1275'
                },
                {
                    id: 'USA',
                    name: 'Georgia',
                    lat: '42.0000000',
                    lng: '43.5000000'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Header title="Ciudades"/>
                <table>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i}
                                                                  data = {person} />)}
                    </tbody>
                </table>
            </div>
        );
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