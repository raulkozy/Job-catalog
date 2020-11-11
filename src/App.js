import React, { useState, useEffect } from 'react';
import data from "../src/API/data.json"
import JobBoardComponent from "../src/components/JobBoardComponent";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    return setJobs(data);
  }, [])

  const filterByTags = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages)
    }

    return filters.every(filter => tags.includes(filter))
  }
  const filteredJobs = jobs.filter(filterByTags)

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (fil) => {
    setFilters(filters.filter(f => f !== fil));
  }

  const clearFilters = () => {
    setFilters([])
  }

  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img src="/images/bg-header-desktop.svg" alt="header" />
      </header>
      <div className="container m-auto">
        {
          filters.length > 0 &&
          (<div className="flex bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded z-10 relative">
            {filters.map((filter) =>
              <span onClick={() => handleFilterClick(filter)} key={filter} className="font-bold mr-4 mb-4 p-2 rounded cursor-pointer">
                <span className="text-teal-500 bg-teal-100 p-2">
                  {filter}
                </span>
                <span className="bg-teal-500 text-teal-100 p-2 ">X</span>
              </span>)}
            <button onClick={clearFilters} className="font-bold text-gray-700 ml-auto">Clear</button>
          </div>)
        }
        {
          jobs.length === 0 ? (
            <p>Jobs are fetching...</p>
          ) : (
              filteredJobs.map(job => {
                return <JobBoardComponent handleTagClick={handleTagClick} job={job} key={job.id} />
              })
            )
        }
      </div>
    </div>
  );
}

export default App;
