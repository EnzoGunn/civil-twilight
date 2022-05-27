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
        
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            registrations.forEach(function(v) { console.log('service worker: ' + v) });
        });

        navigator.serviceWorker.getRegistration('./sw.js').then(function(reg) {
            
            if (reg === null) {
                console.log('is null 4');
            }
            else if (reg === undefined) {
                console.log('is undefined 4');
            }
            else {
                console.log('Hello World! 4');
            }
            
            //reg.showNotification('Hello world!');
        });
    }
}
