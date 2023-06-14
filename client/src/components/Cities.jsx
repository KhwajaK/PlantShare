// import React, {useEffect, useState} from 'react'
// import axios from 'axios'
// import {useParams} from 'react-router-dom'

// const Cities = () => {

//   // const [viewCity, setViewCity] = useState([])
//   const {id} = useParams();

//   useEffect(() => {
//     axios.get(`/api/cities/${id}`)
//   }, []);

//   const handleChange = (e) => { 

//   }

//   return (
//     <div class="Cities">
//       <label for="city">Select a City to View</label>
//       <select name="viewable_cities" id="viewable_cities" onChange={handleChange}>
//         <option value="all">All Cities</option>
//       </select>
//     </div>
//   )
// }

// export default Cities


/* <div className="dropdown">
  <button className="btn btn-outline-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select a City
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li>Action</li>
    <li>Another action</li>
    <li>Something else here</li>
  </ul>
</div> */