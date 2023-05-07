<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
      <div class="selected" :class="{ open: open }" @click="open = !open">
        {{ selected }}
      </div>
      <div class="items" :class="{ selectHide: !open }">
        <div v-for="(option, i) of options" :key="i" @click="selected = option; open = false; $emit('input', option);" :class="{ selectedItem: selected == option }">
          {{ option }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Array,
        required: true,
      },
      default: {
        type: String,
        required: false,
        default: null,
      },
      tabindex: {
        type: Number,
        required: false,
        default: 0,
      },
    },
    data() {
      return {
        selected: this.default
          ? this.default
          : this.options.length > 0
          ? this.options[0]
          : null,
        open: false,
      };
    },
    mounted() {
      this.$emit("input", this.selected);
    },
  };
  </script>
  
  <style scoped>
  .custom-select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    height: 47px;
    line-height: 47px;
    font-weight: 600;
    font-size: 14px;
  }
  
  .custom-select .selected {
    background: none;
    border: none;
    border-bottom: 2px solid #5DD299;
    color: white;
    padding-left: 5px;
    cursor: pointer;
    user-select: none;
  }

  .selectedItem {
    color: #5DD299 !important;
  }
  
  .custom-select .selected.open {
    border-radius: 6px 6px 0px 0px;
  }
  
  .custom-select .selected:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #5DD299 transparent transparent transparent;
  }
  
  .custom-select .items {
    color: #5DD299;
    border: 1px #5DD299 solid;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    position: absolute;
    background-color: #20232A;
    left: 0;
    right: 0;
    z-index: 1;
  }
  
  .custom-select .items div {
    color: #8c91a6;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
  }
  
  .custom-select .items div:hover {
    background-color: #272a32;
  }
  
  .selectHide {
    display: none;
  }
  </style>
  