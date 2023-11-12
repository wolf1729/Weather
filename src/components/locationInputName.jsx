import '../style/inputTab.css';

// eslint-disable-next-line react/prop-types
function InputTab({value, handleChange}) {

    return(
        <>
        <input placeholder='Search' type='text' className="searchBar" maxLength='50' onChange={handleChange} value={value}/>
        </>
    )
}

export default InputTab;