import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const UserGreenhouse = () => {

  const {id}  = useParams();
  // const fetch = require('node-fetch');
  const [userPlants, setUserPlants] = useState({
    common_name: '',
    scientific_name: '',
    watering: '',   
    sunlight: '',
    propagation: '',
    hardiness: '',
  });

  useEffect(() => {
    axios.get(`https://perenual.com/api/species/details/${id}?key=sk-50Lf648901844f1fa1249`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        setUserPlants({
          common_name: res.data.common_name,
          scientific_name: res.data.scientific_name,
          watering: res.data.watering,
          sunlight: res.data.sunlight,
          propagation: res.data.propagation,
          hardiness: res.data.hardiness,
        }) })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div>UserGreenhouse

      <div id="gh_table">
        {/* <table>
          <thead>
            <tr>
              <th>Plant</th>
              <th>Scientific Name</th>
              <th>Watering</th>
              <th>Sunlight</th>
              <th>Propagation</th>
              <th>Zones</th>
            </tr> */}
          {/* </thead>
          {userPlants.map((plant, idx) => (
          <tbody key={plant.idx}>
            <tr>{plant.common_name}</tr>
            <tr>{plant.scientific_name}</tr>
            <tr>{plant.watering}</tr>
            <tr>{plant.sunlight}</tr>
            <tr>{plant.propagation}</tr>
            <tr>{plant.hardiness}</tr>
            ))
          }
          </tbody>
        </table> */}
      </div>

    </div>
  )
}

export default UserGreenhouse


// sk-50Lf648901844f1fa1249
// GET https://perenual.com/api/species-list?page=1&key=sk-50Lf648901844f1fa1249

// https://trefle.io/api/v1/plants?token=bV548VVWns_Z7yfgjytIhm6_DOcyO-Qkym46-X1coGQ&filter[common_name]=${id}