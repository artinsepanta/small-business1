import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';

const UrgentCare = (props) => {
    const id = props.match.params.id
  
    const UrgentCare = props.UrgentCares.find(c => c.id === id)

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

export default UrgentCare