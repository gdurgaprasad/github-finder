class GitHub {
  constructor() {
    this.client_id = "75c61855d21b1a7eda8f";
    this.client_secret = "d3f21aaa837bc85a3cf3994826f3a3d8a652f28e,";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUserDetail(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}

export default GitHub;
