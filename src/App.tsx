import { useState } from "react";
import regionsData from "./assets/regions.json";
import RegionPicker from "./RegionPicker/RegionPicker";
import RegionInstructions from "./RegionInstructions/RegionInstructions";

function App() {
  const [selectedRegion, setSelectedRegion] = useState(
    Object.keys(regionsData)[0],
  );

  return (
    <>
      <main>
        <div id="page-container">
          <h1>Park and Ride to the Texas State Fair</h1>
          <p className="subhead">
            <strong>
              Everything you&apos;ve heard about Dallas traffic is true.
            </strong>{" "}
            Avoid stress and save money by taking public transit instead.
          </p>
          <RegionPicker
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            regions={regionsData}
          />
          <div className="instructions-and-map">
            <RegionInstructions
              selectedRegion={selectedRegion}
              regions={regionsData}
            />
            <div className="dummy-map"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
