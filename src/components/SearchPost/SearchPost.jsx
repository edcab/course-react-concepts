import React, { useEffect, useState } from "react";


function SearchPost() {

  const [query, setQuery] = useState("");
  const [post, setPost] = useState([]);


  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?title_like=${query}`
      );
      const post = await response.json();
      setPost(post);
    };

    fetchPost();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search Post"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {post && (
          <div>
            {post.map((post) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}



export default SearchPost;