<template>
    <div class="entry-details">

        <div class="left-side entry-details" >
            <h2>Source</h2>
            <input v-model="source" placeholder="Add Source">
            <p>Source is: {{ source }}</p>
        </div>

        <div class="right-side">
            <h2>Description</h2>
            <textarea v-model="description" placeholder="Add description"></textarea>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'entry',
    data () {
      return {
        source: '',
        description: '',
        content: ''
      }
    }
  }
</script>


<style>
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

    .left-side {
        margin: -10px;
        padding: -10px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background: green !important;
        vertical-align: middle;
        width: 100%;
        height: 100%;
    }
    .right-side {
        color: #555;
        font-size: 23px;
        margin-bottom: -10px;
    }
    text{
        font-size: 20px;
    }
    .entry-details {
        width: 100%;
        margin: 0;
        padding: 0px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

</style>
