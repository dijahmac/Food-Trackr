/*
 *
 * Newlog
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Newlog extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Newlog" meta={[ { name: 'description', content: 'Description of Newlog' }]}/>

        <div className="background-holder">
          <div className="input-food">
          <h1>Create a food log.</h1>
          <div className="date-input"><span>Date</span><input type="text" value="Date" className="date"/></div>

          <div className="box-input"><span>Food </span><input type="text" value="food" className="food" label="Food"/></div>

          <div className="input-boxes">

            <div className="box-input"><span>Calories </span><input type="text" value="calories" className="calories"/></div>
            <div className="box-input"><span>Fat </span><input type="text" value="fat" className="fat"/></div>
            <div className="box-input"><span>Carbs </span><input type="text" value="Carbs" className="carbs" /></div>
            <div className="box-input"><span>Sugars </span><input type="text" value="Sugars" className="sugars"/></div>
          </div>

        <div className="allergens">
            <h4> Contains:</h4>
            <span>Milk</span><input type="checkbox" value="milk" className="check-milk"/>
            <span>Egg</span><input type="checkbox" value="Egg" className="egg" />
            <span>Nuts</span><input type="checkbox" value="Nuts" className="nuts" />
            <span>Wheat</span><input type="checkbox" value="Wheat" className="wheat"/>
            <span>Soy</span><input type="checkbox" value="Soy" className="soy" />
            <span>Shellfish</span><input type="checkbox" value="Shellfish" className="shellfish" />
            <span>Fish</span><input type="checkbox" value="Fish" className="fish"/>
        </div>
            <input type="submit" value="Add" className="add-new" />
            <input type="submit" value="Cancel" className="cancel-new" />
            </div>

        </div>
      </div>
    );
  }
}

Newlog.contextTypes = {
  router: React.PropTypes.object
};
