<template>
  <div class="fy-input" :class="classObject">
    <label class="label">{{ label }}</label>
    <div class="inp-div">
      <input class="inp-style" type="text" :placeholder="inputPlace" />
    </div>
  </div>
</template>

<script>
import { boolean } from "yargs";

export default {
  name: "fy-input",
  props: {
    variant: {
      type: String,
      default: "Default",
    },
    label: {
      type: String,
      default: "label",
    },
    placeholder: {
      type: String,
      default: "Placeholder",
    },
    size: {
      type: String,
      default: "md",
    },
    radius: {
      type: String,
      default: "sm",
    },
    disable: {
      type: boolean,
      default: false,
    },
  },
  computed: {
    classObject() {
      return {
        Default: this.variant == "Default",
        Filled: this.variant == "Filled",
      };
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/variables";

.fy-input {
  display: flex;
  flex-direction: column;

  &.primary {
    .label {
      color: rgba(0, 0, 0, 0.65);
    }
    .inp-style {
      background: transparent;
      border-width: 2px;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      background: transparent;
      outline: 0;
      height: 23px;
      border-color: $ril-primary;
      width: 130px;
    }
  }
  &.Filled {
    background-color: $ril-primary;
    border-radius: 20px;
    padding: 7px;

    .label {
      display: none;
    }
    .inp-div {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0px 10px;
      gap: 5px;
    }
    .inp-style {
      font-size: 16px;
      font-weight: 500;
      text-overflow: ellipsis;
      border: none;
      background-color: $ril-primary;
      padding: 5px;
      width: 100%;
      color: #fff;
      outline-width: 0;
    }
    input::placeholder {
      color: white;
    }
    input:focus::placeholder {
      color: #748ffc;
    }
  }
}
</style>
