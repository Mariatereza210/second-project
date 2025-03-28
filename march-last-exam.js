document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('load-posts').addEventListener('click', async function() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const posts = await response.json();
        
        const postsContainer = document.getElementById('posts-container');
        postsContainer.innerHTML = ''; 
        
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            postsContainer.appendChild(postElement);
        });
    });
});
