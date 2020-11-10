import React from "react";

const JobBoardComponent = ({job}) => {
    const tags = [job.role, job.level];

    if(job.tools) {
        tags.push(...job.tools);
    }

    if(job.languages) {
        tags.push(...job.languages);
    }


    return (
        <div className={`flex bg-white shadow-md my-4 p-6 rounded ${job.featured && 'border-l-4 border-black border-solid'}`}>
            <div>
                <img src={job.logo} alt={job.company}/>
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {job.company}
                    {job.new && <span className="text-teal-100 bg-teal-500 font-bold m-2 py-1 px-2 rounded-full">New</span>}
                    {job.featured && <span className="text-white bg-gray-800 font-bold py-1 px-2 rounded-full">Featured</span>}
                </h3>
                <h2 className="font-bold text-2xl">{job.position}</h2>
                <p className="text-gray-700">
                    {job.postedAt} · {job.contract} · {job.location}
                </p>
            </div>
            <div className="flex items-center ml-auto">
                { tags ? tags.map((tag) => <span className="text-teal-500 bg-teal-100 font-bold m-1 p-2 rounded">{tag}</span>) : '' }
            </div>
        </div>
    )
}

export default JobBoardComponent;