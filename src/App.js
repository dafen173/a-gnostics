import './App.css';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Navbar from "./components/Navbar";
import Services from './components/Services';
import ProductDiagnostics from './components/ProductDiagnostics';

import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import banner from "./assets/banner.jpg";
import ai_background from "./assets/ai_background.png";
import bg_kpi from "./assets/bg_kpi.jpg";
import phone_di_agnostics from "./assets/phone_di_agnostics.png";

function App() {

  const navbarLinks = [
    { url: "#1", title: "SERVICES", imageSrc: ai_background, contentTitle: "SERVICES", subtitle: "SERVICES dream vacation is only a few clicks away."},
    { url: "#2", title: "PRODUCT: DI-AGNOSTICS", imageSrc: phone_di_agnostics, contentTitle: "PRODUCT: DI-AGNOSTICS", subtitle: "PRODUCT: DI-AGNOSTICS conkljhjlj fdljlfjld"},
    { url: "#3", title: "PRODUCT: CBF", imageSrc: travel_02, contentTitle: "PRODUCT: CBF", subtitle: "PRODUCT: CBF conkljhjlj fdljlfjld"},
    { url: "#4", title: "ABOUT US", imageSrc: bg_kpi, contentTitle: "ABOUT US", subtitle: "Smartificial Element is a custom software development company that has been providing reliable services for implementation of SaaS systems, sophisticated business solutions, engineering applications, and business processes automation software. With clients from the U.S. and the E.U., offices in London, Houston, and development centers in Eastern Europe, Smartificial Elements assists customers in delivering innovative software solutions on a global scale."},
    { url: "#5", title: "CONTACTS", imageSrc: travel_01, contentTitle: "CONTACTS", subtitle: "CONTACTS conkljhjlj fdljlfjld"},
  ];


  return (
        <div className="App">
          <Navbar navbarLinks={navbarLinks} />
          <Hero imageSrc={banner} />

          <Services
                id={navbarLinks[0].url.substring(1)}
                imageSrc={navbarLinks[0].imageSrc}
                title={navbarLinks[0].contentTitle}
                subtitle={navbarLinks[0].subtitle}
          />

          <ProductDiagnostics
                id={navbarLinks[1].url.substring(1)}
                imageSrc={navbarLinks[1].imageSrc}
                title={navbarLinks[1].contentTitle}
                subtitle={navbarLinks[1].subtitle}
          />

          {navbarLinks.map((item, index) => {
            return (
              <Slider
                id={item.url.substring(1)}
                imageSrc={item.imageSrc}
                title={item.contentTitle}
                subtitle={item.subtitle}
              />
            );
          })}
        </div>
  );
}

export default App;
