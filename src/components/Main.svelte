<script>
    // @ts-nocheck
    import Footer from "./Footer.svelte";
    export let ipData = {};
</script>

{#if ipData.status === "success"}
<div class="container mx-auto p-4 text-center w-80 md:w-[60rem] lg:w-[60rem] h-24 bg-slate-50 rounded-2xl relative -top-12">
    <ul class="grid grid-cols-3 gap-4 text-sm md:text-xl lg:text-2xl mt-3.5 opacity-50">
        <li class="font-medium"><i class="fa-solid fa-globe"></i> Country: {ipData.country}</li>
        <li class="font-medium"><i class="fa-solid fa-city"></i> City: {ipData.city}</li>
        <li class="font-medium"><i class="fa-solid fa-location-dot"></i> Region: {ipData.region}</li>
    </ul>
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe class="mt-20 rounded-2xl w-80 md:w-[740px] lg:md:w-[927px] h-[450px] -ml-3.5 md:ml-0 lg:ml-0" src="https://www.openstreetmap.org/export/embed.html?bbox={ipData.lon}%2C{ipData.lat}%2C{ipData.lon}%2C{ipData.lat}&amp;"></iframe>
</div>
{/if}

<Footer />