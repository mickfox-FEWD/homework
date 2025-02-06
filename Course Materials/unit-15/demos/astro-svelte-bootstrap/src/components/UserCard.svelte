
<div class="col-lg-3 col-md-6 mb-3 d-flex align-items-stretch">
    {#if user}
        <div class="card">
            <img src={user.picture.large} class="card-img-top" alt="User"/>
            <div class="card-body">
                <h5 class="card-title">
                    {user.name.first}
                    {user.name.last}
                </h5>
                <p class="card-text">{user.email}</p>
                <p class="card-text">
                    {user.location.street.number}
                    {user.location.street.name}
                </p>
                <p class="card-text">
                    {user.location.city}, {user.location.country}
                </p>
            </div>
        </div>
    {:else}
        <p>Loading...</p>
    {/if}
</div>

<script>
    import { onMount } from 'svelte';

    let user = null;

    onMount(async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            user = data.results[0];
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    });
</script>
