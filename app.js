const projects = [
  {name: "Minishell", git_url:"https://github.com/ShroomySquid/Minishell", image: "img/minishell.png", description: "Interact with your computer, send commands the same way a traditionnal shell would. Made using C."},
  {name: "FT_IRC", git_url:"https://github.com/ShroomySquid/IRC", image: "img/irc.png", description: "Following standard IRC protocols, join server, chat with your friends or with strangers. Made using C++."},
  {name: "Cube3D", git_url:"https://github.com/ShroomySquid/Cub3D", image: "img/cube3d.png", description: "Travel and explore in this raycasting game. Made using C and the Minilibx graphic library (similar to OpenGL)."},
  {name: "Quizz Game", git_url:"https://github.com/ShroomySquid/QuizzGame", image: "img/quizz.png", description: "Test your general knowldege with this quizz app! Made using React, HTML, CSS and javascript."},
  {name: "Movie Watchlist", git_url:"https://github.com/ShroomySquid/Movie-Watchlist", image: "img/watchlist.png", description: "Search for your favorite movie and save it in the watchlist. Made using HTML, CSS and javascript."},
];

const project_box = document.getElementById("project_container");
const project = document.getElementsByClassName("project");
const git_link = document.getElementsByClassName("git_link");

for (let i = 0; i < projects.length; i++)  {
  let project_html = `
    <div class="project">
      <h2 class="project_name">${projects[i].name}</h2>
      <img src=${projects[i].image} alt="Project Image" class="project_image" width=150 heigth=150>
      <p class="project_description">${projects[i].description}</p>
      <a href=${projects[i].git_url} target="_blank" class="git_link">Github Page</a>
    </div>
`;
  project_box.innerHTML += project_html;
}

