const url = "https://api.github.com/users/Dheal";
let body = document.getElementById("git")[0];


const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(response)
  console.log(data.login)
  console.log(data.avatar_url)
  let user = `
  
  <div class="wrap">
        <h1 align="center">My Profil <span>Github</span></h1>
        <h4 align="center" style="margin-top:5px;">WEB <span>PROGRAMMER</span></h4>
        <table>
            <tr>
                <td rowspan="8" width="100px"> <img src="${data.avatar_url}" width="200px" style="display: block;border-radius: 5%;border-color:white;margin-right:30px" border="2px" ></td>
            </tr>
            <tr>
                <td><b>Full Name</b></td>
                <td>:</td> <td>${data.name}</td>
            </tr>
            <tr>
                <td><b>ID</b></td><td>:</td> <td>${data.id}</td>
            </tr>
            <tr>
                <td><b>Public Repos</b></td><td>:</td><td>${data.public_repos}</td>
            </tr>
            <tr>
                <td><b>Created</b></td><td>:</td> <td>${data.created_at}</td>
            </tr>
            <tr>
                <td><b>Updated</b></td><td>:</td> <td>${data.updated_at}</td>
            </tr>
            <tr>
                <td><b>Location</b></td><td>:</td> <td>${data.location}</td>
            </tr>
        </table>
    </div>
    <div class="wrap" align="center">
        <h2 align="center">GET <span>IN TOUCH</span></h2>
        <a class="icon" href="${data.url}" target="_blank"><img src="api.png" alt="" width="40px"></a>
        <a class="icon" href="${data.html_url}" target="_blank"><img src="github.svg" alt="" width="40px"></a>
    </div>
    <footer>
    <p align="center"><b><i>
        Copyright © <a href="#">Dheal Ephin Lufiga</a> 2020</i></b>
    </p>
</footer>
  `

  git.innerHTML = user

}


getData();