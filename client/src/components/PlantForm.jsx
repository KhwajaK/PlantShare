import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

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
                setErrors(err.response.data.error.errors)
                // console.log("error in create:" + err.response.data.errors)
                // console.log("submit error------------")
                // console.log(err)
                // console.log(plant.common_name)
                // console.log(err.response.data.error.message)
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
            .catch(err => {console.log(err)
            setErrors(err.response.data.error.errors)})
    }

// response.data.error.errors.common_name.message

    return (
    <div>
        <div id="plants_form">
        <form onSubmit={(id) ? handleUpdate : handleSubmit}>
            {errors.common_name ? <p className='text-danger'>{errors.common_name.message}</p>: null}
            <input id="form_decor" className="form-control" placeholder='Common Name' type="text" name="common_name" onChange={handleChange} value={plant.common_name} />
            {errors.details ? <p className='alert danger'>{errors.details.message}</p>: null}
            <input id="form_decor" className="form-control" placeholder='details' type="text" name="details" onChange={handleChange} value={plant.details}/>
            <input id="form_decor" className="button" type="submit" value="Submit" />
        </form>
        </div>
    </div>
    )
}

export default PlantForm