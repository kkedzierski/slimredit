import { useSelector } from "react-redux";
import Post from "./Post";
import Posts from "./Posts";
import { selectPostDetail } from "./postSlice"; 
import { selectSearchResult } from "../search/searchSlice"; 
import styles from './Post.module.css';
import Loader from "react-loader-spinner";
import { BiMessageAltError } from 'react-icons/bi';

export default function PostSwitcher() {
    let postDetail = useSelector(selectPostDetail);
    let resultSearch = useSelector(selectSearchResult);

    let searchStatus = resultSearch.search.status;
    let postStatus = postDetail.postDetail.status;
    
    postDetail = postDetail.postDetail.postDetail;
    let isPostDetail = (Object.keys(postDetail).length === 0) ? false : true;

    switch(postStatus || searchStatus){
        case 'loading':
            return (
                <Loader
                    className={styles.loader}
                    type="Puff"
                    color="#2196f3"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
                );
        case 'error':
            return (
                <div class={styles.errorContainer}>
                    <BiMessageAltError 
                        className={styles.errorIcon}
                    />
                    UPS something went wrong, try again later
                </div>
            );
        case 'errorCategory':
            return (
                <div class={styles.errorContainer}>
                    <BiMessageAltError 
                        className={styles.errorIcon}
                    />
                    UPS something went wrong, maybe category doesn't exist, try again later;
                </div>
            );
        case 'succeeded':

            if(isPostDetail){
                return(
                    <Post />
                )
            }else{
                return(
                    <Posts />
                )
            }
        default:
            return(null);
    }
}
