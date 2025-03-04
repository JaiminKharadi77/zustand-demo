import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPosts = (url, limit = 10) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${url}?_page=${page}&_limit=${limit}`);
      if (response.data.length === 0) {
        setHasMore(false); // No more posts available
      } else {
        setPosts((prevPosts) => [...prevPosts, ...response.data]); // Append new posts
        setPage((prevPage) => prevPage + 1); // Increment page count
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []); // Fetch initial posts on mount

  return { posts, hasMore, fetchPosts };
};

export default useFetchPosts;
