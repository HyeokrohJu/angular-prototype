/**
 * APP 설정
 *
 * @export
 * @interface AppConfig
 */
export interface AppConfig {
  apiConfig: ApiConfig;
  oAuth2Config: OAuth2Config;
}

/**
 * APP API 설정
 *
 * @export
 * @interface ApiConfig
 */
export interface ApiConfig {
  apiHost: string;
  apiPath: string;
  apiPort: number;
  apiSsl: boolean;
  apiSslPort: number;
}

/**
 * oAuth2 설정
 *
 * @export
 * @interface OAuth2Config
 */
export interface OAuth2Config {
  protocol: string;
  domain: string;
  port: number;
  clientId: string;
  client_secret: string;
  scope: string;
  grantType: string;
  path: string;
  refreshGrantType: string;
  hrSchema: string;
  hrIfSchema: string;
  hrTimeZone: string;
}
