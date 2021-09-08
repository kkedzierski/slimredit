import { useDispatch } from "react-redux"
import { useState } from 'react'; 
import { FaSearch } from 'react-icons/fa';
import { searchPostsByQuery } from './searchSlice.js';

export default function Post () {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    return(
        <form>
            <input value={searchText} onInput={e => setSearchText(e.target.value)}  id="searchInput" name='search' placeholder="Look for reddits"/>
            <button 
                type="button"
                onClick={() => dispatch(searchPostsByQuery(searchText))}
            >
                <FaSearch />
            </button>

        </form>
    )
}