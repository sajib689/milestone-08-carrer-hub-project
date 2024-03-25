import user from '../../assets/images/user.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <img src={user} className=" rounded-lg " />
          <div className='ms-4'>
            <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
            <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;