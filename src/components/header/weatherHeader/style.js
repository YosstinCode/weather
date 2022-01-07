import styled from "styled-components"
import ubicationIcon from "../../../../public/assets/UbicationIcon.svg"
import { Theme } from "../../../Theme"
import background from "../../../../public/assets/Cloud-background.png"

export const WeatherHeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem;
`

export const WeatherHeaderWrapperStyle = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width:100%;
    height:19.375rem;
    background: url(${background}) center/contain no-repeat;
    background-size:150%;
`

export const WeatherIconStyle = styled.img`
    width: 9.375rem;
    height: 9.375rem;
`

export const DegreesStyle = styled.p`
    font-size: 9rem;
`

export const DegreeSymbolStyle = styled.span`
    font-size: 3rem;
`

export const WeatherNameStyle = styled.p`
    font-size:2.25rem;
`

export const DateStyle = styled.p`
    font-size:1.125rem;
`

export const UbicationStyle = styled(DateStyle)`

`

export const UbicationIconStyle = styled.span`
    display: inline-block;
    background: url(${ubicationIcon}) center/contain no-repeat;
    width:.875rem;
    height: 1.216875rem;

`