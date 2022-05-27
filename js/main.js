window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }

    alert('window loaded');
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
                console.log('is null 5');
            }
            else if (reg === undefined) {
                console.log('is undefined 5');
            }
            else {
                console.log('Hello World! 5');
            }
            
            //reg.showNotification('Hello world!');
        });
    }
}
