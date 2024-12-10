import { useRef } from "react";
import { useDispatch } from "react-redux";
import rightArrowIcon from '../../assets/img/icon-arrow.svg';
import { getLocation } from "./state/slice";
import './search.css';

const Search = () => {
    const searchRef = useRef();
    const dispatch = useDispatch();

    const handleSearch = () => {
        const ipAddress = searchRef.current.value;
        if (ipAddress.length === 0) return;
        dispatch(getLocation(ipAddress));
    };

    return (
        <>
            <div className="mainSearchContainer">
                <h2 className="searchHeading">IP Address Tracker</h2>
                <div className="searchBarContainer">
                    <input className="searchInput" ref={searchRef} type="text" placeholder="search for any IP address or domain" />
                    <button className="searchButton" onClick={handleSearch}>
                        <img src={rightArrowIcon} alt="right arrow icon" />
                    </button>
                </div>
            </div>
        </>
    );
}
 
export default Search;