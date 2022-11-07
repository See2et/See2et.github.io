/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { CMS_API_KEY } from '$env/static/private'
export const prerender = true;

export function load({ params, fetch }){  // fetch 追加
    const { postid } =params
    return fetch( `https://606kpqbt4t.microcms.io/api/v1/contents/${postid}`, {
        headers: { 'X-MICROCMS-API-KEY': CMS_API_KEY }
    })
    .then( x=>{
        if( !x.ok ) throw Error()
        return x.json()
    })
    .catch( x=>{
        return { error: true }
    })
}