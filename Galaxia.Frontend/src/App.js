import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Main-Pages/Home";
import Map from "./pages/Main-Pages/Map";
import Missions from "./pages/Main-Pages/Missions";
import Discoveries from "./pages/Main-Pages/Discoveries";
import Archive from "./pages/Main-Pages/Archive";
import AllPlanets from "./pages/Planets/All-planets";
import AllMoons from "./pages/Famous-Moon/All-Moons";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Galaxies from "./pages/Galaxies/Galaxies";
import GalaxyCatalog from "./pages/Galaxies/GalaxyCatalog";

import Mercury from "./pages/Planets/Inner-Planet/Mercury";
import Venus from "./pages/Planets/Inner-Planet/Venus";
import Earth from "./pages/Planets/Inner-Planet/Earth";
import Mars from "./pages/Planets/Inner-Planet/Mars";

import Jupiter from "./pages/Planets/Outer-Planet/Jupiter";
import Saturn from "./pages/Planets/Outer-Planet/Saturn";
import Uranus from "./pages/Planets/Outer-Planet/Uranus";
import Neptune from "./pages/Planets/Outer-Planet/Neptune";


import Pluto from "./pages/Planets/Dwarf-Planets/Pluto";
import Makemake from "./pages/Planets/Dwarf-Planets/Makemake";
import Haumea from "./pages/Planets/Dwarf-Planets/Haumea";
import Eris from "./pages/Planets/Dwarf-Planets/Eris";
import Ceres from "./pages/Planets/Dwarf-Planets/Ceres";


import TheMoon from "./pages/Famous-Moon/The-Moon";
import Io from "./pages/Famous-Moon/Io";
import Europa from "./pages/Famous-Moon/Europa";
import Ganymede from "./pages/Famous-Moon/Ganymede";
import Callisto from "./pages/Famous-Moon/Calisto";
import Titan from "./pages/Famous-Moon/Titan";
import Enceladus from "./pages/Famous-Moon/Enceladus";
import Triton from "./pages/Famous-Moon/Triton";
import Phobos from "./pages/Famous-Moon/Phobos";
import Deimos from "./pages/Famous-Moon/Diemos";

import MilkyWay from "./pages/Galaxies/MilkyWay";
import Andromeda from "./pages/Galaxies/Andromeda";
import BlackEye from "./pages/Galaxies/BlackEye";

import Profile from "./pages/Profile/profile";
import SignIn from "./pages/Profile/sign-in";
import Register from "./pages/Profile/register";
import Compare from "./pages/Planets/Compare";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/discoveries" element={<Discoveries />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/planets" element={<AllPlanets />} />
        <Route path="/moons" element={<AllMoons />} />
        <Route path="/galaxies" element={<Galaxies />} />
        <Route path="/galaxies/catalog" element={<GalaxyCatalog />} />

        <Route path="/planets/mercury" element={<Mercury />} />
        <Route path="/planets/venus" element={<Venus />} />
        <Route path="/planets/earth" element={<Earth />} />
        <Route path="/planets/mars" element={<Mars />} />


        <Route path="/planets/jupiter" element={<Jupiter />} />
        <Route path="/planets/saturn" element={<Saturn />} />
        <Route path="/planets/uranus" element={<Uranus />} />
        <Route path="/planets/neptune" element={<Neptune />} />

        <Route path="/planets/pluto" element={<Pluto />} />
        <Route path="/planets/Makemake" element={<Makemake />} />
        <Route path="/planets/Haumea" element={<Haumea />} />
        <Route path="/planets/Eris" element={<Eris />} />
        <Route path="/planets/Ceres" element={<Ceres />} />


        <Route path="/moons/moon" element={<TheMoon />} />
        <Route path="/moons/io" element={<Io />} />
        <Route path="/moons/europa" element={<Europa />} />
        <Route path="/moons/ganymede" element={<Ganymede />} />
        <Route path="/moons/callisto" element={<Callisto />} />
        <Route path="/moons/titan" element={<Titan />} />
        <Route path="/moons/enceladus" element={<Enceladus />} />
        <Route path="/moons/triton" element={<Triton />} />
        <Route path="/moons/phobos" element={<Phobos />} />
        <Route path="/moons/deimos" element={<Deimos />} />


        <Route
          path="/galaxies/milky-way"
          element={<MilkyWay />}
        />
        <Route
          path="/galaxies/andromeda"
          element={<Andromeda />}
        />
        <Route
          path="/galaxies/black-eye"
          element={<BlackEye />}
        />

        {/* Profile & Authentication Routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;