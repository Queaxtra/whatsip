<script>
    import fetchIP from "$lib/fetchIP";
    import { onMount } from "svelte";
    import Main from "./Main.svelte";

    let ip = "";
    let ipData = {};

    if (!ip) {
        onMount(() => {
            getIP();
        });
    }
    
    async function getIP() {
        fetchIP(ip).then((data) => {
            ipData = data;
        });
    }
</script>

<header>
    <section class="relative w-full h-80 bg-cover text-white" style="background-image: url('https://i.hizliresim.com/kt8o45c.png');">
        <div class="container mx-auto p-4 text-center">
            <h1 class="font-semibold text-4xl md:text-5xl lg:text-5xl mt-20 md:mt-10 lg:mt-10">WhatsIP</h1>
            <div>
                <input bind:value={ip} placeholder="Enter a IP" type="text" class="p-3 px-5 md:w-96 lg:w-96 rounded-2xl text-black mt-7">
                {#if !ip}
                <button disabled><i class="fa-solid fa-angle-right bg-black/10 p-4 px-5 rounded-2xl"></i></button>
                {:else}
                <button on:click={getIP}><i class="fa-solid fa-angle-right bg-black p-4 px-5 rounded-2xl"></i></button>
                {/if}
                <p class="mt-3 opacity-60 text-xs">No IP address is kept on the website.</p>
            </div>
        </div>
    </section>
</header>

<Main {ipData} />
