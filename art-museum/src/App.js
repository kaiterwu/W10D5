import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
  <>
  
    <div className="page-wrapper">
  <GalleryNavigation galleries={harvardArt.records}/>
    <Switch>
    <Route exact path="/galleries/:galleryId">
      <GalleryView galleries={harvardArt.records} />
    </Route>
    <Route exact path = '/'>
      <h2> Harvard Art Museum</h2>
      <p> Look, but Don't Touch.<br/> Please select a Gallery in the navigation bar</p>
    </Route>
    <Route>
        <h2>404 NOT FOUND</h2>

    </Route>
    </Switch>
      
    </div>

  </>
    // console.log(galleries)
  );
}

export default App;


