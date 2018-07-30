/**
 * Created by mackxu on 2017/6/25.
 */
import md5 from 'crypto-js/md5';

export default string => (md5(string).toString());
