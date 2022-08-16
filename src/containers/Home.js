import { connect } from 'react-redux'
// import the visual React component "Home"

import Home from '../components/Home';


// mapStateToProps function - takes a piece of state which is part of your store- and passes it to your component as a property(props)



const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

// wrap the visual React Component "Home" with the Redux Container Component Home
// exports default dumb component 
export default connect(mapStateToProps)(Home)

// is now a smart component/container



