import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AddListing from '../containers/AddListing'
import Total from '../containers/Total'
const Listing = (props) => {
  return (
      <Container maxWidth="lg" className="car-container">
          <h4>Welcome, {props.user.username}</h4>
          <div className="flex-container">
                <Total />
                <AddListing UrgentCareTotal={props.UrgentCare.length} />
            </div>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>Hours</TableCell>
                      <TableCell>Delete</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
              {props.UrgentCares.map((UrgentCare, idx) => (
                  <TableRow key={UrgentCare.id}>
                      <TableCell component="th" scope="row">
                          {UrgentCare.id}
                      </TableCell>
                      <TableCell>{UrgentCare["name"]}</TableCell>
                      <TableCell>{UrgentCare["description"]}</TableCell>
                      <TableCell>{UrgentCare["location"]}</TableCell>
                      <TableCell>{UrgentCare["hours"]}</TableCell>
                      <TableCell>
                          <DeleteIcon
                              onClick={() => props.removeUrgentCare(idx)}
                             
                                  
                              className="icon text-red" />
                      </TableCell>
                  </TableRow>
              ))}
              </TableBody>
          </Table>
      </Container>
  )
}

export default Listing