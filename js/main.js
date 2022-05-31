window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/civil-twilight/sw.js');
    }
}

/*
// alternate registration
self.addEventListener('load', function(event) {
    let sw = await navigator.serviceWorker.register('/civil-twilight/sw.js');
    console.log(sw);
});
*/

// request permission from user
if (Notification.permission == 'default') {
    Notification.requestPermission();
}

function displayNotification() {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration('/civil-twilight/sw.js').then(function(reg) {
            var options = {
                body: 'Prayer for [FILL] has entered',
                icon: '/civil-twilight/images/avatar-24.png',
                vibrate: [12, 4, 12, 4, 12]
            };
            reg.showNotification('Prayer Time', options);
        });
    }
}
