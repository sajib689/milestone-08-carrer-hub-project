import { Link, useLoaderData, useParams } from "react-router-dom";
import money from "../../assets/icons/money.png";
import calcander from "../../assets/icons/calendar.png";
import phone from "../../assets/icons/phone.png";
import email from "../../assets/icons/email.png";
import location2 from "../../assets/icons/location2.png";
const FeaturedDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((j) => j.id === idInt);
  const {
    job_title,
    contact_information,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;
const handleJob = job => {
  
  localStorage.setItem('jobs', JSON.stringify(job));
}
  return (
    <div>
      <div>
        <div className="card w-full ">
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">Job Details</h2>
          </div>
        </div>
      </div>
      {/* job details */}
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  Job Description:
                </p>
                <p className="leading-snug">{job_description}</p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  Job Responsibility:
                </p>
                <p className="leading-snug">{job_responsibility}</p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">
                  Educational Requirements:
                </p>
                <p className="leading-snug">{educational_requirements}</p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="text-lg font-medium leading-snug">Experiences:</p>
                <p className="leading-snug">{experiences}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-2/5 bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] rounded-lg">
            <div className="flex flex-col items-start justify-start p-4 md:p-8 lg:p-12">
              <div>
                <h1 className="font-bold">Job Details</h1>
                <hr />
              </div>
              <div className="flex gap-2 mt-5">
                <img src={money} alt="" />
                <p>Salary: {salary} (Per Month)</p>
              </div>
              <div className="flex gap-2 mt-5">
                <img src={calcander} alt="" />
                <p>Job Title: {job_title} (Per Month)</p>
              </div>
              <div className="mt-4">
                <h1 className="font-bold text-black">Contact Information</h1>
                <hr />
                <div className="flex gap-2 mt-5">
                  <img src={phone} alt="" />
                  <p>
                    <span>Phone: </span>
                    {contact_information.phone}
                  </p>
                </div>
                <div className="flex gap-2 mt-5">
                  <img src={email} alt="" />
                  <p>
                    {" "}
                    <span>Email: </span>
                    {contact_information.email}
                  </p>
                </div>
                <div className="flex gap-2 mt-5">
                  <img src={location2} alt="" />
                  <p>
                    <span>Address: </span>
                    {contact_information.address}
                  </p>
                </div>
                <Link onClick={handleJob(job)} className="btn btn-active btn-secondary w-full mt-5">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedDetails;
