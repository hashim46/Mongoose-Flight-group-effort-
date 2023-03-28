import React from 'react'
import Navbar from './layout/Navbar';
import DefaultLayout from './layout/DefaultLayout';
const Show = (props) => {

    let choices = [
        'SAN',
        "AUS",
        "DAL",
        "LAX",
        "SEA"
    ];
    let index
    props.flight.destinations.map(item => {
        index = choices.findIndex(choice => choice.includes(item.airport))
        choices.splice(index, 1)
    })
    return ( 
        <DefaultLayout>
            <Navbar />

            <div className='show-container'>
            <div className='flight-info'>
                <h1>
                    {props.flight.airline}
                </h1>
                <p>
                    flights: {props.flight.flights}
                </p>
                <p>
                    departs: {props.flight.departs.toString()}
                </p>
                <p>
                    airport: {props.flight.airport}
                </p>
            </div>

            <form className='destination-form' action={`/flights/${props.flight._id}/destinations`} method="POST">
                {
                    choices.length ?
                    <>
                        <label htmlFor="date">Time of Arrival:</label>
                        <input type="datetime-local" id="date" name="arrival" value={props.departsDate} /><br /><br />
                        <label htmlFor="airport">Airport:</label>
                        <select style={{width: "80px"}} name="airport">
                            {
                                choices.map(item => (
                                <option>{item}</option>
                                ))
                            } 
                        </select>
                        <button>Add</button>
                    </>
                    : ''
                }
                </form>

                {
                            props.flight.destinations.length ?
                            <div className='destinations'>
                                <div style={{textDecoration: 'underline'}}>Destinations:</div> <br />
                                <p style={{margin: 0}}>{props.flight.destinations.map((item, i) => {
                                return  <div key={i}>
                                        <div>{item.airport}</div>
                                        <div>{item.arrival.toString()}</div>
                                        <br />
                                    </div>
                                }
                                )}</p>
                            </div>
                            : ''
                    }

                <form action={`/flights/${props.flight._id}?_method=DELETE`} method="POST">
                    <button>Delete</button>
                </form>
            
            <a href="/flights">back</a>
            </div>
        </DefaultLayout>
     );
}
 
export default Show;