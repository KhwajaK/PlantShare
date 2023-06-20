import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import PlantForm from './PlantForm'

const Plants = ({user}) => {
    const [plantList, setPlantList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/allplants')
            .then(res => {
                console.log(res.data);
                setPlantList(res.data)
            })
            .catch(err => console.log("Error getting all Plants:" + err))
    }, [])
    

    const handleDelete = (id) => {
        axios.delete('http://localhost:8000/api/deletePlant/' + id)
            .then(res => {
                console.log(res.data)
                setPlantList(plantList.filter(plant => plant._id !== id))
            })
            .catch(err => console.log(err))
    }

    return (
        <div id="plants_list">
            <h1>Plants List</h1>
            <div id="plants_table">
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Common Name</th>
                            <th scope="col">Details</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                { Array.isArray(plantList) && plantList.map ((plant, i) => (
                        <tr key={i}>
                            <td>{plant.common_name}</td>
                            <td>{plant.details}</td>                            
                            <td>
                                <button>Add to Faves</button>  
                                <button onClick={()=> navigate(`/editplant/${plant._id}`)}>Edit</button>  
                                <button onClick={()=> handleDelete(plant._id)}>Delete</button>  
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <h1>Add to List</h1>
                <PlantForm plantList={plantList} setPlantList={setPlantList} />
        </div>
    )
                }

export default Plants