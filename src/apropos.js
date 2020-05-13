import './styles.scss'
import Apropos from './components/apropos/aprop-render.js';

const aProposPg = new Apropos;
aProposPg.render();



if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}
