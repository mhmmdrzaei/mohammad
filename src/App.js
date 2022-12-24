
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home.routes.jsx'
import Works from './routes/works.routes.jsx'
import MusicVideos from './routes/videos.routes.jsx'
import Navigation from './routes/navigation.routes.jsx'



function App() {

  return (
    <Routes>
    <Route path="/" element={ <Navigation />} >
      <Route index element={ <Home /> } />
      <Route path="/works" element={ <Works /> } />
      <Route path="/videos" element={ <MusicVideos /> } />

    </Route>
    
    </Routes> 



  );
}

export default App;
