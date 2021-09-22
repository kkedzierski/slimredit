import styles from './Comment.module.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { whenCreated } from '../../utilities/utilities';

export default function Comment ({comment}){
    let createdAt = whenCreated(comment.data.created);
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <p>{comment.data.body}</p>
                <div className={styles.info}>
                    <i className={styles.author}>{comment.data.author}</i>
                    <div className={styles.votesComment}>
                        <FaArrowUp />
                        <p>{comment.data.score}</p>
                        <FaArrowDown />
                    </div>
                    <p>created {createdAt} days ago</p>
                </div>
            </div>
        </div>
        
    )
}