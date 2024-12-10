import Search from "./Search";
import Results from "./Results";
import Map from "./Map";
import 'leaflet/dist/leaflet.css';

const Location = () => {
    return (
        <>
            <div className="mainLocationContainer">
                <Search />
                <Results />
                <Map />
            </div>
        </>
    );
}
 
export default Location;