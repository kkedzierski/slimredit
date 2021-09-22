import { useSelector } from "react-redux";
import { selectPostDetail } from "./postSlice"; 
import { whenCreated, isPicture } from "../../utilities/utilities";
import { FaArrowUp, FaArrowDown, FaRegCommentAlt } from 'react-icons/fa';
import styles from './Post.module.css';
import withoutThumbnail from '../../images/noThumbnail.jpg' 
import Comments from "../../components/Comments/Comments";

export default function Post() {
    let postDetails = useSelector(selectPostDetail);
    let comments = postDetails.postDetail.postDetail[1].data.children;
    postDetails = postDetails.postDetail.postDetail[0].data.children;
    let picture = false;
    let thumbnail = withoutThumbnail;
    let createdAt = 0;

    if(Object.keys(postDetails).length !== 0 && typeof postDetails !== 'undefined'){
        
        return(
            <div className={styles.container}>
               {postDetails.map((detail, i) => {
                     picture = isPicture(detail.data.url);
                     thumbnail = detail.data.thumbnail === 'self' ? thumbnail : detail.data.thumbnail;
                     createdAt = whenCreated(detail.data.created);
                    return(
                        <div className={styles.wrap} key={i}>
                            
                            <div className={styles.votes}>
                                <FaArrowUp />
                                <p className={styles.voteNumber}>{detail.data.ups}</p>
                                <FaArrowDown />
                            </div>
                            <div className={styles.postBodyWrapper}> 
                                <div 
                                    className={styles.postBody}
                                    style={{"cursor": "default"}}
                                >
                                    <div className={styles.titleLinkContainer}>  
                                        <h3 className={styles.title}>{detail.data.title}</h3>
                                        <a 
                                            href={detail.data.url} 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            <img 
                                                className={styles.thumbnail} 
                                                style={thumbnail === withoutThumbnail ? {"width" : "100%"} : {}}
                                                src={thumbnail} 
                                                alt={detail.data.title}
                                            />
                                        </a>
                                    </div>
                                    {picture ?  <img 
                                            className={styles.image} 
                                            src={detail.data.url} 
                                            alt="post"
                                        />: null}
                                    <div className={styles.description}>
                                        {detail.data.selftext}
                                    </div>

                                    <div className={styles.authorContainer}>
                                        <a className={styles.subreddit} href="/">{detail.data.subreddit}</a>
                                        <p className={styles.author}>posted by <i> {detail.data.author} </i> </p>
                                        <p className={styles.createdAt}> created {createdAt} days ago</p>
                                        <div className={styles.commentLength}>
                                                <FaRegCommentAlt/>
                                                <p>{detail.data.num_comments}</p>
                                        </div>
                                    </div>
                                    <div className={styles.postComments}>
                                        <Comments comments={comments}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}