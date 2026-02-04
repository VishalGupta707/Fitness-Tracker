export const authConfig = {
  clientId: 'jqJuEFhTJfxyDV1nUzPT9OiwG7NTlp1x',
  authorizationEndpoint: 'https://dev-kx4rqp8nlmvfojzq.us.auth0.com/authorize',
  tokenEndpoint: 'https://dev-kx4rqp8nlmvfojzq.us.auth0.com/oauth/token',
  redirectUri: window.location.origin,
  scope: 'openid profile email offline_access',
  extraAuthParams: {
    audience: 'https://fitness-tracker.com'
  },
  onRefreshTokenExpire: (event) => event.logIn(),
}