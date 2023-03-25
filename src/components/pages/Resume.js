import React from 'react';

const styles={
  divStyle: {
    padding: '60px',
    width: '70%',
    alignitems: 'center',
    margin: 'auto',
    background: 'lightgrey',
    color: 'black',
},
};
export default function Resume() {
  return (
    <div style={styles.divStyle}>
      <h2>My Resume</h2>
      <hr></hr>
      <div> Please check my Resume HERE
      </div>
      <div> 
       < h4>Front End Proficiencies</h4>
        <ul>
          <li>HTML</li> 
          <li>CSS</li>  
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        <h4>Back End Proficiencies</h4>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>

      <p>
        
      </p>
    </div>
  );
}
