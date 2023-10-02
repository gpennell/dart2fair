import { useState } from 'react';
import regionsData from './assets/regions.json';
import RegionPicker from './RegionPicker/RegionPicker';
import RegionInstructions from './RegionInstructions/RegionInstructions';

function App() {

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [instructions, setInstructions] = useState([]);

  return (
    <>
    <main>
      <h1>DART to the Fair</h1>
      <RegionPicker />
      <div className="instructions-and-map">
        <RegionInstructions />
        <div className="dummy-map"></div>
      </div>
    </main>
    </>
  )
}

export default App;
