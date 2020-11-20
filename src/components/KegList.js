import React from 'react';
import Keg from './Keg';

const masterKegList = [
  {
    name: 'BerryBloom',
    brand: 'PineHouse',
    alcoholContent: '2.5%',
    flavor: 'Blueberry Jasmine'

  },
  {
    names: 'Citrus',
    brand: 'PineHouse',
    alcoholContent: '2.5%',
    flavor: 'Orange, Grapefruit, Ginger'
  },
  {
    names: 'PassionBerry',
    brand: 'PineHouse',
    alcoholContent: '2.5%',
    flavor: 'Passionfruit, Strawberry'
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
}
