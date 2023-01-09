import React, { FC } from "react";

import "./App.css";
import PointsOnMap from "./components/PointsOnMap";
import { useWorldAtlas } from "./hooks/useWorldAtlas";
import { useWorldCities } from "./hooks/useWorldCities";

const width = 960;
const height = 500;

const App: FC = () => {
  const worldAtlas = useWorldAtlas();
  const cities = useWorldCities();

  if (!worldAtlas || !cities) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      <PointsOnMap worldAtlas={worldAtlas} cities={cities} />
    </svg>
  );
};

export default App;
