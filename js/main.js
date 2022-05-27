window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/civil-twilight/sw.js').then(function(registration) {
            console.log('Service worker registration succeeded:', registration);
        }, function(error) {
            console.log('Service worker registration failed:', error);
        });
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

        navigator.serviceWorker.getRegistration('/civil-twilight/sw.js').then(function(worker) {
            
            if (worker === null) {
                console.log('is null 5');
            }
            else if (worker === undefined) {
                console.log('is undefined 5');
            }
            else {
                console.log('Hello World! 5');
            }
            
            //worker.showNotification('Hello world!');
        });
    }
}
