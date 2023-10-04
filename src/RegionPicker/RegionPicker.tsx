import React from "react";

interface RegionPickerProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  regions: Record<string, { steps: string[] }>;
}

/**
 * Show available regions and allow the user to select them.
 *
 * @param {Object} props - React component props
 * @param {string} props.selectedRegion - The currently selected region
 * @param {Function} props.setSelectedRegion - hook to set the selected region
 * @param {Object} props.regions - object containing regions and their instructions
 *
 * @returns {JSX.Element}
 */
const RegionPicker: React.FC<RegionPickerProps> = ({
  selectedRegion,
  setSelectedRegion,
  regions,
}) => {
  return (
    <div className="region-picker">
      {Object.keys(regions).map((region) => (
        <button
          key={region}
          onClick={() => setSelectedRegion(region)}
          className={region === selectedRegion ? "selected-region" : ""}
        >
          {region}
        </button>
      ))}
    </div>
  );
};

export default RegionPicker;
