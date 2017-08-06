<template>
    <div class="window">
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                <!-- Sidebar user panel -->
                <div class="user-panel">
                    <div class="pull-left image">
                        <img src="~@/assets/images/default-50x50.gif" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                        <p>A majer</p>
                        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                <div class="window-content">
                    <div class="pane-group">
                        <div class="pane-sm sidebar">
                            <nav class="nav-group">
                                <div v-show="!currentComponent" v-for="component in componentsArray">
                                    <button @click="swapComponent(component)">{{component}}</button>
                                </div>
                                <button class="nav-group-item" @click="$parent.$options.methods.swapComponent('clock')" ><span class="icon icon-note-beamed"></span> clock</button>
                                <router-link class="nav-group-item" to="/"><span class="icon icon-note-beamed"></span> Main</router-link>
                                <router-link class="nav-group-item" to="/clock"><span class="icon icon-home"></span> clock</router-link>
                                <router-link class="nav-group-item" to="/contacts"><span class="icon icon-users"></span> Contacts</router-link>
                                <router-link class="nav-group-item" to="/music"><span class="icon icon-note-beamed"></span> Play</router-link>
                            </nav>
                        </div>
                    </div>
                </div>


            </section>
            <!-- /.sidebar -->
        </aside>

    </div>
</template>

<script>
  export default {
    name: 'side-bar-page',
    data() {
      return {
        menus: this.$parent.$data.menus || [],
      };
    },
    ready() {
    },
    methods: {

      swapComponent2: function(component)
      {
        if (component==='clock'){
          this.$parent.$options.methods.swapComponent('clock');
        }
      }

    },
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