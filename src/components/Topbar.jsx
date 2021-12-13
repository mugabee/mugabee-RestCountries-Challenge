import { useContext, useState } from "react"
import { CountriesContext } from "../context/CountriesContext";
import {Link} from 'react-router-dom';

const Topbar = () => {
    const [term,setTerm] = useState('');
    const {getCountriesByName} = useContext(CountriesContext);

    const handleSubmit = (e) =>{
        e.preventDefault();

        getCountriesByName(term);
    }
    return (
        <div>
            <h1>Rest Countries</h1>


            <form onSubmit={handleSubmit}>
                <input type="input" name="term" value={term} onChange={(e)=>setTerm(e.target.value)} />
                <button type="submit">Search</button>
            </form>


            <ul>
               <Link to="/"> <li>Home</li></Link>
               <Link to="/planning">  <li>Traveled</li></Link>
               <Link to="/visited"> <li>Visited</li></Link>
               <Link to="/"><li>Logout</li></Link>
            </ul>

        </div>
    )
}

export default Topbar
