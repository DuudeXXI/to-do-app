
const Themes = ({themes, setThemes}) => {

    const handleChange = e => {
        const targetValue = e.target.value
        console.log(themes);
        setThemes({mono: targetValue === 'mono', colorful: targetValue === 'colorful' });
        console.log(themes);
    }
    
    const bodyMono = () => {
        document.body.classList.add("body-mono")
        document.body.classList.remove("body-colorful")
    }
    const bodyColorful = () => {
        document.body.classList.add("body-colorful")
        document.body.classList.remove("body-mono")
    }
    
    if (themes.mono === true) {
        bodyMono()
    }
    if(themes.colorful === true) {
        bodyColorful()
    }
    
    return ( 
        <div className="button-container">
            <button className={themes.mono === true ? null : "monochrome"} value='mono' onClick={handleChange}></button>
            <button className={themes.colorful === true ? null : 'rainbow'} value='colorful' onClick={handleChange}></button>
        </div>
     );
}
 
export default Themes;