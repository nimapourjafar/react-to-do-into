import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    return (
        <header className='header'>
            <h1 >{props.name}'s Tasks</h1>
            <Button color = {props.showAddTask ? "red" : "green"} title={props.showAddTask ? "Close Menu" : "Add Task"} onClick = {props.onAdd}/>
        </header>
    )
}

Header.defaultProps={
    name:'Task Tracker',
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
}


export default Header
