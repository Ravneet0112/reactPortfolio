import React from 'react';

const styles={
  divStyle: {
    padding: '60px',
    width: '60%',
    alignitems: 'center',
    margin: 'auto',
    background: 'lightgrey',
    color: 'black',
},
};
function About() {
  return (
    <div style={styles.divStyle}>
      <h2>About Me</h2>
      <hr></hr>
      <p>
        I am a Full Stack Web Developer with a background in Technical support and a passion for coding. I am a graduate of the University of Toronto Coding Bootcamp. I am proficient in HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Express.js, MySQL, MongoDB, React.js, and more. I am a team player with excellent communication skills and a strong work ethic. I am looking for a position where I can utilize my skills and experience to help a company grow and succeed.
      </p>
    </div>
  );
}

export default About;
