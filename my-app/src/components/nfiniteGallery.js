// InfiniteGallery.js
import CarpoolApp from '../components/CarpoolApp.png';
import './InfiniteGallery.css';
import DuckApp from '../components/DuckApp.png';
import MuncipalityApp from '../components/MuncipalityApp.png';
import CoinControl from '../components/Coincontrol.png';
const projects = [
  { src: CarpoolApp, github: 'https://github.com/user/project1' },
  { src: DuckApp, github: 'https://github.com/user/project2' },
  { src: MuncipalityApp, github: 'https://github.com/user/project3' },
  { src: CoinControl, github: 'https://github.com/user/project4' },
  
];

// Duplicate the list for infinite illusion
const duplicatedProjects = [...projects, ...projects];

const InfiniteGallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-scroll">
        {duplicatedProjects.map((item, index) => (
          <a
            key={index}
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-item"
          >
            <img src={item.src} alt={`Project ${index + 1}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default InfiniteGallery;
