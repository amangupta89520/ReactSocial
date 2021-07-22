import CreatePost from "./CreatePost";
import Feed from "./feed";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <CreatePost/>
            <Feed />
        </div>
    );
}
 
export default Home;