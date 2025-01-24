import Link from "next/link";


const Home = () => {
    
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl font-bold">Your Daily Dose of Knowledge</h1>

            <p>Dive into a world of fresh perspectives, trending topics, and expert opinions. Explore, learn, and stay inspired with our curated collection of engaging blog posts.</p>
            
            <Link href='/blogs' className="btn btn-primary">See Blogs</Link>
        </div>
    );
};

export default Home;