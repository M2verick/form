import React from 'react'
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import './App.css'
function App() {
  const [value, setValue] = React.useState('');
  return (
    <div className = 'App'>
      <h3>Форма поиска адресов с помощью сервиса "dadata.ru" на React</h3>
      <AddressSuggestions token="f03137645abbe378ec3c91ad4b53507dc5644124" value={value} onChange={setValue}/>
    </div>
  );

}

export default App;
