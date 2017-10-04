import React from 'react';
import Moment from 'moment';

class CityDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { city: {} }
    }

    componentWillMount() {
        fetch('http://localhost:3000/api/cities/'+this.props.match.params.id)
            .then((response) => {
                return response.json()
            })
            .then((resp) => {
                this.setState({ city: resp })
            })
    }

    render(){
        if(this.state.city.currently != undefined) {
            const currently = this.state.city.currently;
            var time = Moment.utc(currently.time).format('HH:mm');
            return (
                <div>
                    <h1>City {this.props.match.params.id}</h1>
                    <h3>Temperatura: <span>{currently.temperature}</span></h3>
                    <h3>Hora: <span>{time}</span></h3>
                </div>
            )
        }else{
            return <p className="text-center">Cargando empleados...</p>
        }
    }
}

export default CityDetail;
