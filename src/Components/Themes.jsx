import { useState } from "react";


const Themes = () => {

    const [themes, setThemes] = useState({
        mono:false,
        colorful:false,
    })

    const handleChange = e => {
        const targetValue = e.target.value
        setThemes({mono: targetValue==='mono', colorful: targetValue==='colorful'});
    }

    
    return ( 
        <div className="button-container">
            <button value='mono'  ></button>
            <button value='colorful' ></button>
        </div>
     );
}
 
export default Themes;