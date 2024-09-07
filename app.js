const projects = [
  {name: "Minishell", git_url:"https://www.google.com", image: "", description: "Interact with your computer, send commands the same way a traditionnal shell would. Made using C."},
  {name: "FT_IRC", git_url:"https://www.google.com", image: "", description: "Following standard IRC protocols, join server, chat with your friends or with strangers. Made using C++."},
  {name: "Cube3D", git_url:"https://www.google.com", image: "", description: "Travel and explore in this raycasting game. Made using C and the Minilibx graphic library (similar to OpenGL)."},
  {name: "Quizz Game", git_url:"https://www.google.com", image: "", description: "Test your general knowldege with this quizz app! Made using React, HTML, CSS and javascript."},
  {name: "Movie Watchlist", git_url:"https://www.google.com", image: "", description: "Search for your favorite movie and save it in the watchlist. Made using HTML, CSS and javascript."},
];

const project_box = document.getElementById("project_container");
const project = document.getElementsByClassName("project");
const git_link = document.getElementsByClassName("git_link");

for (let i = 0; i < projects.length; i++)  {
  let project_html = `
    <div class="project">
      <h2>${projects[i].name}</h2>
      <img src="img/profile_pic.jpg" alt="Project Image" width=150 heigth=150>
      <p class="project_description">${projects[i].description}</p>
      <a href=${projects[i].git_url} target="_blank" class="git_link">Github Page</a>
    </div>
`;
  project_box.innerHTML += project_html;
}

