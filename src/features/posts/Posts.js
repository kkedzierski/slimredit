import { useSelector, useDispatch } from "react-redux";
import { selectSearchResult } from "../search/searchSlice"; 
import { whenCreated, isPicture } from "../../utilities/utilities";
import { FaArrowUp, FaArrowDown, FaRegCommentAlt } from 'react-icons/fa';
import { renderPostByPermalink } from './postSlice.js';

import styles from './Post.module.css';

export default function Post() {
    const dispatch = useDispatch();
    let resultSearch = useSelector(selectSearchResult);
    
    resultSearch = resultSearch.search.searchResult;
    console.log(resultSearch);
    let picture = false;
    let createdAt = 0;

    if(Object.keys(resultSearch).length !== 0 && typeof resultSearch !== 'undefined'){
        return(
            <div className={styles.container}>
                {resultSearch.data.children.map((post, i) => {
                    picture = isPicture(post.data.url);
                    createdAt = whenCreated(post.data.created);
                    
                    return(
                        <div className={styles.wrap} key={i}>
                            <div className={styles.votes}>
                                <FaArrowUp />
                                <p className={styles.voteNumber}>{post.data.ups}</p>
                                <FaArrowDown />
                            </div>
                            <div>   
                                <div 
                                    className={styles.postBody} 
                                    key={i}
                                    onClick = {() => dispatch(renderPostByPermalink(post.data.permalink))}
                                >
                                    <h3 className={styles.title}>{post.data.title}</h3>
                                    {picture ?  <img 
                                        className={styles.image} 
                                        src={post.data.url} 
                                        alt="post"
                                    />: null}
                                    <div className={styles.authorContainer}>
                                        <a className={styles.subreddit} href="/">{post.data.subreddit}</a>
                                        <p className={styles.author}>posted by <i> {post.data.author} </i> </p>
                                        <p className={styles.createdAt}> created {createdAt} days ago</p>
                                        <div className={styles.commentLength}>
                                            <FaRegCommentAlt/>
                                            <p>{post.data.num_comments}</p>
                                        </div>
                                       
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
            <div></div>
        )
    }
    
    
}