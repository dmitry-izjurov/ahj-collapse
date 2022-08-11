import {
  elemBox, buttonMessage, wrapperForm
} from './utils';

export default class Inspector {
  constructor() {
    this.data = undefined;
  }

  getCollapse() {
    const speed = 60 / 1000;
    const frameDuration = 1 / speed;
    const duration = 1 * 1000;
    const framesCount = duration / frameDuration;
    const min = 0;
    const max = 100;
    const stepSize = max / framesCount;
    
    if (elemBox.classList.contains('hidden')) {
      elemBox.classList.remove('hidden');
      
      let current = 0;

      function step() {
        current += stepSize;
        elemBox.style.height = current + 'px';
        
        if (current < max) setTimeout(step, frameDuration);
      }
  
      step();
    } else {
      let current = 100;

      function step() {
        current -= stepSize;
        elemBox.style.height = current + 'px';
        
        if (current > min) setTimeout(step, frameDuration);
        if (current <= min) elemBox.classList.add('hidden');
      }
  
      step();
    }
  }

  getMessage() {
    buttonMessage.classList.toggle('button_message_transform');
    setTimeout(() => {
      buttonMessage.classList.toggle('hidden');
      wrapperForm.classList.toggle('hidden');
    }, 100);
    setTimeout(() => {
      wrapperForm.classList.toggle('wrapper__form_transform');
    }, 120);
  }

  closeMessage() {
    wrapperForm.classList.toggle('wrapper__form_transform');
    setTimeout(() => {
      wrapperForm.classList.toggle('hidden');
      buttonMessage.classList.toggle('hidden');
    }, 200);
    setTimeout(() => {
      buttonMessage.classList.toggle('button_message_transform');
    }, 220);
  }
}
