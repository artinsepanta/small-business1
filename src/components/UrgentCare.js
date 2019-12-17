import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import LocationOnIcon from "@material-ui/icons/LocationOn";
//import NavListing from './NavListing'


const UrgentCare = (props) => {
    const id = props.match.params.id
  
    const UrgentCare = props.UrgentCares.find(u => u.id === id)
    
    const AnyReactComponent = ({ text }) => (
        <div>
          <LocationOnIcon className="text-red" />
        </div>
      );
    
      const defaultProps = {
        center: {
          lat: UrgentCare.location.latitude,
          lng: UrgentCare.location.longitude
        },
        zoom: 11
      };
    return (
        <Container maxWidth="sm" className="UrgentCare-container">
            <Paper className="UrgentCare-paper">
                <h2>{UrgentCare.name}</h2>
                {
                    Object.keys(UrgentCare).map((key, idx) => {
                        return <Chip label={`${key}: ${UrgentCare[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
        
    )
}

export default UrgentCare;