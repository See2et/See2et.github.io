<script>
    /**
	 * @type {{ error: any; title: any; body: any; }}
	 */
     export let data
</script>


{#if data?.error}
    <p>データの取得に失敗しました</p>
{:else}
    <h1>{data.title}</h1>
    <hr>
    <section>{@html data.body}</section>
{/if}