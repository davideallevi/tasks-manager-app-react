import '../App.scss'
import Navigation from './Navigation'

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Navigation />
        </header>
    )
}

export default Header
