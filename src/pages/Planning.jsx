import { useContext } from "react"
import Country from "../components/Country";
import { CountriesContext } from "../context/CountriesContext"

const Planning = () => {
    const {planning,setPlanning} = useContext(CountriesContext);

    const handleClear = () =>{
        setPlanning([]);
    }
    return (
        <div>
            <h2>Hello World</h2>
            <button onClick={handleClear}>Clear Planning</button>
            {
            planning && (
                <>
                 {planning.map((country)=>(
                     <Country country={country}/>
                 ))}
                </>
            )
        }
        </div>
    )
}

export default Planning
