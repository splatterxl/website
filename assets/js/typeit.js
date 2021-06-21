import { sleep } from './util.js';

new TypeIt('#prompt-text', {
  strings: 'website --load',
  speed: 75,
  loop: false,
}).go();

await sleep(1500);
console.log('here');
document.querySelector('#cmd-res .title').textContent = 'Website CLI v1.0.0';
document.querySelector('#cmd-res .copyright').textContent =
  'Copyright 2021 Splatterxl';
document.querySelector(
  '#cmd-res .loading'
).textContent = `Content is loading... requested page ${location.pathname}`;
document.querySelector('#cmd-res .please-wait').textContent = 'Please wait...';

await sleep(3000);
if (location.pathname === '/404') {
  const nocontent = document.querySelector('#cmd-res .nocontent');
  nocontent.textContent = 'No content found for this page.';
  nocontent.hidden = false;
  nocontent['aria-hidden'] = false;
}
