import { useContext } from "react"
import Country from "../components/Country";
import { CountriesContext } from "../context/CountriesContext"

const Visited = () => {
    const {visitedCountries,setVisitedCountry} = useContext(CountriesContext);

    const handleClick = () =>{
        setVisitedCountry([]);
    }
    return (
        <div>
            <h2>Hello world</h2>
            <button onClick={handleClick}>Clear visited</button>
            {
            visitedCountries && (
                <>
                 {visitedCountries.map((country)=>(
                     <Country country={country}/>
                 ))}
                </>
            )
        }
        {!visitedCountries && <h2>Nothing to show</h2>}
        </div>
    )
}

export default Visited
