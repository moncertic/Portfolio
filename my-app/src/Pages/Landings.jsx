import Navbar from '../components/navbar';  
import 'animate.css';
import '../App.css';
import Aboutme from '../components/about';


import Particles from '../components/particles';



function LandingPage() {
  return (
  <div>
    <main>

  
  <Navbar />

 

  <div  id='SectionTwo'className='SectionTwo'>
      <Aboutme />
  </div>

  <div id='SectionThree' className='SectionThree'>
    
 
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
