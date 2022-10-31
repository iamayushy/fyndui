<template>
  <div class="fy-input" :class="classObject">
    <label class="label">{{ label }}</label>
    <div class="inp-div">
      <div class="icon-div">
        <v-icon
          :name="icon"
          class="icon-left"
          v-if="icon !== '' && iconPostion === 'icon-left'"
        />
        <input
          class="inp-style"
          :style="inpStyle"
          type="text"
          :placeholder="placeholder"
          :disabled="disable"
        />

        <v-icon
          :name="icon"
          class="icon-right"
          v-if="icon !== '' && iconPostion === 'icon-right'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
export default {
  name: "fy-input",
  components: {
    "v-icon": Icon,
  },
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
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    iconPostion: {
      type: String,
      default: "icon-left",
    },
  },
  computed: {
    classObject() {
      return {
        Default: this.variant == "Default",
        Filled: this.variant == "Filled",
        Icon: this.icon !== "",
        disable: this.disable ? "disable" : "",
        "w-xs": this.size === "xs",
        "w-md": this.size === "md",
        "w-sm": this.size === "sm",
        "w-lg": this.size === "lg",
        "w-xl": this.size === "xl",
      };
    },
    inpStyle() {
      if (this.iconPostion === "icon-right") {
        return {
          "padding-right": "25px",
        };
      } else if (this.iconPostion === "icon-left") {
        return {
          "padding-left": "25px",
        };
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/variables";

.fy-input {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 180px;
  &.Default {
    .label {
      color: black;
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
      border-color: rgba(0, 0, 0, 0.65);
    }
    .inp-style:focus {
      border-color: $ril-primary;
    }

    &.Icon {
      .icon-div {
        display: flex;
        align-items: center;
        position: relative;
        width: 180px;
      }
      .icon-left {
        position: absolute;
      }

      .icon-right {
        position: absolute;
        right: 20px;
      }
    }

    &.disable {
      .label {
        color: #dee2e6;
      }
      .inp-style {
        border-color: #dee2e6;
      }
      .icon-left,
      .icon-right {
        fill: #dee2e6;
      }

      input,
      input::placeholder {
        color: #dee2e6;
        opacity: 1;
      }
    }
  }

  &.Filled {
  }

  &.Unstyled {
  }

  &.w-xs {
    font-size: 12px;
    min-height: 30px;
  }

  &.w-sm {
    font-size: 14px;
    min-height: 36px;
  }
}
</style>
