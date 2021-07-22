import { useContext, useState } from "react";
import { UserContext } from "./contexts/user";
import { db } from "./firebase";

const CommentInput = ({ comments, id }) => {

    const [user, setUser] = useContext(UserContext).user;

    const [comment, setComment] = useState("");

    const [commentArray, setCommentArray] = useState(comments ? comments : []);

    const addComment = () => {
        //Add comment to the post info
        if(comment != ""){
            commentArray.push({
                comment: comment,
                username: user.email.replace("@gmail.com", "").toLowerCase(),
            });

            db.collection("posts").doc(id).update({comments: commentArray})
                            .then(() => {
                                setComment("");
                                console.log("comment added");
                            }).catch(err => console.log(err));
        }
    }

    return (
        <div className="commentInput">
            <textarea className="commentInput_textarea" rows="1" placeholder="write a comment.." 
                      onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
            <button className="commentInput_btn" onClick={addComment}>Post</button>
        </div>
    );
}
 
export default CommentInput;