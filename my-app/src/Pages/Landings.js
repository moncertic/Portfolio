import React from 'react';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import '../App.css'
function LandingPage() {
  return (
    <div style={{ height: '150vh' }}>
      <div style={{ marginTop: '100vh' }}>
        <TrackVisibility once>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
              <h1 className="animate__animated animate__bounce">Welcome</h1>
            </div>
          }
        </TrackVisibility>
      </div>
    </div>
  );
}

export default LandingPage;
