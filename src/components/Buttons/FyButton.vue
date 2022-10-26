<script>
export default {
    name: 'fy-button',
    props: {
        label: {
            type: String,
            default: "Button",
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        upperCase : {
            type : Boolean,
            default: false
        },
        size: {
            type: String,
            default: ''
        },
        fullwidth: {
          type: Boolean,
          default: false
        },
        backgroundColor: {
          type: String,
          default: "$ril-primary"
        }
    },
    methods: {
        onClick () {
            this.$emit('onClick')
        }
    },

    computed: {
        styles () {
            return {
               textTransform: this.upperCase ? "uppercase" : "lowercase",
               width: this.fullwidth ? "100%":"",
               backgroundColor: this.backgroundColor,
               borderColor: this.backgroundColor 
               
               
            }

        },
        classes () {
            return {
                [`button-${this.size}`] : true,
              }
        }

    }



}
</script>
<template>
  <button :style="styles" :class="classes" type="button" @click="onClick" class="fyButton">
    {{ label }}
  </button>
</template>

<style lang="scss">
@import "../../styles/variables";
.fyButton {
  border: none;
  color: white;
  padding: 0 18px;
  font-weight: bold;
  height: 36px;
  background-color: $ril-primary;
  border-radius: 50px;
  border: 2px solid $ril-primary;
  min-width: 5rem;
  display: inline-block;
  margin: 0.5rem 0;

  &:hover {
    background-color: $ril-secondary;
    border: 2px solid $ril-primary;
  }
  &:focus {
    border: 2px solid black;
  }
  &:active {
    color: #9999ff;
  }
}
.button-xs {
  padding: 0 14px;
  height: 30px;
  font-size: 12px;
}
.button-md {
  padding: 0 22px;
  height: 42px;
  font-size: 14px;
}
.button-lg {
  padding: 0 26px;
  height: 50px;
  font-size: 16px;
}
.button-xl {
  padding: 0 32px;
  height: 60px;
  font-size: 20px;
}
.fullWidth {
  width: 100%;
}
</style>
