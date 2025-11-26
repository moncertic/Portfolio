import Navbar from '../components/navbar';  
import 'animate.css';
import '../App.css';
import Aboutme from '../components/about';
import signal from '../components/signal.png';
import InfiniteGallery from '../components/nfiniteGallery';
import Particles from '../components/particles';
import {Circle} from '../components/about';
import { ScrollToSection } from '../components/about';

function LandingPage() {
  return (
  <div>
    <main>

  
  <Navbar />

 <div  className='Section 1'>
    <Circle />
  <img  onClick={ScrollToSection }  src={signal} alt="Ruben Gerber" className='signal'/>
<hr  className='line'/>
<hr  className='Line'/>
  </div>

  <div  id='SectionTwo'className='SectionTwo'>
      <Aboutme />
  </div>

  <div id='SectionThree' className='SectionThree'>
    <InfiniteGallery/>
 
</div>





        <Particles
    particleColors={['red', 'red']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={true}
    disableRotation={true}
  />
    
    </main>
</div>
  );
}

export default LandingPage;
