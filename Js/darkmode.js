const options = 
{
bottom: '54px', // default: '32px'
right: 'unset', // default: '32px'
left: '24px', // default: 'unset'
time: '0.9s', // default: '0.3s'
mixColor: '#fff', // default: '#fff'
backgroundColor: '#fff',  // default: '#fff'
buttonColorDark: '#000000',  // default: '#100f2c'
buttonColorLight: '#fff', // default: '#fff'
saveInCookies: false, // default: true,
label: '🌓', // default: ''
autoMatchOsTheme: true // default: true
}
const darkmode = new Darkmode(options);
darkmode.showWidget();