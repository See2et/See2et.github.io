<script lang="ts">
    import dayjs from "dayjs";
    import { base } from '$app/paths';
    interface Content {
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        RevisedAt: string;
        title: string;
        desc: string;
        body: string;
        ecimg: {
            url: string;
            height: number;
            width: number;
        }
    }
    interface Data {
        contents: Content[];
        totalCount: number;
        offset: number;
        limit: number;
    }
    export let data: Data | { error: true };
</script>

{#if "error" in data}
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