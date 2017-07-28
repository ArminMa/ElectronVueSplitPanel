<template>
    <div class="window">
        <div class="window-content">
            <div class="pane-group">
                <div class="pane-sm sidebar">
                    <nav class="nav-group">
                        <router-link class="nav-group-item" to="/"><span class="icon icon-note-beamed"></span> Main</router-link>
                        <router-link class="nav-group-item" to="/clock"><span class="icon icon-home"></span> clock</router-link>
                        <router-link class="nav-group-item" to="/contacts"><span class="icon icon-users"></span> Contacts</router-link>
                        <router-link class="nav-group-item" to="/music"><span class="icon icon-note-beamed"></span> Play</router-link>
                    </nav>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'side-bar-page'
  };
</script>

<style>
    div > nav > router-link { flex-basis: 50%; }


    a {
        text-decoration: none;
        color: #4285f4;
    }
    .nav-group-item .icon {
        color: wheat;
        display: flex;
        flex-direction: row;
    }
    .nav-group-item:active, .nav-group-item.active {
        background-color: #4285f4;
    }
    .sidebar a {
        color: wheat;
    }
    .sidebar {
        background: #334;
        width: 100%;
    }
    .container {
        background-color: #fff;
    }

</style>