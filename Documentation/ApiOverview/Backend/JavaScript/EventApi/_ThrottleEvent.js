import ThrottleEvent from '@typo3/core/event/throttle-event';

new ThrottleEvent('mousewheel', function (e) {
  console.log('Triggered every 100ms!');
}, 100).bindTo(document);
