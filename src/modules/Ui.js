export class Ui {
    constructor() {
      this.profile = document.querySelector('.profile-area');
      this.repos = document.querySelector('.repo-area')
    }
    showProfile(profileData){
            this.profile.innerHTML = `<div class="profile-grid">
          <div class="profile-avatar"><img src="${profileData.avatar_url}" alt="profile-avatar"></div>
          <ul class="profile-info-count">
            <li>public repos: ${profileData.public_repos}</li>
            <li>public gist: ${profileData.public_gists}</li>
            <li>following: ${profileData.following}</li>
            <li>followers: ${profileData.followers}</li>
          </ul>  
          <ul class="profile-location">
            <li>company: ${profileData.company}</li>
            <li>website/blog: ${profileData.blog}</li>
            <li>location: ${profileData.location}</li>
            <li>member since: ${profileData.created_at}</li>
          </ul>
        </div>

        <a class="profile-view-btn" role="button" href="${profileData.html_url}" target="_blank">View Profile</a>
            `
    }
    showRepo(repoData){
      let output = '<h2 class="repo-area-header">Latest Repos</h2>';
        repoData.forEach(repo => {
          output += `
        <div class="repo-info-container">
          <div class="repo-name"><a href="${repo.html_url}" target="_blank">${repo.name}</a></div>
          <ul class="repo-engagement">
            <li>stars: ${repo.stargazers_count}</li>
            <li>watchers:  ${repo.watchers_count}</li>
            <li>forks:  ${repo.forks_count}</li>
          </ul>
        </div>
          
          `
        });
        this.repos.innerHTML= output;
    }
    showAlert(){
        const Error = document.querySelector('.alert');
            Error.classList.add('alert-active')
            this.clearAlert()
    }
    clearAlert(){
        const Error = document.querySelector('.alert');
        setTimeout(()=>{
          if (Error.classList.contains('alert-active')) {
            Error.classList.remove('alert-active')
        }
        }, 3000)
    }
    clear(){
      this.profile.innerHTML = '';
      this.repos.innerHTML = '';
    }
}