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
        navigator.serviceWorker.getRegistration('./sw.js').then(function(reg) {
            
            if (reg === null) {
                console.log('is null 3');
            }
            else if (reg === undefined) {
                console.log('is undefined 3');
            }
            else {
                console.log('Hello World! 3');
            }
            
            //reg.showNotification('Hello world!');
        });
    }
}
