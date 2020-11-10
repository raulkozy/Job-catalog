import React , { useState, useEffect }from 'react';
import data from "../src/API/data.json"
import JobBoardComponent from "../src/components/JobBoardComponent";

const App = () => {
  const [ jobs, setJobs ] = useState([]);
  
  useEffect(() => {
    return setJobs(data);
  }, [])
  
  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img src="/images/bg-header-desktop.svg"/>
      </header>
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
