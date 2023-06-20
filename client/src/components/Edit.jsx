import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PlantForm from './PlantForm'

const Edit = () => {


    return (
        <div>
            <PlantForm />
        </div>
    )
}

export default Edit