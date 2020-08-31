import React from 'react';
import Header from './Header';

function Footer() {
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
