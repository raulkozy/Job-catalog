import React from "react";

const JobBoardComponent = ({job, handleTagClick}) => {
    const tags = [job.role, job.level];

    if(job.tools) {
        tags.push(...job.tools);
    }

    if(job.languages) {
        tags.push(...job.languages);
    }


    return (
        <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${job.featured && 'border-l-4 border-teal-500 border-solid'} lg:flex-row`}>
            <div>
                <img className="-mt-16 mb-4 w-20 h-20 lg:h-24 lg:w-24 lg:my-0" src={job.logo} alt={job.company}/>
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {job.company}
                    {job.new && <span className="text-teal-100 bg-teal-500 font-bold m-2 py-1 px-2 rounded-full  uppercase text-sm">New</span>}
                    {job.featured && <span className="text-white bg-gray-800 font-bold py-1 px-2 rounded-full uppercase text-sm">Featured</span>}
                </h3>
                <h2 className="font-bold text-2xl my-2">{job.position}</h2>
                <p className="text-gray-700">
                    {job.postedAt} · {job.contract} · {job.location}
                </p>
            </div>
            <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0 lg:justify-center">
                { tags ? tags.map((tag) => <span onClick={() => handleTagClick(tag)} key={tag} className="text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded lg:mb-0 cursor-pointer">{tag}</span>) : '' }
            </div>
        </div>
    )
}

export default JobBoardComponent;