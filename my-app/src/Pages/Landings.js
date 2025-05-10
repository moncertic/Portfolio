import React from 'react';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import '../App.css'
function LandingPage() {
  return (
    <div style={{ height: '150vh',color:'white', marginTop:'100vh',fontFamily:'Verdana', }}>
      
        <TrackVisibility once>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h1> Welcome</h1>
            </div>
          }
        </TrackVisibility>
  
    </div>
  );
}

export default LandingPage;
