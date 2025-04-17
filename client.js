// Import Axios, a promise-based HTTP client that allows us to make requests to external servers or APIs
// ⬇️ Code here
const axios = require("axios");

// Create a data object representing the title and content of the new post
// This object will be sent to the server in the POST request body
// ⬇️ Code here
const data = {
  title: "New Post Title",
  content: "New Post Content",
};

// Make a POST request to the server at 'http://localhost:3000/posts'
// This sends the 'data' object as the body of the request to create a new post
// ⬇️ Code here
axios
  .post("http://localhost:3000/posts", data)
  .then((response) => {
    console.log("Post created successfully:", response.data);
  })
  .catch((error) => {
    console.error("Error creating post:", error);
  });
