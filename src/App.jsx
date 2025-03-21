import AppStore from "./components/AppStore/AppStore";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services/Services";

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
    </>
  );
}

export default App;
