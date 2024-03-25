import { useLoaderData } from "react-router-dom";


const FeaturedDetails = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    return (
        <div>
            
        </div>
    );
};

export default FeaturedDetails;