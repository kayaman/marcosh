<script lang="ts">
    import * as config from '$lib/config'
    export let index = Math.floor(Math.random() * config.taglines.length)
</script>

<p>
    {config.taglines[index]}
</p>

