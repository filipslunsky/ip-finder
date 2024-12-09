import Map from './features/location/Map';
import 'leaflet/dist/leaflet.css';
import Search from './features/location/Search';
import Results from './features/location/Results';

function App() {
  return (
    <>
      <Search />
      <Results />
      <Map />
    </>
  )
}

export default App;
