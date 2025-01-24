import Link from "next/link";


const Home = () => {
    
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl font-bold">This is home page.</h1>

            <p>To see all blogs --</p>
            
            <Link href='/blogs' className="btn btn-primary">See Blogs</Link>
        </div>
    );
};

export default Home;