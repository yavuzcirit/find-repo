export const searchRepos = async (searchVal: string,query: string)=> {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${searchVal}+language:${query}`
      );
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error("Error fetching GitHub repos:", error);
    }
  };