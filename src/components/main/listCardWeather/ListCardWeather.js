import CardWeather from "../cardWeather/CardWeather"
import { ListCardWeatherStyle } from "./style"

const ListCardWeather = () => {
    return (
        <ListCardWeatherStyle>
            <CardWeather/>
            <CardWeather/>
            <CardWeather/>
            <CardWeather/>
            <CardWeather/>
        </ListCardWeatherStyle>
    )
}

export default ListCardWeather
