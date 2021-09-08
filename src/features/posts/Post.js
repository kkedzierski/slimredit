import { useSelector } from "react-redux";
import { selectSearchResult } from "../search/searchSlice"; 

export default function Post() {
    let resultSearch = useSelector(selectSearchResult);
    resultSearch = resultSearch.search.searchResult;
    if(Object.keys(resultSearch).length !== 0 && typeof resultSearch !== 'undefined'){
        return(
            <div>
                {resultSearch.data.children.map((post, i) => {
                    return(
                    <div key={i}>
                            <h2>{post.data.title}</h2>
                            <img src={post.data.url} alt="post"/>
                            <button>nice</button>
                            <button>not nice</button>
                            <a href="/">{post.data.subreddit}</a>
                            <p>{post.data.author}</p>
                            
                            <button>show comments</button>
                        </div>
                    )
                        
                    })
                }
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