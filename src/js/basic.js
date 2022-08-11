import Inspector from './Inspector';
import { elemButton, buttonMessage, buttonClose } from './utils';

const inspector = new Inspector();

elemButton.addEventListener('click', () => {
  inspector.getCollapse();
});

buttonMessage.addEventListener('click', () => {
  inspector.getMessage();
});

buttonClose.addEventListener('click', () => {
  inspector.closeMessage();
});
