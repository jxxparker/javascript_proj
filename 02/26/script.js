const day = 'Wednesday';

switch(day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the wknd');
        break;
    default:
        console.log('Not a valid day');
}

if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'Wednesday' || 'Thursday') {
    console.log('Write code examples');
} else if (day === 'Friday') {
    console.log('Record videos');
} else if (day === 'Saturday' || 'Sunday') {
    console.log('Enjoy the wknd');
} else {
    console.log('Not a valid day');
}