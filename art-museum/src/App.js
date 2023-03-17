import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import {Route} from 'react-router-dom'

function App() {
  return (
  <>
  <GalleryNavigation galleries={harvardArt.records}/>
    <div className="page-wrapper">
    <Route exact path="/galleries/:galleryId">
      <GalleryView/>
    </Route>
    </div>

  </>
    // console.log(galleries)
  );
}

export default App;


