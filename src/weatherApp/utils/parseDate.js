const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const parseDate = (date) => {
    return (days[date.getDay()] || '') + ' ' + (date.getDate() || '') + ' ' + (months[date.getMonth()]) + ' ' + (date.getFullYear() || '');
}

export default parseDate;
