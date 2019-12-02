importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log('Workbox loaded');
    workbox.routing.registerRoute(
        new RegExp('/*'),
        new workbox.strategies.NetworkFirst()
    );
} else {
    console.log('Workbox not loaded');
}