import { useContext } from "react";
import Comment from "./comment";
import CommentInput from "./comment-input";
import { UserContext } from "./contexts/user";
import { db, storage } from "./firebase";

const Post = ({profileUrl, username, id, photoURL, caption, comments}) => {

const [user, setUser] = useContext(UserContext).user;

const deletePost = () => {
    //delete the image from firebase storage

    //get ref to the img file we like to delete
    var imageRef = storage.refFromURL(photoURL);

    //delete the file
    imageRef.delete()
            .then(() => {
                console.log("delete successful")
            }).catch(err => console.log(err))

    //delte the post info from firebase filestore
    db.collection("posts").doc(id).delete()
                                .then(() => {
                                    console.log("delete post info successful")
                                }).catch(err => console.log(err))
} 

    return (
        <div className="post">
            <div className="post_header">
                <div className="post_headerLeft">
                    <img className="post_profilePic" src={profileUrl} />
                    <p style={{marginLeft: "8px"}}>{username}</p>
                </div>
                <button className="post_delete" onClick={deletePost}>Delete</button>
            </div>

            <div className="post_center">
                <img src={photoURL} className="post_photoUrl" />
            </div>

            <div>
                <p><span style={{fontWeight: "500", marginRight: "8px"}}>{ username }</span>{ caption }</p>
            </div>

            

            {comments ? comments.map(comment => <Comment username={comment.username} caption={comment.comment}/>) : <></>}

            
            {user ? <CommentInput id={id} comments={comments} /> : <></>}
        </div>
    );
}
 
export default Post;