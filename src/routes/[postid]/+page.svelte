<script lang="ts">
    interface Data {
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
    export let data: Data | { error: true };
</script>

{#if "error" in data}
    <p>データの取得に失敗しました</p>
{:else}
    <h1>{data.title}</h1>
    <hr>
    <section>{@html data.body}</section>
{/if}