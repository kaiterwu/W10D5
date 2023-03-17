import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import {NavLink} from 'react-router-dom';

function App(galleries) {
  return (
    <>
    <GalleryNavigation galleries={harvardArt.records}/>
    <NavLink
      to="/"
      className={isActive =>
      "nav-link" + (!isActive ? " unselected" : "")
  }
    >
      Home
    </NavLink>
    </>
    // console.log(galleries)
  );
}

export default App;


