<script>
// @ts-nocheck

    // @ts-ignore
    import dayjs from "dayjs"
    // 日付表示でラクしたいので。`npm i dayjs` でインストールし、ここでインポート

    /**
	 * @type {{ contents: any; }}
	 */
     export let data
     import { base } from '$app/paths';
</script>

{#if data?.error}
    <p>記事の取得に失敗しました</p>
{:else}
    {#each data.contents as x}
        <h2 data-sveltekit-prefetch><a href="{base}/{x.id}">{x.title}</a></h2>
        <p>公開: {dayjs(x.publishedAt).format('YYYY.MM.DD')}</p>
        <img src="{x.ecimg.url}" alt="アイキャッチ画像" width=30%>
        <p>{@html x.desc.replaceAll('\n','<br>')}</p>
        <hr>
    {:else}
        <p>記事がありません</p>
    {/each}
{/if}