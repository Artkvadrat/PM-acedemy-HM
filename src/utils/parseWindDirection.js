import east from '../img/E.png';
import north from '../img/N.png';
import west from '../img/W.png';
import south from '../img/S.png';
import northEast from '../img/NE.png';
import northWest from '../img/NW.png';
import southWest from '../img/SW.png';
import southEast from '../img/SE.png';

const parseWindDirection = (windDirection) => {
    switch (windDirection) {
        case 'E':
            return {
                src: east,
                title: 'East',
            };
        case 'N':
            return {
                src: north,
                title: 'North',
            };
        case 'W':
            return {
                src: west,
                title: 'West',
            };
        case 'S':
            return {
                src: south,
                title: 'South',
            };
        case 'NE':
            return {
                src: northEast,
                title: 'North-East',
            };
        case 'NW':
            return {
                src: northWest,
                title: 'North-West',
            };
        case 'SE':
            return {
                src: southEast,
                title: 'South-East',
            };
        case 'SW':
            return {
                src: southWest,
                title: 'South-West',
            };

        default:
            return '';
    }
}

export default parseWindDirection;
