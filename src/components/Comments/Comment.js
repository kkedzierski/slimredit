import styles from './Comment.module.css';

export default function Comment ({comment}){
    return (
        <div className={styles.container}>
            <p>{comment.data.body}</p>
            <i>{comment.data.author}</i>
        </div>
        
    )
}