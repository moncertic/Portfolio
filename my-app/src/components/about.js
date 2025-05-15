import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Aboutme (){
return(


 <div className='animate__animated animate__fadeInUp'>
        <p>Hello,my name is Ruben Gerber and I am a developer all the way from ZA.</p>
        <p> I’m a Computer Science graduate from South Africa with a deep passion for coding and everything technology-related.</p>
        <p>Whether it’s building sleek user interfaces, exploring the latest tech trends, or solving real-world problems with code, I’m always excited to dive in and create something meaningful.</p>
        <p>Driven by curiosity and continuous learning, I thrive on transforming ideas into innovative digital experiences</p>
       <p>Thanks for stopping by — let’s build something great together!</p>
        <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' }} />
 </div>

    )
}

function Welcome() {
    return (
          <div className='bounce'>
        <TrackVisibility once>
          {({ isVisible }) =>
            isVisible ? (
              <h1 className="animate__animated animate__fadeInLeftBig">Welcome</h1>
            ) : null
          }
        </TrackVisibility>
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





export default Aboutme;
export  {Welcome};
export {Stuff};





