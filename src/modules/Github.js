export class Github {
    constructor() {
        this.client_id = 'Ov23likzA9bDRBjxUTPf';
        this.client_secret = '007fd9e39143f16fcb0cc9d78a4a1f24a0574555';
        this.repos_count = 5;
        this.sort = 'created: asc';
    }
    async get(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();
        return{
            profile: profileData,
            repository: repoData
        }
    }
}
    // const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
