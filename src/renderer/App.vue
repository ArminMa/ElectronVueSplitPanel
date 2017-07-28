<template>
  <div id="app">
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
          <div class="pane container" style="padding: 10px;">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <footer class="toolbar toolbar-footer">
        <h1 class="title">Modified by <a href="http://www.sohelamin.com" target="_blank">Armin Majerie</a></h1>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'electron-vue-start2'
  };
</script>

<style>
  /* CSS */

  /*body {*/
  /*margin-left: 1px;*/
  /*margin-right: 1px;*/
  /*margin-top: 1px;*/
  /*margin-bottom: 1px;*/
  /*font-family: 'Source Sans Pro', sans-serif;*/
  /*}*/

  /** {*/
  /*box-sizing: border-box;*/

  /*margin: -50px;*/
  /*margin-left: 1px;*/
  /*margin-right: 1px;*/
  /*margin-top: 1px;*/
  /*margin-bottom: 1px;*/

  /*padding: -50px;*/
  /*padding-left: 1px;*/
  /*padding-right: 1px;*/
  /*padding-top: 1px;*/
  /*padding-bottom: 1px;*/

  /*}*/

  a {
    text-decoration: none;
    color: #4285f4;
  }
  .nav-group-item .icon {
    color: wheat;
  }
  .nav-group-item:active, .nav-group-item.active {
    background-color: #4285f4;
  }
  .sidebar a {
    color: wheat;
  }
  .sidebar {
    background: #334;
    width: 30%;
  }
  .container {
    background-color: #fff;
  }
</style>
