import { useContext } from "react";
import { UserContext } from "./contexts/user";
import { signInWithGoogle } from "./services/auth";

const SignInBtn = () => {

    const [ , setUser ] = useContext(UserContext).user;

    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle();
        if(userBySignIn) setUser(userBySignIn);
    }

    return (
        <div className="signInBtn" onClick={ signInBtnClick }>
            <p>Sign In With Google</p>
        </div>
    );
}
 
export default SignInBtn;