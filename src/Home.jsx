import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Profile from './Profile';
import Activities from './Activities';
import NewsSection from './NewsSection';
import Legality from './Legality';

const Home = () => {
  return (
    <>
      <Hero />
      <Profile />
      <Features />
      <Activities />
      <Gallery />
      <Testimonials />
      <NewsSection />
      <Legality />
    </>
  );
};

export default Home;