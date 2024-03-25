import { useEffect, useState } from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [datalength, setDatalength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

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
        {jobs.slice(0, datalength).map((job) => (
          <FeaturedCard key={job.id} job={job}></FeaturedCard>
        ))}
      </div>
      <div className="flex justify-center">
        <div className={jobs.length === datalength && "hidden"}>
          <Link
            onClick={() => setDatalength(jobs.length)}
            className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
          >
            See All Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
