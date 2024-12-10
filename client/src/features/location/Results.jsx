import { useSelector } from "react-redux";

const Results = () => {
    const data = useSelector(state => state.location.apiResponse);
    const status = useSelector((state) => state.location.status);

  if (status === 'idle' || status === 'loading') {
    return;
  }
  if (!data.lat || !data.lon) {
    return <p>Location data unavailable</p>;
  }   

    return (
        <>
            <div className="mainResultsContainer">
                <div className="resultItemContainer">
                    <h3 className="resultItemName">IP ADDRESS</h3>
                    <p className="resultItemValue">{data.query}</p>
                </div>
                <div className="resultItemContainer">
                    <h3 className="resultItemName">LOCATION</h3>
                    <p className="resultItemValue">{data.city}, {data.regionName} ({data.region}), {data.country}</p>
                </div>
                <div className="resultItemContainer">
                    <h3 className="resultItemName">TIMEZONE</h3>
                    <p className="resultItemValue">{data.timezone}</p>
                </div>
                <div className="resultItemContainer">
                    <h3 className="resultItemName">ISP</h3>
                    <p className="resultItemValue">{data.isp}</p>
                </div>
            </div>
        </>
    );
}
 
export default Results;