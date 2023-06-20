import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import {useParams} from 'react-router-dom'

const UserGreenhouse = () => {
  // const getUserFavorites = async () => {
  //   try {
  //     const res = await axios.get('http://localhost:8000/api/favorites', {withCredentials: true})
  // const {id}  = useParams();
  // // const fetch = require('node-fetch');
  // const [userPlants, setUserPlants] = useState({
  //   common_name: '',
  //   scientific_name: '',
  //   watering: '',   
  //   sunlight: '',
  //   propagation: '',
  //   hardiness: '',
  // });

  const [favoritePlants, setFavoritePlants] = useState([]);

  useEffect(() => {
    const fetchFavoritePlants = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/FavoritePlants/:id', {withCredentials: true});
        const favoritePlantsData = res.data;
        const fetchPlantDetails = favoritePlantsData.map(async (plant) => {
          try {
            const plantResponse = await axios.get('https://localhost:8000/api/plants');
            return plantResponse.data;
          } catch (err) {
            console.log('failed to fetch details for plants');
            return null;
          }
        });
        const plantDetails = await Promise.all(fetchPlantDetails);
        setFavoritePlants(plantDetails.filter((plant) => plant !== null));
      } catch (err) {
        console.log(err);
      }
    };
    fetchFavoritePlants();
  }, []);


  return (
    <div id="gh_main">
      <h1>Greenhouse</h1>
      <div id="gh_table">
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">Common Name</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {favoritePlants.map((plant) => (
              <tr key={plant._id}>
                <td>{plant.common_name}</td>
                <td>{plant.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserGreenhouse


// sk-50Lf648901844f1fa1249
// GET https://perenual.com/api/species-list?page=1&key=sk-50Lf648901844f1fa1249

// https://trefle.io/api/v1/plants?token=bV548VVWns_Z7yfgjytIhm6_DOcyO-Qkym46-X1coGQ&filter[common_name]=${id}