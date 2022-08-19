import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography, makeStyles } from "@material-ui/core";
import "./style.css";

import { CONTINENTS } from "../../Configs/OurPresence/index.js";
import MapCharts from "./Maps.jsx";

function Presence(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Presence.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MapContainer({ isMapTitleEnable = false, title = "" }) {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  /**
   * @description Changing map on changing tab
   * @param {*} _
   * @param {*} newValue
   */
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={`${classes.presenceMain} presenceMain`}>
      {isMapTitleEnable && <h1 className="mapTitle my-3">{title}</h1>}

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {Object.values(CONTINENTS).map(({ name = "" }, index) => {
            return (
              <Tab
                label={name}
                {...a11yProps(index)}
                key={`${name}-${index}`}
              />
            );
          })}
        </Tabs>
      </Box>

      {Object.values(CONTINENTS).map(
        ({ rotation = [], continent = [], region = "" }, index) => {
          return (
            <Presence value={value} index={index} key={index}>
              <MapCharts
                markers={continent}
                region={region}
                rotation={rotation}
              />
            </Presence>
          );
        }
      )}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  presenceMain: {
    width: "80%",
    margin: "auto",
    color: "white",
    backgroundColor: "#0d274d",
  },
}));
