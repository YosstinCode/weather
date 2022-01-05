import SearchPlaceButton from "../SearchPlaceButton/SearchPlaceButton"
import UbicationButton from "../UbicationButton/UbicationButton"
import { NavStyle } from "./style"

const Nav = () => {
    return (
        <NavStyle>
            <SearchPlaceButton />
            <UbicationButton />       
        </NavStyle>
    )
}

export default Nav
