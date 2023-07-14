import { useState ,useEffect} from 'react'
import './App.css'
import Job from './container/job'

function App() {
  const [data, setData] = useState([]);
  const [isLoading , setIsLoading] = useState(false);
  const api_url = "https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json";

  useEffect(() => {
    // fetch("https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json")
    //   .then((resp) => resp.json())
    //   .then((apiData) => {
    //     setData(apiData);
    //   });
    
    const getApi = async (url) => {
      try{
        setIsLoading(true);
        const response = await fetch(url);
        const fetchedData = await response.json();
        console.log(fetchedData);
        setData(fetchedData);
        setIsLoading(false);
      } catch(err) {
        console.log(err);
        setIsLoading(false);
      } 
    }
    getApi(api_url);
  }, [])

  
  return (
    <div className='job'>
        <div className='gradient__bg'>
        
        </div>
        {isLoading && <p>Loading jobs...</p>}
        {!isLoading && (data.length ? 
          <Job jobs = {data} />
          : <p>No jobs to display!</p>)}        
    </div>
  )
}

export default App
