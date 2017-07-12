<template xmlns:v-on="">

    <div class="container" :style="containerStyle">
        <split-panel ref="splitPanel" orientation="vertical" :show-border="true" :init-position="180">
            <split-panel lass="user-schemas__panel" orientation="horizontal" :show-border="true" :init-position="400" slot="panel1">
                <div class="panel" slot="panel1">
                    <entry></entry>
                </div>
                <div class="user-schemas__panel" slot="panel2">
                    <div class="user-schemas__container">
                        <div class="user-schemas__toolbox-container">
                            <drag></drag>
                        </div>
                        <div class="user-schemas__buttons-container">
                            <button class="md-dense user-schemas__button">Save Schema</button>
                            <button class="md-dense user-schemas__button">Load Schema</button>
                            <button class="md-dense user-schemas__button">Delete Schema</button>
                            <button class="md-dense user-schemas__button">Import Schema</button>
                        </div>
                    </div>
                </div>
            </split-panel>
            <split-panel orientation="vertical" :show-border="true" :init-position="380" slot="panel2">
                <div class="panel" slot="panel1">
                    <entry></entry>
                </div>
                <split-panel orientation="vertical" :show-border="true" :init-position="440" slot="panel2">
                    <div class="panel" slot="panel1">
                        <entry></entry>
                    </div>
                    <div class="json-schema-content__panel" slot="panel2">
                        <div class="json-schema-content__container">
                            <div class="json-schema-content__textarea-container">
                                <div id="wrapper">
                                    <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
                                    <main>
                                        <div class="left-side">
                                            <span class="title">
                                                <drag></drag>
                                            </span>
                                            <system-information></system-information>
                                        </div>

                                        <div class="right-side">
                                            <div class="doc">
                                                <div class="title">Getting Started</div>
                                                <p>
                                                    electron-vue comes packed with detailed documentation that covers everything from
                                                    internal configurations, using the project structure, building your application,
                                                    and so much more. more more more
                                                </p>
                                                <button @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">Read the Docs</button><br><br>
                                            </div>
                                            <div class="doc">
                                                <div class="title alt">Other Documentation</div>
                                                <button class="alt" @click="open('https://electron.atom.io/docs/')">Electron</button>
                                                <button class="alt" @click="open('https://vuejs.org/v2/guide/')">Vue.js</button>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </div>
                            <div class="json-schema-content__buttons-container">
                                <div class="json-schema-content__button-bar">
                                    <button class="md-dense json-schema-content__button">New Schema</button>
                                    <button class="md-dense json-schema-content__button">Undo</button>
                                    <button class="md-dense json-schema-content__button">Redo</button>
                                </div>
                                <div class="json-schema-content__button-bar">
                                    <button class="md-dense json-schema-content__button">Copy to Clipboard</button>
                                    <button class="md-dense json-schema-content__button">Download to File</button>
                                    <a ref="downloadLink" style="display: none;"></a>
                                    <button class="md-dense json-schema-content__button">Load from File</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </split-panel>
            </split-panel>
        </split-panel>

    </div>


</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import Entry from './Entry'
  import Drag from './drag.vue'
  import SplitPanel from './Drag/SplitPanel.vue'

  export default {
    name: 'landing-page',
    created () {
      this.setContainerHeight()
      // register window resize event handler
      window.addEventListener('resize', () => {
        // only process resize event each 0.066 sec (about 15 fts)
        if (!this.timeout) {
          this.timeout = window.setTimeout(() => {
            this.timeout = null
            this.setContainerHeight()
          }, 66)
        }
      })
      // setup after 1 sec
      window.setTimeout(this.setup, 1000)
    },
    mounted () {
      // adjust split panel size
      this.$refs.splitPanel.sizeChanged(this)
    },
    data () {
      return {
        signIn: true,
        repository: null,
        containerHeight: 50,
        userSchemaSelected: false,
        // data for dialogs
        // data for undo/redo
        treeDataBackups: [],
        currentVersionNo: 0,
        // data for upload files
        uploadFilename: null,
        multipleUpload: false,
        uploadFiles: null
      }
    },
    computed: {
      containerStyle () {
        return { 'height': `${this.containerHeight}%` }
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      setContainerHeight () {
        this.containerHeight = window.innerHeight - 2
      },
      // method for drag over in tree
      dragOverRule (dest, source) {
        if (typeof dest.funcs.accept === 'function') return dest.funcs.accept(dest, source)
      }
    },
    components: { SystemInformation, Entry, Drag, SplitPanel }
  }
</script>

<style scoped="">
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: -1px;
    }

    body { font-family: 'Source Sans Pro', sans-serif; }

    #wrapper {
        background:
                radial-gradient(
                        ellipse at top left,
                        rgba(255, 255, 255, 1) 40%,
                        rgba(229, 229, 229, .9) 100%
                );
        height: 95%;
        padding: 10px 20px;
        width: 100%;
        padding-bottom: -1%;
    }

    #logo {
        height: auto;
        margin-bottom: 20px;
        width: 200px;
    }

    main {
        display: flex;
        justify-content: space-between;
    }

    main > div { flex-basis: 50%; }

    .left-side {
        display: flex;
        flex-direction: column;
    }

    .welcome {
        color: #555;
        font-size: 23px;
        margin-bottom: 10px;
    }

    .title {
        color: #2c3e50;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 6px;
    }

    .title.alt {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .doc p {
        color: black;
        margin-bottom: 10px;
    }

    .doc button {
        font-size: .8em;
        cursor: pointer;
        outline: none;
        padding: 0.75em 2em;
        border-radius: 2em;
        display: inline-block;
        color: #fff;
        background-color: #4fc08d;
        transition: all 0.15s ease;
        box-sizing: border-box;
        border: 1px solid #4fc08d;
    }

    .doc button.alt {
        color: #42b983;
        background-color: transparent;
    }

    .container {
        /*height: 600px;*/
        border: solid 1px black;
        font-size: 12px;
        height: 90%;
    }

    .panel {
        padding: 10px;
        height: 90%;
        overflow: auto;
    }

    .user-schemas__panel {
        margin: 0px;
        padding: -10px;
        height: 45%;
        max-height: 45%;
    }

    .user-schemas__container {
        margin: 0;
        padding: 0px;
        height: 45%;
        display: flex;
        flex-direction: column;
    }

    .user-schemas__toolbox-container {
        padding: 10px;
        height: 90%;
        overflow: auto;
        flex-grow: 1;
    }

    .user-schemas__buttons-container {
        border-top: solid 1px black;
        padding: 0px;
        display: flex;
        flex-direction: column;
    }

    .user-schemas__button {
        width: 100%;
        font-size: 12px;
        height: 25px;
        min-height: 20px;
        margin: -2px;
    }

    .json-schema-content__panel {
        margin: 0;
        padding: 0px;
        height: 100%;
    }

    .json-schema-content__container {
        margin: 0;
        padding: 0px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .json-schema-content__textarea-container {
        margin: 0;
        padding: 0px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .json-schema-content__textarea {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: block;/*reset from inline*/
        width: 100%;
        margin: 0;/*remove defaults*/
        padding: 4px;
        border: none;
        overflow-y: auto;/*resets IE*/
        overflow-x: hidden;/*resets IE*/
        height: 100%;
        flex-grow: 1;
        resize: none;
        font-size: 12px;
        font-family: Arial;
    }

    .json-schema-content__buttons-container {
        border-top: solid 1px black;
    }

    .json-schema-content__button-bar {
        display: inline-flex;
    }

    .json-schema-content__button {
        font-size: 12px;
        height: 28px;
        min-height: 28px;
        margin: 4px;
    }
    .context-menu {
        font-size: 12px;
    }

</style>
