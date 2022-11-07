// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { CMS_API_KEY } from '$env/static/private'
export const prerender = true;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function load({ fetch }){
    return fetch( 'https://606kpqbt4t.microcms.io/api/v1/contents',{
        headers: { 'X-MICROCMS-API-KEY': CMS_API_KEY }
    }).then( (/** @type {{ ok: any; json: () => any; }} */ x)=>{
        if( !x.ok ) throw Error()
        // 通信は成功、取得はエラー(キーの不整合など) の場合
        // ここで throw して下の catch で処理

        return x.json()  // 正常なら JSON をリターン
    })
    .catch( (/** @type {any} */ x)=>{
        return { error: true }
        // 通信エラー・取得エラーはまとめてココ
        // +page.svelte でハンドリングする
    })}