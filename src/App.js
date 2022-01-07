import {GlobalStyle} from "./GlobalStyle"
import Header from "./components/header/Header"
import Main from "./components/main/Main"

export default function App() {
    return (<>
        <GlobalStyle/>
        <Header />
        <Main/>
    </>)
}