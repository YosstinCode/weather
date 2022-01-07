import SearchPlaceButton from "../searchPlaceButton/SearchPlaceButton"
import UbicationButton from "../ubicationButton/UbicationButton"
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
