import React from "react";
import { v4 } from 'uuid';

function NewKegForm(){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.alcoholContent.value);
    console.log(event.target.flavor.value);
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
          type='text'
          name='alcoholContent'
          placeholder='abv' />
        <button type='submit'>Add newly designed keg</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;


