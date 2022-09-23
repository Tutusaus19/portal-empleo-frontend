import * as React from 'react';
import '../searchBar/style.css'

export default function SearchBar() {
  return (
        <div>
            <input className= 'searchBar'type="text" placeholder='¿Qué estas buscando?' />
        </div>
  );
}
