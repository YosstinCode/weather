import Nav from "./components/header/Nav/Nav";
import { SearchPlaceButton } from "./components/header/SearchPlaceButton/SearchPlaceButton";
import { HeaderStyle } from "./components/header/style";
import UbicationButton from "./components/header/UbicationButton/UbicationButton";
import {GlobalStyle} from "./GlobalStyle"

export default function App() {
    return (<>
        <GlobalStyle/>
        <HeaderStyle />
    </>)
}