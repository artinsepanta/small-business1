import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import UrgentCares from '../UrgentCares.json'
import { Link } from 'react-router-dom';

const Home = (props) => {
//console.log(UrgentCares)
    return (
        <div className="card-container">
            {UrgentCares.map((UrgentCare, idx) => (
                <Card key={UrgentCare.id} className="card">
                    <CardContent className="text-gray">
                        <span>{UrgentCare.name.toUpperCase()}</span>
                         <ul>
                            <li>Description:{UrgentCare.description["description"]}</li>
                            <li>Location: {UrgentCare.location["location"]}</li>
                             <li>Hours: {UrgentCare.hours["address"]}</li>
                        </ul> 

                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/UrgentCares/${UrgentCare.id}`}>See More Details</Link>
                        <Link to={`/map/${UrgentCare.id}`}>Map</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
  }
  export default Home

