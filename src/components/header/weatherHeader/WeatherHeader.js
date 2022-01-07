import {
  DateStyle,
  DegreesStyle,
  DegreeSymbolStyle,
  UbicationIconStyle,
  UbicationStyle,
  WeatherHeaderStyle,
  WeatherHeaderWrapperStyle,
  WeatherIconStyle,
  WeatherNameStyle,
} from "./style";
import weatherIcon from "../../../../public/assets/Shower.png";

const WeatherHeader = () => {
  return (
    <>
      <WeatherHeaderStyle>
        <WeatherHeaderWrapperStyle>
          <WeatherIconStyle src={weatherIcon} />
        </WeatherHeaderWrapperStyle>
        <DegreesStyle>
          15<DegreeSymbolStyle>ºc</DegreeSymbolStyle>
        </DegreesStyle>
        <WeatherNameStyle>Shower</WeatherNameStyle>
        <DateStyle>Today - Fri, 5 Jun</DateStyle>
        <UbicationStyle>
          <UbicationIconStyle></UbicationIconStyle>Helsinki
        </UbicationStyle>
      </WeatherHeaderStyle>
    </>
  );
};

export default WeatherHeader;
