

   export const searchPosts = async query => {
        let url = `https://www.reddit.com/search.json?q=${query}`;
        const response = await fetch(url);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const posts = await response.json();
        return posts;
      }

    export const changeCategory = async categoryName => {
        let url = `https://www.reddit.com/r/${categoryName}.json`;
        const response = await fetch(url);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const posts = await response.json();
        return posts; 
    }
