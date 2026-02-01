export const authConfig = {
  clientId: 'XcE2I2b7QoUyXuU12XxI2QtAtLOOCFKD',
  authorizationEndpoint: 'https://dev-qkhn82xqsr4lxwh5.us.auth0.com/authorize',
  tokenEndpoint: 'https://dev-qkhn82xqsr4lxwh5.us.auth0.com/oauth/token',
  redirectUri: window.location.origin,
  scope: 'openid profile email offline_access',
  extraAuthParams: {
    audience: 'https://fitness-tracker.com'
  },
  onRefreshTokenExpire: (event) => event.logIn(),
}