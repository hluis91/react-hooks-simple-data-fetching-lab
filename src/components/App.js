import React, { useEffect, useState } from "react"

    const App = () => {
        const [image, setImage] = useState(null)
    
        useEffect(() => {
            fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => setImage(data.message))
        },[])
        
        if (!image) return <h2>Loading...</h2>

        return <img src={image} alt="A Random Dog" />
        
    }


    

export default App
