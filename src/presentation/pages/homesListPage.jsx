import React from 'react'
import { houses } from '../../data/houses';

export const HomesListPage = () => {
  return (
    <div className='homes-list-pages'>
      <h2>Casas en alquiler</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house,index)=> (
            <tr key={index}>
              <td>{house.name}</td>
              <td>{house.address}</td>
              <td>{house.description}</td>
              <td>{house.price} Sus</td>
              <td><img src={house.image} alt={house.name} width={100}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HomesListPage;