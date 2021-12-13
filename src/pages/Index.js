import { useContext } from 'react';
import Country from '../components/Country';
import { CountriesContext } from '../context/CountriesContext';
import Topbar from '../components/Topbar';

const Dashboard = () => {
  const { countries } = useContext(CountriesContext);

  console.log(countries);
  return (<div>
        <h2>List of countries</h2>
        {
            countries && (
                <>
                 {countries.map((country)=>(
                     <Country country={country}/>
                 ))}
                </>
            )
        }
  </div>);
};

export default Dashboard;
