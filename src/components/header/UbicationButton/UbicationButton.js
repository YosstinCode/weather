import {useState} from "react"
import {UbicationButtonStyle} from "./style"


const UbicationButton = () => {
    const [coords, setCoords] = useState({});

    const handleClick = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
  
        setCoords({
          latitude,
          longitude,
        });
  
      });
    };
    return (
        <UbicationButtonStyle onClick={handleClick}/>
    )
}

export default UbicationButton
