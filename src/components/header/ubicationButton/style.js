import styled from "styled-components"
import icon from "../../../../public/assets/Ubication.svg"
import { Theme } from "../../../Theme"

export const UbicationButtonStyle = styled.button`
    padding: 1.25rem;
    background: ${Theme.color.gray} url(${icon}) center no-repeat;   
    border:none;
    border-radius:50%;
`