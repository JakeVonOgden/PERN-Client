let APIURL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'https://juniper-server.herokuapp.com/';
        break;
    case 'juniper-server.herokuapp.com/':
        APIURL = 'https://juniper-server.herokuapp.com/';
}

export default APIURL;