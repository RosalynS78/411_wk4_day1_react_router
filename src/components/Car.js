import React from 'react'
import cars from '../cars.json'
import { useParams } from 'react-router-dom';

// import MUI components here //
import { Container, Paper, Chip } from "@mui/material";

const Car = (props) => {
  const id = useParams().id
 
  const car = cars.find((car) => car.id === Number(id));

  return (
    // Container, Paper, Chip //
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h1> {car.Name} </h1>
        {/* // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys */}
        {Object.keys(car).map((key, idx) => {
          return <Chip key={idx} label={`${key}: ${car[key]}`}></Chip>;
        })}
      </Paper>
    </Container>



  )
 
}

export default Car