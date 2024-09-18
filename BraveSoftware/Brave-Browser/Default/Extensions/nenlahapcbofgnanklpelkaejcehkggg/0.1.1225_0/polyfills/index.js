import './localStorage.js';
import './sw-xhr.js';

// Proxy objects for the service worker in order for 'vendor/analytics.js' to work

self.document = {
  cookie: '',
};

self.window = self;

// devicePixelRatio/screen are populated by pageView, but need to be undefined during a fresh install
self.window.devicePixelRatio = undefined;
self.window.screen = {
  availWidth: undefined,
  availHeight: undefined,
  width: undefined,
  height: undefined,
};
