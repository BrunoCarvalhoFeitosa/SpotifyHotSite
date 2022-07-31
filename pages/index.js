import Hero from '../components/Hero';
import Intro from '../components/Intro';
import BePremium from '../components/BePremium';
import Plans from '../components/Plans';
import CreateAccount from '../components/CreateAccount';
import Download from '../components/Donwload';
import SingersGallery from '../components/SingersGallery';

const Home = () => {
  return (
   <main>
      <Hero />
      <Intro />
      <BePremium />
      <Plans />
      <CreateAccount />
      <Download />
      <SingersGallery />
    </main>
  );
}

export default Home;
