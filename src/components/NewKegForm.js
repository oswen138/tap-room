import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, flavor: event.target.flavor.value, id: v4()});
  }


  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <input
          type='number'
          name='alcoholContent'
          placeholder='abv' />
        <button type='submit'>Add newly designed keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;



// let name = null;
// let brand = null;
// let price = null;
// let alcoholContent = null;
// let flavor = null;

// function handleNewKegFormSubmission(event) {
//   event.preventDefault();
//   props.onNewKegCreation({name: name.value, brand: brand.value, price: price.value, alcoholContent: alcoholContent.value, flavor: flavor.value, id: v4()});
 
//   name.value='';
//   brand.value='';
//   price.value='';
//   alcoholContent.value='';
//   flavor.value='';
// }
