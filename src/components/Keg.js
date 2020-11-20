import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
       <div onClick = {() => props.whenKegClicked(props.id)}></div>
      <h3>{props.name} - {props.flavor}</h3>
     
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  flavor: PropTypes.string,
  pintsLeft: PropTypes.number,
  pintsSold: PropTypes.func,
  id: PropTypes.string, 
  whenKegClicked: PropTypes.func 
};

export default Keg;