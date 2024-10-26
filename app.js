const projects = [
  {name: "Minishell", git_url:"https://github.com/ShroomySquid/Minishell", image: "img/minishell.png", description: "Interact with your computer, send commands the same way a traditionnal shell would. Made using C."},
  {name: "FT_IRC", git_url:"https://github.com/ShroomySquid/IRC", image: "img/irc.png", description: "Following standard IRC protocols, join server, chat with your friends or with strangers. Made using C++."},
  {name: "Cube3D", git_url:"https://github.com/ShroomySquid/Cub3D", image: "img/cube3d.png", description: "Travel and explore in this raycasting game. Made using C and the Minilibx graphic library (similar to OpenGL)."},
  {name: "Quizz Game", git_url:"https://github.com/ShroomySquid/QuizzGame", image: "img/quizz.png", description: "Test your general knowldege with this quizz app! Made using React, HTML5, CSS and javascript."},
  {name: "Movie Watchlist", git_url:"https://github.com/ShroomySquid/Movie-Watchlist", image: "img/watchlist.png", description: "Search for your favorite movie and save it in the watchlist. Made using HTML5, CSS and javascript."},
  {name: "Summon Me", git_url:"https://github.com/ShroomySquid/Ludum_Dare", image: "img/summon_me.png", description: "Management game made during the Ludum Dare 55 game jam. Made with Godot and GDscript"},
  {name: "Transcendance", git_url:"https://github.com/lcouturi/ft_transcendence", image: "img/trans.PNG", description: "Website with a game of pong. Build from scratch including dockers, nginx, django and postgres, 3Djs, HTML5, CSS, javascript"},
  {name: "Push-Swap", git_url:"https://github.com/ShroomySquid/push_swap", image: "img/push_swap.jpg", description: "Program that sort given numbers in ascending order. Made in C using a bucket sort algorithm."},
  {name: "Philosopher", git_url:"https://github.com/ShroomySquid/Philosophers", image: "img/philosopher.png", description: "Program that solve the classic dining philosopher problem. Made in C."},
];

// template for individual project
// {name: "", git_url:"", image: "", description: ""},

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

