import React , { useState, useEffect }from 'react';
import data from "../src/API/data.json"
import JobBoardComponent from "../src/components/JobBoardComponent";

const App = () => {
  const [ jobs, setJobs ] = useState([]);
  
  useEffect(() => {
    setJobs(data);
  }, [])
  
  console.log(jobs)

  return (
    <div className="App">
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          jobs.map(job => {
            return <JobBoardComponent job={job} key={job.id}/>
          })
        )
      }
    </div>
  );
}

export default App;
