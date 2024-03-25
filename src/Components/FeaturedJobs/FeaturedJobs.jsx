import { useEffect, useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

  return (
    <div className="mt-[200px] mb-[100px]">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#1A1919]">Featured Jobs</h1>
        <p className="text-[#757575] mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* featured card */}
        <div className="m-4 grid grid-cols md:grid-cols-2 gap-5 mt-[100px]">
            {
                jobs.map(job => <FeaturedCard key={job.id} job={job}></FeaturedCard>)
            }
        </div>
    </div>
  );
};

export default FeaturedJobs;
