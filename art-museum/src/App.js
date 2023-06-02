import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";



function App() {

  const gallery = harvardArt.records;
  return (
    <GalleryNavigation key={gallery.id} galleries={harvardArt.records}/>
  );
}

export default App;
