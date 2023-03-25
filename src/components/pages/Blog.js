import React from 'react';
import Budget from '../../Assets/Budget.png';
import Password from '../../Assets/Password.png';
import Stock from '../../Assets/Stock.png';
import Weather from '../../Assets/Weather.png';
import ecommerce from '../../Assets/ecommerce.png';

const styles={
  divStyle: {
    padding: '60px',
    width: '70%',
    alignitems: 'center',
    margin: 'auto',
    background: 'lightgrey',
    color: 'black',
},
  divwrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '20px',
    width: '100%',
    innerHeight: '100%',
  },
};

export default function Portfolio() {
  return (
    <div style={styles.divStyle}>
      <h2>My work</h2>
      <hr></hr>

      <div className='wrapper' style={styles.divwrapper}>
        <div >
          
        <a href="https://github.com/cdennis27/budgettrackergroup2"><img src={Budget} alt='Budget Tracker' /></a>
        <div className="bottom-center">Budget Tracker</div>

        </div>
        <div>
          <a href="https://github.com/Ravneet0112/ravneet-password-generator" >
          <img src={Password} alt='Password Generator'/> </a>      
          <div className="bottom-center">Password Generator</div>
          </div>
        <div>
          
          <a href="https://github.com/areyno20/stock-app"><img src={Stock} alt='Stock Search' /></a>
          <div className="bottom-center">Stock Search</div>
          </div>
        <div>
          
          <a href="https://github.com/Ravneet0112/ravneet-weather-app"><img src={Weather} alt='Weather Dashboard' /></a>
          <div className="bottom-center">Weather App</div>
        </div>

        <div>
          <a href="https://github.com/Ravneet0112/e-commerce"><img src={ecommerce} alt='E-Commerce' /></a>
          <div className="bottom-center">E-Commerce</div>
        </div>
        
        
        </div>
    </div>
    
  );
}
