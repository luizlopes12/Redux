import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
const MyRoute = ({component: Component, isClosed, ...rest}) => {
 const isLoggedIn = false;
 if(isClosed && !isLoggedIn){

    return(
    <Redirect 
    from='*'
    to={{pathname: '/login', state: {prevPath: rest.location.pathname}}}
    
    />
    )
    }
    return <Route {...rest} element={Component}/>
}

export default MyRoute

MyRoute.defaultProps = {
    isClosed: false,
}

MyRoute.PropTypes = {
    Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool,
}