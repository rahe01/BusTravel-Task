import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import HeroBottom from "./Components/Hero/HeroBottom";
import Ticket from "./Components/Hero/Ticket";
import Work from "./Components/How-Its-Work/Work";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Services/Card";
import Services from "./Components/Services/Services";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="block md:hidden">
        <Ticket></Ticket>
        <HeroBottom></HeroBottom>
      </div>


      <Work></Work>

      <Services></Services>
      <Banner></Banner>
      <Contact></Contact>
      <Footer></Footer>


    </div>
  );
};

export default App;