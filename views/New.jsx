import React from 'react'
import DefaultLayout from './layout/DefaultLayout';
import Navbar from './layout/Navbar'
const New = (props) => {
    return ( 
    <DefaultLayout>
        <>
        <Navbar />
        <div>
            <h1>Create A Flight</h1>
                <form action='/flights' method='POST'>
                    <label htmlFor="cpny">Name:</label><br />
                    <input type="text" id="cpny" name="airline" /><br /><br />

                    <label htmlFor="fly">flights:</label><br />
                    <input type="text" id="fly" name='flights' /><br /><br />

                    <label htmlFor="port">Airport:</label><br />
                    <select name="airport">
                    {/* ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'] */}
                        <option selected="selected">
                            SAN
                        </option>
                        <option>
                            AUS
                        </option>
                        <option>
                            DAL
                        </option>
                        <option>
                            LAX
                        </option>
                        <option>
                            SEA
                        </option>
                    </select><br /><br />

                    <label htmlFor="date"></label>
                    <input type="datetime-local" id="date" name="departs" value={props.departsDate} />
                    <button>Submit</button>
                </form>
        </div>
    </>
    </DefaultLayout>
     );
}
 
export default New;