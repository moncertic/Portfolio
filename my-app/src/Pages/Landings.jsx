import Navbar from '../components/navbar';  
import 'animate.css';
import '../App.css';
import Aboutme from '../components/about';

import { Stuff } from '../components/about';
import Particles from '../components/particles';
import {Circle} from '../components/about';
function LandingPage() {
  return (
  <div>
    <main>

  
  <Navbar />
    <Circle />
  
      <Aboutme />
      <Stuff />


        <Particles
    particleColors={['blue', 'blue']}
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
