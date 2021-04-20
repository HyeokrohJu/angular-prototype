import * as _ from 'lodash';

/**
 * Common Utils
 *
 * @export
 * @class CommonUtils
 */
export class CommonUtils {
  /**
   * Object -> QueryString으로 변경
   *
   * @static
   * @param {*} params
   * @return {*}  {string}
   * @memberof CommonUtils
   */
  public static objToQStr(params: any): string {
    const nwParams: URLSearchParams = new URLSearchParams();
    _.forEach(params, (val, key) => {
      nwParams.set(key, val);
    });
    return nwParams.toString();
  }
}
