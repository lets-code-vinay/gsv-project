import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { IoLocationOutline } from "react-icons/io5";
import { ASIA_ROTATION } from "../../Configs/OurPresence";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapCharts = ({ markers = [], region = "", rotation = ASIA_ROTATION }) => {
  const [scale, setScale] = useState(1);

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: rotation,
        scale: 300,
      }}
      style={{ backgroundColor: "#0d274d" }}
    >
      <ZoomableGroup zoom={1} onMoveEnd={({ zoom }) => setScale(zoom)}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((d) => d.properties.REGION_UN === region)
              .map((geo) => {
                return (
                  <Geography
                    style={{
                      cursor: "pointer",
                      backgroundColor: "red",
                      fill: "blue",
                      default: {
                        cursor: "pointer",
                        fill: "#e9ecef",
                        stroke: "#647497",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        cursor: "pointer",
                        fill: "#5dc9e3",
                        stroke: "#647497",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        cursor: "pointer",
                        fill: "red",
                        stroke: "#647497",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                    key={geo.rsmKey}
                    geography={geo}
                    fill="yellow"
                    stroke="#D6D6DA"
                  />
                );
              })
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <IoLocationOutline
              color="red"
              fontSize={scale <= 2 ? "1rem" : 25 / scale}
            />

            <text
              textAnchor="middle"
              //   y={markerOffset}
              style={{
                fontFamily: "system-ui",
                fill: "#5D5A6D",
                fontSize: scale <= 2 ? "1rem" : 25 / scale,
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapCharts;
