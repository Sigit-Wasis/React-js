import React from 'react';

function Header() {
  return (
    <div>
      <h3>Latihan Dengan Penuh Suka Cita </h3>
    </div>
  );
}

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
