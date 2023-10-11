import React from "react";
import "./RegionInstructions.module.css";
interface RegionInstructionsProps {
  selectedRegion: string;
  regions: Record<string, { steps: string[] }>;
}

/**
 * Show instructions for the selected region
 * @param {Object} props - React component props
 * @param {string} props.selectedRegion - The currently selected region
 * @param {object} props.regions - object containing regions and their instructions
 */
const RegionInstructions: React.FC<RegionInstructionsProps> = ({
  selectedRegion,
  regions,
}) => {
  const region = regions[selectedRegion];
  return (
    <section>
      <h2>Instructions</h2>
      <ol>
        {region &&
          region.steps.map((step, index) => <li key={index}>{step}</li>)}
      </ol>
    </section>
  );
};

export default RegionInstructions;
