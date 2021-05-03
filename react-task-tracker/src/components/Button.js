import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, title, onClick}) => {

    return (
        <button onClick={onClick} style ={{backgroundColor: color }} className='btn'> {title} </button>    
    )
}

Button.defaultProps ={
    color:'black',
    title :'Add'

}

Button.propTypes ={
    color: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
