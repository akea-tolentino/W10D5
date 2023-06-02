import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/home";

function App() {

  const gallery = harvardArt.records;
  return (
    <>
    {console.log(gallery)}
      <Switch>
        {/* <Route path='/galleries/:galleryId' component={GalleryView} key={gallery.id} galleries={harvardArt.records}/> */}
        <Route exact path='/galleries/:galleryId' render={()=> <GalleryView key={gallery.id} galleries={harvardArt.records}/>} />
        <Route exact path='/' component={Home} />
        <Route>
          <h1> Page Not Found</h1>
        </Route>

      </Switch>
      

    <GalleryNavigation key={gallery.id} galleries={harvardArt.records}/>
   </>
  );
    
}

export default App;
