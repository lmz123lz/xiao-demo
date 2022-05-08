import {fetch} from './http';
import * as url from './url';
export function shuju(params) {return fetch(url[params['type']], url[params['data']])}
export function shuju2(params) {return fetch(url[params['type']], url[params['xx']])}