import React from 'react';
import Header from './Header';

const Footer = () => {
  return (
    <div>
      <h4>Copyright Embuncode</h4>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <h1>Rendering Element</h1>  
      <Footer />
    </div>
  );
}

export default App;
