import cloudy from '../img/cloudy.png';
import mostlyCloudy from '../img/mostly cloudy.png';
import mostlySunny from '../img/mostly sunny.png';
import rainSnow from '../img/rain snow.png';
import rain from '../img/rain.png';
import snow from '../img/snow.png';
import sunny from '../img/sunny.png';

const parseGeneralDescription = (description) => {
    switch (description) {
        case 'Cloudy':
            return {
                src: cloudy,
            }
        case 'Mostly Cloudy':
            return {
                src: mostlyCloudy,
            }
        case 'Mostly Sunny':
            return {
                src: mostlySunny,
            }
        case 'Rain/Snow':
            return {
                src: rainSnow,
            }
        case 'Rain':
            return {
                src: rain,
            }
        case 'Snow':
            return {
                src: snow,
            }
        case 'Sunny':
            return {
                src: sunny,
            }
        default:
            return ''
    }
}

export default parseGeneralDescription;
