
import 'animate.css';
import '../App.css';
import Aboutme from '../components/about';
import { Welcome } from '../components/about';
import Waves from '../components/Waves';
import { Stuff } from '../components/about';
function LandingPage() {
  return (
  <div>
      <Waves/>
    <Welcome />
      <Aboutme />
      <Stuff />
</div>
  );
}

export default LandingPage;
