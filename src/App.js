import './App.css';
import Hero from './components/hero/hero.jsx'
import About from './components/about/about.jsx'
import Navigation from './components/navigation/navigation.jsx';
import ProductCard from './components/product-card/product-card.jsx';
import Footer from './components/footer/footer.jsx';
import Roadmap from './components/roadmap/roadmap';
import awkbao from './assets/awkbao.png'
import crybao from './assets/crybao.png'
import angrybao from "./assets/angrybao.png";
import happybao from "./assets/happybao.png";
import indignantbao from './assets/indignantbao.png'
import bitchbao from './assets/bitchbao.png'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div className="page-section hero" id="bao">
        <Hero></Hero>
      </div>
      <div className="page-section flex" id="about">
        <About></About>
      </div>
      <div className="page-section" id="gallery">
        <div id="web-gallery" className="section-container">
          <ProductCard bao={awkbao} level="1" title="The Awk Bao" description="The type of bao who detests social events because of the fear of saying the wrong things at the wrong time. It tries its best though, that's why its cheeks are flushed." socialLevel="4" intellectLevel="2"></ProductCard>
          <ProductCard bao={crybao} level="1" title="The Sad Bao" description="The type of bao who knows that it will cry uncontrollably at the sad movies, but go to them anyway. It likes to weird flex that people actually cries along with her..." socialLevel="10" intellectLevel="5"></ProductCard>
          <ProductCard bao={angrybao} level="1" title="The Fuming Bao" description="The type of bao you often find pouting. It is angry almost all the time. Sometimes it's fake angry, sometimes it's real angry. Well better be safe than sorry." socialLevel="10" intellectLevel="8"></ProductCard>
          <ProductCard bao={happybao} level="1" title="The Happy Bao" description="The type of bao who makes people question their own existence because it's just so happy regardless of what life throws at it. 'Mobbing over it doesn't make things better'" socialLevel="10" intellectLevel="10"></ProductCard>
          <ProductCard bao={indignantbao} level="1" title="The Grumpy Bao" description="The type of bao who doesn't know Monday Blues because it has a reason to dislike every single day. Some day it is less grumpy than the other, but grumpy is a constant." socialLevel="5" intellectLevel="10"></ProductCard>
          <ProductCard bao={bitchbao} level="1" title="The Bitchy Bao" description="The type of bao you should be thankful that she does not wear shoes, because you'd be dead if you stepped on her shoes. The only reason it has friends is to bitch with them" socialLevel="2" intellectLevel="8"></ProductCard>
        </div>
      </div>
      <div className="page-section" id="roadmap">
        <Roadmap></Roadmap>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
