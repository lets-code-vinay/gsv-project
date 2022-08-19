import React from "react";
// If want to use nivo chart just install and import following package
// -----------------------------------
// "@nivo/colors": "^0.68.0",
// "@nivo/core": "0.68.0",
// "@nivo/pie": "0.68.0",
//------------------------------------
// import { ResponsivePie } from "@nivo/pie";
import "../styles.css";

import { shape } from "prop-types";

const PieChart = ({ data = {}, fetchInsightDetails }) => {
  /**
   * @description Getting value of current slice
   *
   * @param {Object} node
   * @param {Object} event
   */
  const handleMouseEnter = (node, event) => {
    fetchInsightDetails(node);
  };

  /**
   * @description Getting value of current slice
   *
   * @param {Object} node
   * @param {Object} event
   */
  const handleMouseLeave = (_, __) => { };

  /**
   * @description Getting value of current slice on click
   *
   * @param {Object} node
   * @param {Object} event
   */
  const handleClick = (node, event) => {
    fetchInsightDetails(node);
  };
  return (
    <ResponsivePie
      data={Object.values(data)}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      OrdinalColorScaleConfig={{ Categorical: "Dark 2" }}
      innerRadius={0.4}
      padAngle={0}
      //   cornerRadius={3}
      enableArcLabels={true}
      enableArcLinkLabels={false}
      activeOuterRadiusOffset={20}
      borderWidth={0.5}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLabelsTextColor="white"
      //  -- uncomment when tooltip is being asked to used and it can be customizes --
      //   tooltip={({ datum = {} }) => {
      //     const { label = "", data: { text_color = "red" } = {} } = datum;
      //     return (
      //       <Box className="insightTooltip">
      //         <h5 style={{ color: "white" }}>Insight</h5>
      //         <div style={{ color: text_color }}>{label}</div>
      //       </Box>
      //     );
      //   }}
      tooltip={() => <div display="none"></div>}
      arcLabel={({ label = "" }) => `${label}`}
      arcLinkLabel={() => "20%"}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="white"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsRadiusOffset={0.53}
      onMouseEnter={(node, e) => handleMouseEnter(node, e)}
      onMouseLeave={(node, e) => handleMouseLeave(node, e)}
      onClick={(node, e) => handleClick(node, e)}
      motionConfig={{ mass: 1, tension: 50, friction: 5 }}
      colors={[
        // when client require some extra color combination
        // isHovered ? "#002446" : "grey",
        // isHovered ? "#46b6e6" : "grey",
        // isHovered ? "#3c454a" : "grey",
        // isHovered ? "#41d946" : "grey",
        // isHovered ? "#9d0402" : "grey",
        // isHovered ? "#cfd4db" : "grey",
        // isHovered ? "#2b5879" : "grey",
        "#002446",
        "#46b6e6",
        "#3c454a",
        "#41d946",
        "#9d0402",
        "#cfd4db",
        "#2b5879",
      ]}
      colorBy="index"
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
    />
  );
};

/**
 * Props Validation
 */
PieChart.propsType = {
  data: shape({}),
};

/**
 * Default Props
 */
PieChart.defaultProps = {
  data: {},
};

export default PieChart;
