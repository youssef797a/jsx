
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";



const App =() =>{
  let firstname = "ali"
 
return (
  <div className="">
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      {/* <Image /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {/* <Age /> */}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <h3>hello</h3>
  </div>
  )
}


export default App;
