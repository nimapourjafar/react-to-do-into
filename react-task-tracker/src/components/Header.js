import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Yes')
    }
    return (
        <header className='header'>
            <h1 >{props.name}'s Tasks</h1>
            <Button color = 'green' title='Add' onClick = {onClick}/>
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
