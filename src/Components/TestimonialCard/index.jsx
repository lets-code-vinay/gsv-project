import React from "react";

import { Box, makeStyles, Typography } from "@material-ui/core";
import "./styles.css";

const TestimonialCard = ({
  clientCount,
  about,
  author,
  designation,
  company,
  image,
  value,
}) => {
  const classes = useStyles();

  return (
    <Box
      className={`${classes.clientCardTC} clientCardTC`}
      style={{
        maxWidth: "90%",
      }}
    >
      <Typography
        variant="h5"
        className={`${classes.testimonialCardMatterTC} testimonialCardMatterTC`}
      >
        "{about}"
      </Typography>
      <Typography
        variant="body1"
        className={`${classes.testimonialCardUserTC} testimonialCardUserTC`}
      >
        <strong>{author},</strong> {designation}-{company}
      </Typography>
      <img
        className={`${classes.testimonialImageTC} testimonialImageTC`}
        src={image}
        alt={value}
      />
    </Box>
  );
};

export default TestimonialCard;

const useStyles = makeStyles((theme) => ({
  testimonials: {
    display: "flex",
    flexDirection: "column",
    background: "red",
  },
  testimonialLogo: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "800",
    color: "#0d274d",
  },

  testimonialTitle: {
    width: "fit-content",
    margin: "0.5rem auto",
  },
  hr: {
    margin: "1% auto 3%",
  },
  testimonialClientCard: {
    outline: "none",
    width: "429px",
    padding: "0 3rem",
    margin: "2rem",
  },

  clientCardTC: {
    minWidth: "30%",
    margin: "auto",
    borderRadius: "1rem ",
    boxShadow: "0 0 2rem 1.5rem rgb(10 10 10 / 12%)",
    padding: "1rem 2rem",
  },

  clientGridTC: {
    margin: "3rem auto",
  },

  clientTitle: {
    cursor: "pointer",
  },
  arrowRightClient: {
    left: "0",
    top: "10%",
  },
  testimonialCardMatter: {
    fontSize: "1rem",
    fontWeight: "700",
    margin: "16% 0% 13% 0",
  },
  testimonialCardMatterLessThan3: {
    fontSize: "1rem",
    fontWeight: "700",
    margin: "16% 0% 13% 0",
  },
  testimonialCardUser: {
    fontSize: "0.8rem",
    textAlign: "center",
  },
  testimonialCardUserLessThan3: {
    fontSize: "0.8rem",
    textAlign: "center",
  },
  testimonialImageTC: {
    width: "100px",
    margin: "10% 26%",
  },

  lessThan3LogoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5% 0",
  },

  testimonialImageLessThan3: {
    width: "100px",
  },

  testimonialDomainClientsSectionLessThan3: {
    display: "flex",
  },
  clientCardLessThan3: {
    width: "40vw",
    margin: "auto",
    borderRadius: "1rem ",
    boxShadow: "0 0 2rem 1.5rem rgb(10 10 10 / 12%)",
    padding: "1rem 2rem",
  },
  clientGridLessThan3: {
    margin: "3rem auto",
  },
}));
