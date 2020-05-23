class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // CREATE PROFILE UI
  showProfile(user) {
    this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                  <div class="col-md-3">
                    <img class="img-fluid mb-2" src= "${user.avatar_url}"/>
                      <a class="btn btn-primary btn-block" href=${
                        user.html_url
                      } target="_blank">View Profile</a>
                  </div>

                  <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos : ${
                      user.public_repos
                    }
                    </span>
                    <span class="badge badge-secondary">Public Gists : ${
                      user.gists ? user.gists : "-"
                    }
                    </span>
                    <span class="badge badge-success">Followers : ${
                      user.public_followers ? user.public_followers : "-"
                    }
                    </span>
                    <span class="badge badge-info">Following : ${
                      user.public_following ? public_following : "-"
                    }
                    </span>
                    <br><br>

                    <ul class="list-group">
                    <li class="list-group-item">Company: ${
                      user.company ? user.company : "-"
                    }
                    </li>
                    <li class="list-group-item">Website/Blog: ${
                      user.website ? user.website : "-"
                    }</li>
                    <li class="list-group-item">Location: ${
                      user.location ? user.location : "-"
                    }
                    </li>
                    <li class="list-group-item">Member Since: ${
                      user.created_at
                    }</li>
                    </ul>

                  </div>
                </div>
               </div>
            <h3 class="page-heading-mb-3">Latest Repos</h3>
          <div id="repos"></div>`;
  }

  //SHOW REPOS UI

  showRepos(repos) {
    let output = "";

    repos.forEach(repo => {
      output += `
    <div class="card card-body mb-2">
    <div class="row">
        <div class="col-md-6">
        <a href="${repo.html_url}" target ="_blank">${repo.name}</a>
        </div>

        <div class="col-md-6">
          <span class="badge badge-primary">Stars : ${
            repo.stargazers_count
          }</span>
          <span class="badge badge-secondary">Stars : ${
            repo.watchers_count
          }</span>
          <span class="badge badge-success">Forks : ${
            repo.forms_count ? repo.forms_count : "-"
          }</span>
        </div>
        
      </div>
     </div>`;
    });
    document.getElementById("repos").innerHTML = output;
  } 

  // SHOW ALERT ON USER NOT FOUND
  showAlert(message, type) {
    // CLEAR IF ANY PREVIUOS ALERTS EXISTS
    this.clearAlert();

    // CREATE ALERT UI
    const div = document.createElement("div");
    div.classList.add("alert", type);
    const alertText = document.createTextNode(message);
    div.appendChild(alertText);

    // INSERT ALERT
    const searchContainer = document.querySelector(".searchContainer");
    const searchCard = document.querySelector(".search");
    searchContainer.insertBefore(div, searchCard);

    // CLAER ALERT AFTER 3 SECONDS
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // CLEAR ALERT
  clearAlert() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }

  // CLEAR PROFILE UI ON NO INPUT
  clearProfile() {
    this.profile.innerHTML = ``;
  }
}

export default UI;
