class GitHub {
  constructor() {
    this.clientId = "d9308aacf8b204d361fd";
    this.clientServer = "84969aeef73956f4ec9e8716d1840532802bb81b,";
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
