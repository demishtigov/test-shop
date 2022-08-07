import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  thumb: {
    color: "#A52421",
    borderRadius: '1px 1px 10px 10px'
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: "#DB7876",
  },
});

const SliderProton = ({ value, changePrice }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Slider
          value={value}
          onChange={changePrice}
          valueLabelDisplay="off"
          min={10}
          max={10000}
          classes={{
            thumb: classes.thumb,
            rail: classes.rail,
            track: classes.track,
          }}
        />
      </div>
      <div className='values'>
        <p>{value[0]}</p>
        <p>{value[1]}</p>
      </div>
    </>
  );
};

export default SliderProton;
