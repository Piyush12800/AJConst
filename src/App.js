import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MainServices from "./components/MainServices";
import FutureComponent from "./components/FutureComponent";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
function App() {
  return (
    <main class="flex justify-center gap-4 flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <MainServices />
      <FutureComponent /> 
      <Gallery />
      {/* <ContactForm /> */}
      <Footer />
    </main>
  );
}

export default App;
