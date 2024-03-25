import user from '../../assets/images/user.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={user} className="md:w-[600px] rounded-lg " />
          <div className='ms-4'>
            <h1 className="text-7xl font-bold">One Step <br /> Closer To Your <br /> <span className='text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text'>Dream Job</span></h1>
            <p className="py-6">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
            <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;