import { useContext } from "react"
import { CountriesContext } from "../context/CountriesContext"

const Country = ({country}) => {
    const {addToPlanning,addToVisited,toggleVisited} = useContext(CountriesContext);

const handleVisited = (country) =>{
    addToVisited(country);
}

const handlePlanning = (country) =>{
    addToPlanning(country);
}



    return (
        <div key={country.name.common}>
        <h2>{country.name.common}</h2>
        <img src={country.flags.png} alt={country.name.common} />
        <button onClick={()=>handlePlanning(country)}>mark as planning</button>
        <button onClick={()=>handleVisited(country)}>mark as visited</button>
        </div>
    )
}

export default Country
