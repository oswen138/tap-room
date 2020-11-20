import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {
    name: 'Thato and Haley',
    brand: '3A',
    alcoholContent: 'Firebase won\'t save record. Halp.'
    alcoholContent: 'Firebase won\'t save record. Halp.'

  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component isn\'t rendering.'
  }
];

function KegList(){

  return (
    <React.Fragment>
      <hr/>
      {masterKegList.map((keg, index) =>
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

