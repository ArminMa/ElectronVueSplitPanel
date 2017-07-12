<template>
    <div id="app">
        <div class="shit-container">
            <vue-draggable-resizable @mousedown="elmDown" @dblclick="maximize" :style="style"
                                     :parent="true" @activated="onActivate" @deactivated="onDeactivate" @resizing="onResize" @dragging="onDrag"
                                     :x="0" :y="0" :grid="[25,25]">

                <entry></entry>
            </vue-draggable-resizable>
        </div>
    </div>
</template>

<script>
  import VueDraggableResizable from './Drag/vue-draggable-resizable'
  import Entry from './Entry'
  export default {
    data () {
      return {
        VueDraggableResizable
      }
    },
    components: {
      'VueDraggableResizable': VueDraggableResizable,
      'entry': Entry
    }
  }
</script>

<style>
    text{
        font-size: 20px;
    }
    .shit-container{
        height: 500px;
        width: 300px;
        margin: 5px;
        border: 1px solid red;
        position: relative;
    }
    .item {
        background-color: #eee;
        padding: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
        font-family: monospace;
        color: #333;
        border: 2px solid #b6b5b4;
    }
    .container{
        display: flex;
        justify-content: space-around;
        font-size: x-large;
    }
    .resizable {
        overflow: hidden;
        background: green !important;
        height: 200px;
        width: 200px;
        vertical-align: middle;
        display: table-cell;
    }
    .active {
        border: 1px dashed black;
    }
</style>
