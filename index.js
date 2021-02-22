import GitHub from "./github";
import UI from "./ui";

const github = new GitHub();
const ui = new UI();

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText !== "") {
    //FETCH GITHUB USER
    github.getUserDetail(userText).then(user => {
      if (user.profile.message === "Not Found") {
        //SHOW ALERT
        ui.showAlert("User not found",'alert-danger');
      } else {
        // SHOW PROFILE
        ui.showProfile(user.profile);
        ui.showRepos(user.repos);
      }
    });
  } else {
    // CLEAR PROFILE
    ui.clearProfile();
  }
});
