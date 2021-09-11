import { useDispatch } from "react-redux"
import { useState } from 'react'; 
import { FaSearch } from 'react-icons/fa';
import { searchPostsByQuery } from './searchSlice.js';
import styles from './Search.module.css';

export default function Post () {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    return(
        <form className={styles.searchForm}>
            <input 
                value={searchText} 
                onInput={e => setSearchText(e.target.value)} 
                className={styles.searchTerm}
                name='search' 
                placeholder="What are you looking for?"
                type="text"
            />
            <button 
                type="button"
                className={styles.searchButton}
                onClick={() => dispatch(searchPostsByQuery(searchText))}
            >
                <FaSearch />
            </button>

        </form>
)
}