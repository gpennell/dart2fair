import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import RegionPicker from "./RegionPicker";

const regions = {
  "Region 1": { steps: ["Step 1", "Step 2"] },
  "Region 2": { steps: ["Step 1", "Step 2"] },
};

const TestWrapper = () => {
  const [selectedRegion, setSelectedRegion] = React.useState("Region 1");

  return (
    <RegionPicker
      selectedRegion={selectedRegion}
      setSelectedRegion={setSelectedRegion}
      regions={regions}
    />
  );
};

const TestWrapperNoRegion = () => {
  const [selectedRegion, setSelectedRegion] = React.useState("");

  return (
    <RegionPicker
      selectedRegion={selectedRegion}
      setSelectedRegion={setSelectedRegion}
      regions={regions}
    />
  );
};

test("component renders", async () => {
  render(<TestWrapper />);

  expect(screen.getByRole("button", { name: "Region 1" })).toBeInTheDocument();
});

test("renders a button for each region", async () => {
  const setSelectedRegion = jest.fn();

  render(
    <RegionPicker
      selectedRegion="Region 1"
      setSelectedRegion={setSelectedRegion}
      regions={regions}
    />,
  );

  Object.keys(regions).forEach((region) => {
    expect(screen.getByRole("button", { name: region })).toBeInTheDocument();
  });
});

test("calls setSelectedRegion when a region button is clicked", async () => {
  render(<TestWrapper />);

  await userEvent.click(screen.getByRole("button", { name: "Region 2" }));
});

test("aria-selected attribute changes on click", async () => {
  render(<TestWrapper />);

  await userEvent.click(screen.getByRole("button", { name: "Region 2" }));

  expect(screen.getByRole("button", { name: "Region 2" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
});

test("renders buttons even if no region selected", async () => {
  render(<TestWrapperNoRegion />);

  Object.keys(regions).forEach((region) => {
    expect(screen.getByRole("button", { name: region })).toBeInTheDocument();
  });
});

test("aria-selected is false for everything if no region is selected", async () => {
  render(<TestWrapperNoRegion />);
  Object.keys(regions).forEach((region) => {
    expect(screen.getByRole("button", { name: region })).toHaveAttribute(
      "aria-selected",
      "false",
    );
  });
});
