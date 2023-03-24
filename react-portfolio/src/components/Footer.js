import React from 'react';


// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  footerStyle: {
    background: '#d1792c',
    fontSize: '15px',
    color: 'white',
    height: '30px',
    padding: '5px auto',
  },
  spanStyles: {
    height: '10px',
    color: 'lightgrey'
  },
};

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h6 style={styles.footerStyle} className="text-center"> Ravneet Sammewali <span style={styles.spanStyles}>@2023</span>
      <a href="https://github.com/Ravneet0112"> <i ></i></a>
      <a href="https://www.linkedin.com/in/ravneet-sammewali/"> <i></i></a>
      
        </h6>
        </footer>
  );
}

export default Footer;
