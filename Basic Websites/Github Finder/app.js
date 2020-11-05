const github = new Github;
const ui = new UI;

//Search Input
const SearchUser = document.getElementById('searchUser');

//Search input event Listener
SearchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert("User was Not Found", "alert alert-danger");
                } else {
                    //Show Profile
                    ui.showProfile(data.profile);
                    ui.showProfile(data.repos);
                }
            })
    } else {
        ui.clearProfile();
    }
});