// import Navbar from "./components/navbar";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";
// import MostViewedSlider from "./components/MostViewedSlider";
// import WhatsAppButton from "./components/WhatsAppButton";


// const App = () => {
//   return (

//   <div className="relative w-full"  >
//   <div className="w-full h-screen absolute inset-0 -z-10" >
//     <img className=" h-full w-full object-cover" src="../images/Home1.jpg" alt="" />
//   </div>
//   <WhatsAppButton />
//   <Navbar />
//   <Hero />
//   <MostViewedSlider />
//   <Footer />
//   </div>
//   );
// };

// export default App;



import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <div className="relative w-full">
      


      <Navbar />
      <WhatsAppButton />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
