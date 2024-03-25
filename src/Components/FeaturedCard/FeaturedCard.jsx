import { Link } from 'react-router-dom';
import location1 from '../../assets/icons/Location.png'
import salaryImg from '../../assets/icons/money.png'

const FeaturedCard = ({ job }) => {
  const {
    id,
    company_name,
    job_title,
    job_type,
    location,
    logo,
    remote_or_onsite,
    salary,
  } = job;

  return (
    <div className=" card card-compact w-full bg-base-100 shadow-xl">
      <div className='flex justify-start m-5'>
        <img src={logo} alt={company_name} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <h2 className="card-title">{company_name}</h2>
        <div className="flex gap-3">
          <button className="btn btn-sm">{remote_or_onsite}</button>
          <button className="btn btn-sm">{job_type}</button>
        </div>
        <div className='flex gap-6'>
        <div className='flex gap-2 mt-3'>
            <img src={location1} alt="" />
            <p>{location}</p>
        </div>
        
        <div className='flex gap-2 mt-3'>
            <img src={salaryImg} alt="" />
            <p>{salary}</p>
        </div>

        </div>
        <div className="card-actions justify-start">
          <Link to={`job/${id}`} className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
