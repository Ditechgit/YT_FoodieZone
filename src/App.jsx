import AppStore from "./components/AppStore/AppStore";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
