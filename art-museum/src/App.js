import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";


function App() {
  return (
    <>
    <GalleryNavigation galleries={harvardArt.records}/>
    
    </>
    // console.log(galleries)
  );
}

export default App;


