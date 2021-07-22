import {auth, provider} from "../firebase";

export const signInWithGoogle = async () => {
    let user;
    await auth.signInWithPopup(provider)  //this method returns us the user
        .then((res) => {
            console.log(res.user);
            user = res.user;
        })
        .catch((err) => {
            console.log(err.message);
        });

    return user;
};

export const logout = async () => {
    let logout_success;
    await auth.signOut()
        .then(() => {
            logout_success = true;
        })
        .catch((err) => {
            console.log(err.message);
        });
    
    return logout_success;
};