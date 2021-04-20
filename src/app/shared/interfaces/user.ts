/**
 * Login Parameter
 *
 * @export
 * @interface LoginParams
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * oAuth2 Parameter
 *
 * @export
 * @interface OAuth2Params
 */
export interface OAuth2Params extends LoginParams {
  grant_type: string;
  client_id: string;
  scope: string;
  hrschema: string;
  hrifschema: string;
  hrtimezone: string;
}

/**
 * JWT 정보
 *
 * @export
 * @interface OAuth2JWT
 */
export interface OAuth2JWT {
  access_token: string;
  authorities: string[];
  expires_in: number;
  jti: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  hrschema?: string;
  hrtimezone?: string;
  userInfo?: UserInfo;
}

/**
 * User Info
 *
 * @export
 * @interface UserInfo
 */
export interface UserInfo {
  compid: string;
  compnm: string;
  deptid: string;
  deptnm: string;
  email: string;
  loginid: string;
  posnm: string;
  sgrp: string;
  userid: string;
  usernm: string;
}

/**
 * LocalStorage에 저장된 Token 정보
 *
 * @export
 * @interface StorageToken
 */
export interface StorageToken {
  access_token: string;
  refresh_token: string;
}

/**
 * Access Token 정보
 *
 * @export
 * @interface AccessTokenInfo
 */
export interface AccessTokenInfo {
  authorities: string[];
  client_id: string;
  exp: number;
  jti: string;
  scope: string[];
  hrschema?: string;
  hrtimezone?: string;
  userInfo?: UserInfo;
  user_name?: string;
}

/**
 * Refresh Token 정보
 *
 * @export
 * @interface RefreshTokenInfo
 * @extends {AccessTokenInfo}
 */
export interface RefreshTokenInfo extends AccessTokenInfo {
  ati: string;
}
