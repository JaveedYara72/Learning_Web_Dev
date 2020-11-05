class Github {
    constructor() {
        this.client_id = '15b0709fcea574dda4bb';
        this.client_secret = '21a904f9ea78bc51054d4c7ddc7d09e315c4f505';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profiledata = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret = ${this.client_secret}`);

        const reposdata = await fetch(`https://api.github.com/users/${user}?per_page=${this.repos_sort}client_id=${this.client_id}&client_secret = ${this.client_secret}`);

        const profile = await profiledata.json();
        const repos = await reposdata.json();

        return {
            profile,
            repos
        }
    }
}