class GitHub {
  constructor() {
    this.clientId = "1de42167d6c9b2e5c1d8";
    this.clientServer = "b27d8f02130002d1193deab3972ee08750cd85ab";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUserDetail(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?clientId=${
        this.clientId
      }&clientServer=${this.clientServer}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${
        this.repos_sort
      }&clientId=${this.clientId}&clientServer=${this.clientServer}`
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
