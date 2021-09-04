
class RedditApi{


    async searchPosts(query) {
        let url = `https://www.reddit.com/search.json?q=${query}`;
        const response = await fetch(url);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const posts = await response.json();
        console.log(posts);
        return posts;
      }

    async changeCategory(categoryName){
        let url = `https://www.reddit.com/r/${categoryName}.json`;
        const response = await fetch(url);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const posts = await response.json();
        console.log(posts);
        return posts; 
    }
}

export default RedditApi;