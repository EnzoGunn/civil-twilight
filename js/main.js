window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
}

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

function displayNotification() {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
            
            if (reg === null) {
                console.log('is null');
            }
            else if (reg === undefined) {
                console.log('is undefined');
            }
            else {
                console.log('Hello World!');
            }
            
            //reg.showNotification('Hello world!');
        });
    }
}
