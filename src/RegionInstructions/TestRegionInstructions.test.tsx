import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegionInstructions from "./RegionInstructions";

const regions = {
  "Region 1": { steps: ["Step 1", "Step 2"] },
  "Region 2": { steps: ["Step 1", "Step 2"] },
};

const TestWrapper = () => {
  const selectedRegion = "Region 1";

  return (
    <RegionInstructions selectedRegion={selectedRegion} regions={regions} />
  );
};

test("renders at all", async () => {
  render(<TestWrapper />);
  const headingElement = screen.getByRole("heading", { name: "Instructions" });
  expect(headingElement).toBeInTheDocument();
});

test("shows selected region's instructions in order", async () => {
  render(<TestWrapper />);

  // Get all list items in the document
  const listItems = screen.getAllByRole("listitem");

  // Check that each instruction for Region 1 is present, in order
  const selectedRegionSteps = regions["Region 1"].steps;
  selectedRegionSteps.forEach((step, index) => {
    expect(listItems[index]).toHaveTextContent(step);
  });
});
