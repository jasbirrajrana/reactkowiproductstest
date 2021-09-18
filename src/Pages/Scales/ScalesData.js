import React from 'react'
import axios from "axios"
const baseURL= "https://dev.kowi.in/api/products/"


function ScalesData() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);

    
    const BodyCompositionScaleData = post[0]
    console.log(post)
    

    return (
        <div>
            {BodyCompositionScaleData}
        </div>
    )
}

export default ScalesData
