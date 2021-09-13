import styles from './Subreddits.module.css'; 
import { useSelector, useDispatch } from "react-redux";
import { selectSearchResult } from "../search/searchSlice"; 
import { selectSubreddits, addSubreddit } from './subredditSlice';

export default function AddSubreddit () {
    const dispatch = useDispatch();
    let resultSearch = useSelector(selectSearchResult);
    let subreddits = useSelector(selectSubreddits);
    subreddits = subreddits.subreddits.subreddits;

    const isSubreddit = (resultSearch) => {
        if(Object.keys(resultSearch.search.searchResult).length !== 0)
            if(resultSearch.search.isCategory)
                return true;
        return false;
    }

    const getSubbreddit = (resultSearch) => {
        return resultSearch.search.searchResult.data.children[0].data.subreddit;
    }

    if(isSubreddit(resultSearch) && !subreddits.includes(getSubbreddit(resultSearch))){
        return (
            <div className={styles.addSubredditContainer}>
                <p>
                    Add subreddit: <strong>{getSubbreddit(resultSearch)}</strong> to yours subbredits
                </p>
                <button 
                    className={styles.addSubredditBtn}
                    onClick={() => dispatch(addSubreddit(getSubbreddit(resultSearch)))}
                >
                ADD
                </button>
            </div>
        )
    } else
        return(
            null
        )

}