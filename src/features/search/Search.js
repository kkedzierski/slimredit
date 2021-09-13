import { useDispatch } from "react-redux";
import { useState } from 'react'; 
import { FaSearch } from 'react-icons/fa';
import { searchPostsByQuery, searchPostsByCategoryName } from './searchSlice.js';
import styles from './Search.module.css';

export default function Post () {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [byCategory, setByCategory] = useState(false);

    const submitSearch = (searchTerm) => {
        if(byCategory){
            dispatch(searchPostsByCategoryName(searchTerm))
        }else{
            dispatch(searchPostsByQuery(searchTerm))
        }
        
    }
    const handleEnterPress = (e) => {
        e.preventDefault();
        submitSearch(searchText);
      }

    return(
        <div className={styles.wrapper}>
            <form className={styles.searchForm}>
                <input 
                    value={searchText} 
                    onInput={e => setSearchText(e.target.value)} 
                    onKeyDown={e => e.key === 'Enter' && handleEnterPress(e)}
                    className={styles.searchTerm}
                    name='search' 
                    placeholder="What are you looking for?"
                    type="text"
                />
                <button 
                    type="button"
                    className={styles.searchButton}
                    onClick={() =>  submitSearch(searchText)}
                >
                    <FaSearch />
                </button>
            </form>
            <div className={styles.categoryCheckbox}>
                <label for="category">Search by category name</label>
                <input 
                    name="category" 
                    type="checkbox" 
                    onClick={() => byCategory ? setByCategory(false) : setByCategory(true)} 
                />
            </div>
         </div>
)
}