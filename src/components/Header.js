import '../App.scss'
import Navigation from './Navigation'
import NavigationMobile from './NavigationMobile'

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <NavigationMobile />
            <Navigation />
        </header>
    )
}

export default Header
