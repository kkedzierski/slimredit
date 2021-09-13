import { useSelector } from "react-redux";
import { selectSearchResult } from "../search/searchSlice"; 
import { whenCreated } from "../../utilities/utilities";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import styles from './Post.module.css';

export default function Post() {
    let resultSearch = useSelector(selectSearchResult);
    resultSearch = resultSearch.search.searchResult;
    let isPicture = false;
    let createdAt = 0;

    if(Object.keys(resultSearch).length !== 0 && typeof resultSearch !== 'undefined'){
        return(
            <div className={styles.container}>
                {resultSearch.data.children.map((post, i) => {
                    isPicture = post.data.url.slice(-4)[0] === '.' || post.data.url.slice(-5)[0] === '.' ? true : false;
                    createdAt = whenCreated(post.data.created);
                    
                    return(
                        <div className={styles.wrap}>
                            <div className={styles.votes}>
                                <FaArrowUp />
                                <p className={styles.voteNumber}>{post.data.ups}</p>
                                <FaArrowDown />
                            </div>
                            <div>   
                                <div className={styles.postBody} key={i}>
                                    <h3 className={styles.title}>{post.data.title}</h3>
                                    {isPicture ?  <img 
                                        className={styles.image} 
                                        src={post.data.url} 
                                        alt="post"
                                    />: null}
                                    <div className={styles.authorContainer}>
                                        <a className={styles.subreddit} href="/">{post.data.subreddit}</a>
                                        <p className={styles.author}>posted by {post.data.author}</p>
                                        <p className={styles.createdAt}> created {createdAt} days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }else{
        return(
            <div>
                Loading...
            </div>
        )
    }
    
}