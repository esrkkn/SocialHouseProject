import React from "react";
import { useEffect, useState, useContext  } from "react";
import { SocialHouseContext } from "../../Context";
import { useHistory } from "react-router";
import axios from "axios";


export default function Ads() {

    const history = useHistory()

    const [posts, setPosts] = useState([]);

    const { userData } = useContext(SocialHouseContext)

    useEffect( () => {

        if (!userData) history.push('/')

    const getData = async () => {

        const response = await axios.get('posts/list')

        console.log('response is', response);

        setPosts([...response.data])
        
    }

    getData()

}, [])

 

return (
    <div>
        
    </div>
)
    
}