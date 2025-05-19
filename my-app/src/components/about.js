import 'animate.css';

import divider from '../components/divider.png';
import CircularText from './circle';
import '../App.css';
function Aboutme (){
return(


 <div id='about' className='animate__animated animate__fadeInUp'>
  
  <div className='proffs'>
  <img src={divider} alt="Ruben Gerber" />
    </div>
    
        <p>Hello,my name is Ruben Gerber and I am a developer all the way from ZA.</p>
        <p> I’m a Computer Science graduate from South Africa with a deep passion for coding and everything technology-related.</p>
        <p>Whether it’s building sleek user interfaces, exploring the latest tech trends, or solving real-world problems with code, I’m always excited to dive in and create something meaningful.</p>
        <p>Driven by curiosity and continuous learning, I thrive on transforming ideas into innovative digital experiences</p>
       <p>Thanks for stopping by — let’s build something great together!</p>
    <div className='prof'>
  <img src={divider} alt="Ruben Gerber" />
    </div>


 </div>


    )
}




function Stuff(){
return(
<div className='Projects'>
<p>Projects Created</p>
</div>


)


}



function Circle(){
return(
<CircularText
  text="*RUBEN*GERBER"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>


)



}






export default Aboutme;

export {Stuff};
export {Circle};




