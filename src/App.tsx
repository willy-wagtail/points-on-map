import React from "react";

import "./App.css";
import PointsOnMap from "./components/PointsOnMap";
import { useWorldAtlas } from "./hooks/useWorldAtlas";
import { useWorldCities } from "./hooks/useWorldCities";

const width = 960;
const height = 500;

export default function App() {
  const worldAtlas = useWorldAtlas();
  const cities = useWorldCities();

  if (!worldAtlas || !cities) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      <PointsOnMap worldAtlas={worldAtlas} cities={cities} />
    </svg>
  );
}
