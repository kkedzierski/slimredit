import Comment from "./Comment";
import styles from "./Comment.module.css"

export default function Comments ({comments}){
    return (
        <div className={styles.wrapper}>
            {comments.map((comment, i) => {
                if(comment.data.body){
                    return (
                        <div key={i}>
                            <Comment comment={comment}/>
                        </div>
                    )
                }
                return(null);
            })}
            
        </div>
        
    )
}