<template>
  <div>
    <div v-if="varient == 'textinput'">
      <input :type="type" class="inputText" required :disabled="disable == 1" />
      <span class="floating-label">{{ placeholder }}</span>
    </div>
    <div v-if="varient == 'searchbar'">
      <FyInputIcon
        :placeholder="placeholder"
        :iconLeft="iconLeft"
        :iconRight="iconRight"
        :iconSize="iconSize"
        :iconColor="iconColor"
      />
    </div>
  </div>
</template>

<script>
import FyInputIcon from "./FyInputIcon.vue";
export default {
  name: "fy-input",
  components: {
    FyInputIcon,
  },
  props: {
    varient: {
      type: String,
      default: "textinput",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "Placeholder",
    },
    disable: {
      type: Number,
      default: 0,
    },
    iconLeft: {
      type: String,
      default: "",
    },
    iconRight: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
    },
    // iconBothSide: {
    //   type: Boolean,
    //   default: false,
    // },
    iconSize: {
      type: Number,
    },
  },
};
</script>

<style lang="scss">
input:focus ~ .floating-label,
input:disabled ~ .floating-label,
input:not(:focus):valid ~ .floating-label {
  top: 9px;
  bottom: 10px;
  left: 24px;
  font-size: 11px;
  opacity: 1;
}

.inputText {
  font-size: 14px;
  width: 200px;
  height: 35px;
  padding-left: 7px;
  padding-top: 10px;
}

.floating-label {
  position: absolute;
  pointer-events: none;
  padding-top: 10px;
  padding-bottom: 10px;
  left: 20px;
  top: 18px;
  transition: 0.2s ease all;
  color: gray;
}

input:disabled ~ .floating-label {
  top: 9px;
  bottom: 10px;
  left: 24px;
  font-size: 11px;
  opacity: 1;
}
</style>
