import React from 'react'
import { houses } from '../../../data/houses';
import {replace, useNavigate } from 'react-router-dom';
import "./homesListPageStyles.css"
import { useDispatch } from 'react-redux';
import { logout } from '../../../state/auth/authSlice';

export const HomesListPage = () => {

  const navigate = useNavigate();  
  const dispatch = useDispatch();

  const handleRowClick = (index) => {
    navigate(`/homes/${index + 1}`);
  };

   const handleLogout = () => {
    dispatch(logout());  
    replace('/');  
  };

  return (
    <div className="homes-list-page">
      <h2>Casas en alquiler</h2>
      <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
      <table className="homes-table">
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
          {houses.map((house, index) => (
            <tr key={index} onClick={() => handleRowClick(index)}>
              <td>{house.name}</td>
              <td>{house.address}</td>
              <td>{house.description}</td>
              <td>{house.price} Sus</td>
              <td>
                <img src={house.image} alt={house.name} width={100} className="house-img" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HomesListPage;