import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const PlantForm = ({plantList, setPlantList}) => {
    const {id} = useParams()
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const [success, setSuccess] = useState(false)
    const [plant, setPlant] = useState({        
        common_name: '',
        details: '',
    })

    useEffect(() => { 
        if (id) {
            axios.get('http://localhost:8000/api/plant/' + id)
            .then(res => {
                console.log(res.data);
                setPlant(res.data)
            })
            .catch(err => console.log("Error getting one plant:" + err))
        }
    }, [])

    const handleChange = (e) =>{
        setPlant({...plant, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitting")
        axios.post('http://localhost:8000/api/addPlant', plant, {withCredentials: true})
            .then(res => {
                setErrors([])
                setSuccess(true)
                console.log("Success" + res.data)
                setPlantList([...plantList, res.data])
            })
            .catch(err => {
                setSuccess(false)
                setErrors(err.response.data.errors)
                console.log("error in create:" + err.response.data.errors)
            })
        }

    const handleUpdate = (e) => {
        e.preventDefault()
        console.log("trying to update")
        axios.put('http://localhost:8000/api/editplant/' + id, plant)
            .then(res => {
                console.log(res.data)
                navigate('/plants')
            })
            .catch(err => console.log(err))
    }


    return (
    <div>
        <div id="plants_form">
        <form onSubmit={(id) ? handleUpdate : handleSubmit}>
            <input placeholder='Common Name' type="text" name="common_name" onChange={handleChange} value={plant.common_name} />
            <input placeholder='details' type="text" name="details" onChange={handleChange} value={plant.details}/>
            <input type="submit" value="Submit" />
        </form>
        </div>  
    </div>
    )
}

export default PlantForm