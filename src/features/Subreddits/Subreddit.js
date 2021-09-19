import styles from './Subreddits.module.css';
import { useSelector, useDispatch} from 'react-redux';
import { selectSubreddits, removeSubreddit } from './subredditSlice';
import {removePostDetail} from '../posts/postSlice';
import { searchPostsByCategoryName } from '../search/searchSlice';
import { FcEmptyTrash } from 'react-icons/fc'

export default function Subreddit () {
    const dispatch = useDispatch();
    let subreddits = useSelector(selectSubreddits);
    subreddits = subreddits.subreddits.subreddits;

    const searchBySubbreddit = (e, subreddit) => {
        
        document.getElementsByName('chooseSubreddit').forEach(el => {
            el.style.backgroundColor = '#fff';
        });
        e.target.style.backgroundColor = '#ddd';
        dispatch(removePostDetail())
        dispatch(searchPostsByCategoryName(subreddit))
    }

    if(Object.keys(subreddits).length !== 0 && typeof subreddits !== 'undefined'){
        return (
            <div className={styles.container}>
                <h3 className={styles.title}>Subredits: </h3>
                <div className={styles.subredditBody} id="subredits">
                    { subreddits.map((subreddit, i) => {
                        return (
                            <div key={i} className={styles.chooseSubredditContainer}>
                                <button className={styles.chooseSubreddit} name="chooseSubreddit" 
                                    value={subreddit}
                                    onClick={(e) => searchBySubbreddit(e, subreddit)}
                                >
                                    {subreddit}
                                    <button className={styles.deleteSubreddit}
                                        value={subreddit}
                                        onClick = {() => dispatch(removeSubreddit(subreddit))}
                                    >
                                        <FcEmptyTrash />
                                    </button>
                                </button>

                            </div>
                        )
                    })}  
                </div>
            </div>
        )
    }
    else{
        return (
            null
        )
    }
}