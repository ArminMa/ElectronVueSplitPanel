<template xmlns:v-on="">
    <div>
        <div class="container" :style="containerStyle" id="container">
            <split-panel ref="splitPanel" Orientation="vertical" :show-border="true" :init-position="100">
                <div slot="panel1">
                    <button @click="swapComponent(null)">Close</button>
                    <button @click="changeView('clock')">clock</button>
                    <left-pane></left-pane>

                </div>
                <split-panel ref="splitPanel" Orientation="horizontal" :show-border="true" :init-position="180" slot="panel2">
                    <div slot="panel1">
                        <div id="toReplace">
                            <div :is="currentComponent"></div>
                            <div v-show="!currentComponent" v-for="component in componentsArray">
                                <button @click="swapComponent(component)">{{component}}</button>
                            </div>
                        </div>


                    </div>
                    <split-panel Orientation="horizontal" :show-border="true" :init-position="440" slot="panel2">
                        <div class="panel" slot="panel1">
                            <entry></entry>
                        </div>
                        <div slot="panel2">
                            <div >
                                <div >
                                    <div >
                                        <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
                                        <main id="flex-split">
                                            <div class="left-side">
                                                <entry></entry>
                                                <system-information></system-information>
                                            </div>

                                            <div>
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

                            </div>
                        </div>
                    </split-panel>
                </split-panel>


            </split-panel>

        </div>
    </div>



</template>

<script>
  import {actions, state} from '../../store/modules/leftPaneRoutView';
  import SystemInformation from '../SystemInformation';
  import Clock from '../Clock.vue';
  import Entry from '../Entry';
  import SplitPanel from '../Drag/SplitPanel.vue';
  import leftPane from '../leftSideBar/leftPane.vue';

  const electron = require('electron');
  let screenElectron = electron.screen;
  let mainScreen = screenElectron.getPrimaryDisplay();
  let allScreens = screenElectron.getAllDisplays();
  let mainScreenDimensions = mainScreen.size;

  export default {
    name: 'landing-page',
    el: 'body',
    vuex: {
      actions
      },

    created () {
      this.setContainerHeight();
      this.setContainerWidth();
      // register window resize event handler
      window.addEventListener('resize', () => {
        // only process resize event each 0.066 sec (about 15 fts)
        if (!this.timeout) {
          this.timeout = window.setTimeout(() => {
            this.timeout = null;
            this.setContainerHeight();
            this.setContainerWidth();
          }, 100);
        }
      });
      // setup after 1 sec
      window.setTimeout(this.setup, 1000);
    },
    mounted () {
      // adjust split panel size
      this.$refs.splitPanel.sizeChanged(this);

    },
    data () {
      return {
        currentComponent: SystemInformation,
        componentsArray: ['foo', 'bar'],
        containerHeight: 10,
        containerWidth: 50
      };
    },
    computed: {
      containerStyle () {
        return {
          'height': `${this.containerHeight}%`,
          'width': `${this.containerWidth}%`
        };
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link);
      },
      setContainerHeight () {
        this.containerHeight = window.containerHeight - 50;

      },
      setContainerWidth () {
        this.containerWidth = window.containerWidth -20;
      },
      // method for drag over in tree
      dragOverRule (dest, source) {
        if (typeof dest.funcs.accept === 'function') return dest.funcs.accept(dest, source);
      },
      swapComponent: function(component)
      {
        if (component==='foo'){
          this.currentComponent = Entry;
        }
        else if (component==='bar') {
          this.currentComponent = Clock;
        }
        else if (component==='clock') {
          this.currentComponent = Clock;
        }
        else {
            this.currentComponent = component;
        }
      }

    },

    components: {
      SystemInformation,
      Entry,
      Clock,
      leftPane,
      SplitPanel
    }
  };
</script>

<style scoped="">
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');



    .container {
        /*height: 600px;*/
        border: solid 6px black;
        font-size: 12px;
        height: 100%;
        width: 100%;

        margin-left: -1px;
        margin-right: -1px;
        margin-top: -1px;
        margin-bottom: -1px;

        padding-left: 1px;
        padding-right: 1px;
        padding-top: 1px;
        padding-bottom: 1px;
    }

    #wrapper {
        background:
                radial-gradient(
                        ellipse at top left,
                        rgba(255, 255, 255, 1) 40%,
                        rgba(229, 229, 229, .9) 100%
                );
        padding-right: 10px;

        padding-top: 10px;
        padding-bottom: 10px;
        margin-right: 10px;
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

    canvas > div { flex-basis: 50%; }

    .left-side {
        display: flex;
        flex-direction: column;
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
