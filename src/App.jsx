import { useState } from 'react';
import regionsData from './assets/regions.json';
import RegionPicker from './RegionPicker/RegionPicker';
import RegionInstructions from './RegionInstructions/RegionInstructions';

function App() {

  const [selectedRegion, setSelectedRegion] = useState(Object.keys(regionsData)[0]);

  return (
    <>
    <main>
      <h1>DART to the Fair from {selectedRegion}</h1>
      <RegionPicker selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} regions={regionsData}/>
      <div className="instructions-and-map">
        <RegionInstructions />
        <div className="dummy-map"></div>
      </div>
    </main>
    </>
  )
}

export default App;
