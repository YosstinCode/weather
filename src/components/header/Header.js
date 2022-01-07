import Nav from "./nav/Nav"
import { HeaderStyle } from "./style"
import WeatherHeader from "./weatherHeader/WeatherHeader"

const Header = () => {
    return (
        <HeaderStyle>
            <Nav/>
            <WeatherHeader/>
        </HeaderStyle>
    )
}

export default Header
