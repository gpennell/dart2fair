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
          <h1>Park and Ride, Y&apos;all!</h1>
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
