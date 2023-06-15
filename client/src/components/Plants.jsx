import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Plants = () => {
    const [plantList, setPlantList] = useState([])
    // common_name: '',
    // scientific_name: '',
    // watering: '',   
    // sunlight: '',
    // propagation: '',
    // hardiness: '',

    useEffect(() => {
        axios.get('https://perenual.com/api/species-list?page=1&key=sk-50Lf648901844f1fa1249')
        .then(res => {
            console.log(res);
            console.log(res.data.data);
        setPlantList(res.data.data)
        
        })
        .catch(err => console.log(err));
    }, []);


    return (
        <div id="plants_list">
            <h1>Plants List</h1>
            <div id="plants_table">
                
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Common Name</th>
                            <th scope="col">Scientific Name</th>
                            <th scope="col">Add to Faves</th>
                        </tr>
                    </thead>
                    <tbody>
                            {plantList.map((plant, i) => {
                                return (
                        <tr key={i}>
                            <td>{plant.common_name}</td>
                            <td>{plant.scientific_name}</td>
                            <td><button>Add to Faves</button></td>
                        </tr>
                                )
                                })}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

export default Plants



            // common_name: res.data.common_name,
            // scientific_name: res.data.scientific_name,
            // watering: res.data.watering,   
            // sunlight: res.data.sunlight,
            // propagation: res.data.propagation,
            // hardiness:  res.data.hardiness,