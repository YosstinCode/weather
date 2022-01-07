import { CardImageStyle, CardTextStyle, CardTitleStyle, CardWeatherStyle, DegreesWrapper } from "./style"
import weatherIcon from "../../../../public/assets/Sleet.png"


const CardWeather = () => {
    return (
        <CardWeatherStyle>
            <CardTitleStyle>Tomorrow</CardTitleStyle>
            <CardImageStyle src={weatherIcon}/>
            <DegreesWrapper>
                <CardTextStyle>16ºC</CardTextStyle>
                <CardTextStyle second={true}>11ºC</CardTextStyle>
            </DegreesWrapper>
        </CardWeatherStyle>
    )
}

export default CardWeather
