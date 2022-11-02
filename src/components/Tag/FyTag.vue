<template>
  <div>
    <span class="label" v-bind:style="[styles]">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "fy-tag",
  props: {
    label: {
      type: String,
      default: "Label",
    },
    color: {
      type: String,
      default: "black",
    },
    borderColor: {
      type: String,
      default: "black",
    },
  },
  computed: {
    styles: function () {
      if (this.color !== "black" || this.borderColor !== "black") {
        return {
          color: this.color,
          "border-color": this.borderColor,
        };
      } else {
        return {
          color: "black",
        };
      }
    },
  },
};
</script>

<style lang="scss">
.label {
  text-transform: capitalize;
  padding: 4px 8px;
  background: transparent;
  border-radius: 20px;
  border: 1px solid black;
}

.label:hover {
  background: #e8faf7;
  border: transparent;
  cursor: pointer;
}
</style>
