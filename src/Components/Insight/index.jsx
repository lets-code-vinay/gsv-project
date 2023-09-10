import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import "./styles.css";
import PieChart from "./GooglePieChart";
import { DEFAULT_SERVICES, INSIGHT_DATA } from "./insightData";
import CustomizedDialogs from "../CustomizedDialogs";
import Hexagon from "../Hexagonal";

const Insight = () => {
  const classes = useStyles();
  const [insightDetail, setInsightDetail] = useState();
  const [openKnowMore, setOpenKnowMore] = useState(false);
  const [dialogMSG, setDialogMSG] = useState(DEFAULT_SERVICES.info);
  const [dialogTitle, setDialogTitle] = useState(DEFAULT_SERVICES.title);

  /**
   * @description update values in right grid from selection
   *
   * @param {Object} insight
   */
  const getInsightDetail = (insight) => {
    setInsightDetail(Object.values(INSIGHT_DATA)[insight]);
  };

  /**
   * @description Open dialog to read more
   */
  const handleKnowMore = (info, title) => (_) => {
    setOpenKnowMore(true);
    setDialogMSG(info);
    setDialogTitle(title);
  };

  /**
   * @description Close dialog
   */
  const handleClose = () => {
    setOpenKnowMore(!openKnowMore);
  };

  const {
    color = DEFAULT_SERVICES.color,
    info = DEFAULT_SERVICES.info,
    title = DEFAULT_SERVICES.title,
  } = insightDetail || DEFAULT_SERVICES;

  return (
    <>
      <main className="container-services">
        <Paper elevation={24} className={`${classes.piePaper} piePaper`}>
          <Grid container className={`${classes.pieGrid} pieGrid`}>
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              lg={6}
              className={`${classes.pieBox} pieBox`}
            >
              {/* <PieChart
                data={INSIGHT_DATA}
                fetchInsightDetails={getInsightDetail}
                onKnowMoreClick={handleKnowMore(info, title)}
              /> */}
              <Hexagon />
            </Grid>

            <Grid item xs={12} sm={12} md={5} lg={6}>
              <Box className={`${classes.pieDetail} pieDetail`}>
                <Typography
                  variant={"h4"}
                  className={`${classes.pieTitle} pieTitle`}
                  style={{ color: color }}
                >
                  {title}
                </Typography>
                <Typography
                  variant={"body1"}
                  className={`${classes.pieInfo} pieInfo`}
                >
                  {info}
                </Typography>

                <Button
                  variant="contained"
                  className={`${classes.pieButton} pieButton`}
                  style={{
                    backgroundColor: color,
                  }}
                  onClick={handleKnowMore(info, title)}
                >
                  Know More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </main>

      <CustomizedDialogs
        title={dialogTitle}
        open={openKnowMore}
        onClose={handleClose}
        msg={dialogMSG}
      />
    </>
  );
};

export default Insight;

const useStyles = makeStyles((theme) => ({
  piePaper: {
    borderRadius: "50px",
  },
  pieGrid: {},

  pieBox: {
    width: "100%",
  },
  pieDetail: {
    width: "80%",
    margin: "9% auto",
  },
  pieInfo: {
    marginTop: "5%",
    color: "#0d274d",
  },
  pieButton: {
    color: "white",
    marginTop: "5%",
  },
}));
