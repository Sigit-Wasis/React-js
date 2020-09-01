import React from 'react';
import MenuUtama from './Page/MenuUtama';
import MenuProduct from './Page/MenuProduct';
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangKami';

const Header = () => {
  return (
    <div>
      <h1>Ini halaman untuk header</h1>
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      <h1>Ini halaman untuk footer</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
      <Footer />
    </div>
  );
}

export default App;
