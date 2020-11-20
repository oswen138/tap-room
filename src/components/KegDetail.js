import React from "react";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name} - {ticket.flavor}</h3>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;