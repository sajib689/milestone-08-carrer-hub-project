

const AppliedJobs = () => {
    const jobsParse = localStorage.getItem('jobs');
    const jobs = JSON.parse(jobsParse)
    console.log(jobs);
    return (
        <div>
            <h1>Applied job: {jobs.length}</h1>
        </div>
    );
};

export default AppliedJobs;