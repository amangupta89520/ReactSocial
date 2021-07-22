import { useContext } from "react";
import { UserContext } from "./contexts/user";
import SignInBtn from "./SignInBtn"

const Navbar = () => {

    const [user,] = useContext(UserContext).user;

    return (
        <div className="navbar">
            <p>ReactSocial</p>
            {user ? <img className="navbar_img" src={user.photoURL}></img> : <SignInBtn />}
        </div>
    );
}
 
export default Navbar;