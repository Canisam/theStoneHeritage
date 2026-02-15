
// import Home from "./component/Home"
// import Volunteer from "./component/Volunteer"
// import Availability from "./component/HeroSectionVolunteer"
// import Stay from "./component/Stay";
// import Rooms from "./component/Rooms"
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import FeaturesCard from "./component/FeaturesCard";

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/Stay" element={<Stay/>}/>
//       <Route path="/Rooms" element={<Rooms/>}/>
//       <Route path="/volunteer" element={<Volunteer />}/>
//       <Route path="/Availability" element={<Availability />}/>
//       <Route path="/Features" element={<FeaturesCard logo={"home.jpg"} text={"Lorem, ipsum dolor."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, animi magnam laboriosam soluta et quam? Facere provident velit possimus. Quas?"} />}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// }


// export default App;

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";  
import Home from "./component/Home"
import Stay from "./component/Stay";
import Rooms from "./component/Rooms"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FeaturesCard from "./component/FeaturesCard";
import Availability from "./component/Availability"
import Volunteer from "./component/Volunteer"
import Experience from "./component/Experience";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <>
    <BrowserRouter>
   <ScrollToTop />
    <Routes>

      <Route path="/" element={<HomePage/>}/>
      {/* <Route path="/" element={<MainTestimonial/>}/> */}
      <Route path="/Stay" element={<Stay/>}/>
      <Route path="/Rooms/:id" element={<Rooms/>}/>
      <Route path="/Availability" element={<Availability />}/>
      <Route path="/Volunteer" element={<Volunteer />}/>
      <Route path="/Experiences" element={<Experience />}/>
      <Route path="/Features" element={<FeaturesCard logo={"home.jpg"} text={"Lorem, ipsum dolor."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, animi magnam laboriosam soluta et quam? Facere provident velit possimus. Quas?"} />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
