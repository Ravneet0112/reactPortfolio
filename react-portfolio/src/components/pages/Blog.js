import React from 'react';
import Budget from '../../Assets/Budget.png';
import Password from '../../Assets/Password.png';
import Stock from '../../Assets/Stock.png';
import Weather from '../../Assets/Weather.png';

const styles={
  divStyle: {
    padding: '60px',
    width: '80%',
    alignitems: 'center',
    margin: 'auto',
    background: 'lightgrey',
    color: 'black',
},
  divwrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '20px',
    gridTemplateRows: 'Auto',
    width: '100%',
    innerHeight: '100%',
  },
};

export default function Portfolio() {
  return (
    <div style={styles.divStyle}>
      <h2>My work</h2>
      <hr></hr>

      <div className='wrapper'>
        <div >
          <img src={Budget} alt='Budget Tracker' />
        <a href="https://github.com/cdennis27/budgettrackergroup2">Budget Tracker</a>

        </div>
        <div>
          <img src={Password} alt='Password Generator' />
          <a href="https://github.com/Ravneet0112/ravneet-password-generator">Password Generator</a>
          </div>
        <div>
          <img src={Stock} alt='Stock Search' />
          <a href="https://github.com/areyno20/stock-app"> Stock Search</a>
          </div>
        <div>
          <img src={Weather} alt='Weather Dashboard' />
          <a href="https://github.com/Ravneet0112/ravneet-weather-app">Weather App</a>
        </div>
        
        
        </div>
    </div>
    
  );
}
