import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

// remove const masterKegList = [
//   {
//     name: 'BerryBloom',
//     brand: 'PineHouse',
//     alcoholContent: '2.5%',
//     flavor: 'Blueberry Jasmine'

//   },
//   {
//     names: 'Citrus',
//     brand: 'PineHouse',
//     alcoholContent: '2.5%',
//     flavor: 'Orange, Grapefruit, Ginger'
//   },
//   {
//     names: 'PassionBerry',
//     brand: 'PineHouse',
//     alcoholContent: '2.5%',
//     flavor: 'Passionfruit, Strawberry'
//   }
// ];

function KegList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          flavor={keg.flavor}
          pintsLeft={keg.pintsLeft}
          pintsSold={keg.pintsSold}
          key={index}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onSellingPint: PropTypes.func
};

export default KegList;


jjhjhjhjhjhjh