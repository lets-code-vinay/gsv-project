import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { Button, Box, Typography } from "@material-ui/core";
import "./style.css";

import Logo from "../../../Assets/Images/blueLogo.png";
import { DEFAULT_SERVICES, INSIGHT_DATA } from "../insightData";

const PieChart = ({ fetchInsightDetails }) => {
  const [slice, setSlice] = useState(null);
  const [color, setColor] = useState(DEFAULT_SERVICES.color);
  const [insightData, setInsightData] = useState(
    Object.values(INSIGHT_DATA)[0]
  );

  /**
   * @description : Preparing data
   */
  useEffect(() => {
    const insightDataFormat = Object.values(INSIGHT_DATA).map(
      ({ label = "", value = 10 }) => {
        return [label, value];
      }
    );

    const colorSet = Object.values(INSIGHT_DATA).map(
      ({ color = "#3C454A" }) => {
        return color;
      }
    );
    setColor(colorSet);
    setInsightData([["Services", "Services by GSV"], ...insightDataFormat]);
  }, []);

  /**
   * @description :options for charts
   */
  const options = {
    pieHole: 0.3,
    fontSize: 15,
    is3D: false,
    pieSliceText: "label",
    pieSliceTextStyle: {
      color: "transparent", // slice label color can be changed from here
    },
    legend: "none",
    tooltip: {
      trigger: "none",
    },
    slices: {
      [slice ?? null]: {
        offset: "0.04",
        color: slice ? color[slice] : DEFAULT_SERVICES.color,
        textStyle: "roboto",
      },
    },
    width: "100%",
    height: "100%",
    colors: slice || slice == 0 ? ["#EDF1F2"] : color, // Slice background color can be changed from here
    chartArea: {
      left: "6%",
      top: "6%",
      height: "90%",
      width: "90%",
    },
  };

  /**
   * @description handle Click on pie chart slice Button
   */
  const handleButtonClick = (slice) => () => {
    fetchInsightDetails(slice);
  };

  /**
   * @description handle Slice text mouse hover on pie chart slice Button
   */
  const handleTextMouseEnter = (buttonNum) => () => {
    fetchInsightDetails(buttonNum);
  };

  /**
   * @description handle Slice text mouse hover on pie chart slice Button
   */
  const handleTextMouseLeave = (buttonNum) => () => {
    fetchInsightDetails(buttonNum);
  };

  /**
   * @description handle button mouse hover on pie chart slice Button
   */
  const handleButtonMouseEnter = (buttonNum) => () => {
    fetchInsightDetails(buttonNum);
  };

  /**
   * @description handle button mouse leave on pie chart slice Button
   */
  const handleButtonMouseLeave = (buttonNum) => () => {
    fetchInsightDetails(buttonNum);
  };

  /**
   * @description Handle hover use
   * @impact : slice split,
   *
   * @param {Number} slice
   */
  const handleSliceHoverIn = (slice) => {
    setSlice(slice);
    fetchInsightDetails(slice);
  };

  /**
   * @description Handle hover out use
   * @impact : slice split,
   *
   * @param {Number} slice
   */
  const handleSliceHoverOut = () => {
    setSlice(null);
    fetchInsightDetails(null);
  };

  return (
    <>
      <Box className="pie">
        <Chart
          chartType="PieChart"
          width="100%"
          height="500px"
          data={insightData}
          options={options}
          chartEvents={[
            {
              eventName: "ready",
              callback: ({ chartWrapper, google }) => {
                const chart = chartWrapper.getChart();

                google.visualization.events.addListener(
                  chart,
                  "onmouseover",
                  (e) => {
                    const { row } = e;
                    handleSliceHoverIn(row);
                  }
                );
                google.visualization.events.addListener(
                  chart,
                  "onmouseout",
                  (e) => {
                    const { row } = e;
                    handleSliceHoverOut(row);
                  }
                );

                google.visualization.events.addListener(chart, "click", (e) => {
                  console.log("clicked on slice");
                });
              },
            },
          ]}
        />
        <img src={Logo} alt={"logo inside"} className={`logoInside`} />

        {Object.values(INSIGHT_DATA).map(
          ({ button_text = "", label = "", text_color = "#000" }, index) => {
            return (
              <Box key={index + "-" + label}>
                <Typography
                  className={`insight-text insight-text-${index}`}
                  style={{
                    color: slice == index ? text_color : "black",
                    transform: slice == index ? "scale(1.2)" : "scale(1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={handleTextMouseEnter(index)}
                  onMouseLeave={handleTextMouseLeave(index)}
                >
                  {label}
                </Typography>
                {slice == index && (
                  <Button
                    className={`button button-${index}`}
                    onClick={handleButtonClick(index)}
                    onMouseEnter={handleButtonMouseEnter(index)}
                    onMouseLeave={handleButtonMouseLeave(index)}
                  >
                    {button_text}
                  </Button>
                )}
              </Box>
            );
          }
        )}
      </Box>
    </>
  );
};

export default PieChart;
