import 'animate.css';
import ShinyText from './shiny';  
import divider from '../components/divider.png';
import '../App.css';



function Aboutme (){
return(


 <div id='about'>
 <div className='proffs'>
  <img src={divider} alt="Ruben Gerber" />
 </div>
    
        <p>Hi!My name is Ruben Gerber and I am a software developer all the way from ZA.</p>
        <p> I’m a Computer Science graduate  with a deep passion for coding and everything technology-related.</p>
        <p>Whether it’s building sleek user interfaces, exploring the latest tech trends, or solving real-world problems with code, I’m always excited to dive in and create something meaningful.</p>
        <p>Driven by curiosity and continuous learning, I thrive on transforming ideas into innovative digital experiences</p>
       <p>Thanks for stopping by — let’s build something great together!</p>
            <button className='btn' onClick={() => document.getElementById('SectionThree').scrollIntoView({ behavior: 'smooth' })}>
     <ShinyText text="Projects Created" disabled={false} speed={3} />
            </button>

    <div className='prof'>
  <img src={divider} alt="Ruben Gerber" />
   </div>
</div>

 


    )
}













export default Aboutme;





