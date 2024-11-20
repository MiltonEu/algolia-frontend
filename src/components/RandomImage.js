import gastly from '../assets/gastly.gif';
import blastoise from '../assets/blastoise.gif';
import charizard from '../assets/charizard.gif';
import snorlax from '../assets/snorlax.gif';
import alakazam from '../assets/alakazam.gif';
import ninetails from '../assets/ninetails.gif';
import "./RandomImage.css";


const RandomImage = () => {
    const images = [gastly, blastoise, charizard, snorlax, alakazam, ninetails];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    
    return <img src={randomImage} alt="random pokemon" className='random-image'/>;
    }

export default RandomImage;
