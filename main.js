import newG6 from './new-g6';
import oldG6 from './old-g6';

console.info('G6 version', G6.version);

window.isNewG6 ? newG6() : oldG6();
