<template>
  <div class="main-div">
    <v-icon
      v-if="iconLeft"
      :name="iconLeft"
      v-bind:style="[iconFill]"
      class="icon-style"
      style="left: 7px"
    />
    <input
      :type="type"
      :placeholder="placeholder"
      v-bind:style="[iconAdd]"
      class="ser-box"
    />

    <v-icon
      v-if="iconRight"
      :name="iconRight"
      v-bind:style="[iconFill]"
      class="icon-style"
      style="right: 17px"
    />
  </div>
</template>

<script>
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
export default {
  name: "FyInputIcon",
  components: {
    "v-icon": Icon,
  },
  props: {
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    iconLeft: {
      type: String,
      default: "",
    },
    iconRight: {
      type: String,
      default: "",
    },
    iconSize: {
      type: Number,
      default: 2,
    },
    iconColor: {
      type: String,
    },
    // iconBothSide: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  computed: {
    iconAdd: function () {
      //     if (this.iconBothSide) {
      //     return ;
      // } else
      if (this.iconRight) {
        return {
          "padding-right": "25px",
        };
      } else if (this.iconLeft) {
        return {
          "padding-left": "25px",
        };
      } else {
        return {};
      }
    },
    iconFill: function () {
      return {
        fill: this.iconColor,
      };
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/variables";

.main-div {
  display: flex;
  align-items: center;
  width: 180px;
  position: relative;

  .icon-style {
    position: absolute;
  }

  .ser-box {
    background-color: $ril-primary;
    padding: 10px;

    border-radius: 20px;
    border: none;
    color: $placeholder-color;

    &::placeholder {
      color: $placeholder-color;
    }

    &:focus {
      outline-color: transparent;
      color: $placeholder-color;
    }
  }
}
</style>
