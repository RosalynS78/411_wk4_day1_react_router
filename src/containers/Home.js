import { connect } from 'react-redux'
// import the visual React component "Home"

import Home from '../components/Home';
// import actions
import { addCar, removeCar } from '../redux/actions'


// mapStateToProps function - takes a piece of state which is part of your store- and passes it to your component as a property(props)



const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

// actions.js
const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car)),
        removeCar: (index) => dispatch(removeCar(index))
    }
}



// wrap the visual React Component "Home" with the Redux Container Component Home
// exports default dumb component 

// pass in the two functions as arguments to the `connect` function.
export default connect(mapStateToProps, mapDispatchToProps)(Home)

// is now a smart component/container



