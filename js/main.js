window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/civil-twilight/sw.js');
    }
}

// request permission from user
if (Notification.permission == 'default') {
    Notification.requestPermission();
}

function displayNotification() {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration('/civil-twilight/sw.js').then(function(reg) {
            reg.showNotification('Hello world!');
        });
    }
    else {
        Notification.requestPermission();
    }
}
