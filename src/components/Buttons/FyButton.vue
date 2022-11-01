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
        
        backgroundColor: {
          type: String,
          default: "$ril-primary"
        },
        variant: {
            type: String,
            default : "primary"
        },
        fullsize: {
          type: Boolean,
          default: false
        },
        width: {
          type: String,
          default: '160px'
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
               width: this.fullsize ? "100%": "",
               backgroundColor: this.backgroundColor,
               borderColor: this.backgroundColor,
               
              
              
               
               
            }

        },
        classes () {
            return {
                [`button-${this.size}`] : true,
                [`${this.variant}`] : this.variant === "primary" ? false :  true,
                "disable-btn" : this.disabled
              }
        }

    }



}
</script>
<template>
  <button  :style="styles" :class="classes"  @click="onClick" class="fyButton">
    <slot></slot>
  </button>
</template>

<style lang="scss">
@import "../../styles/variables";
.fyButton {
  position: relative;
  color: white;
  font-weight: bold;
  height: 36px;
  background-color: $ril-primary;
  border-radius: 50px;
  border: 2px solid $ril-primary;
  width: v-bind(width);
  
  

  &.secondary  {
    color: $ril-primary;
    background-color: white;
    border-color: #e0e0e0;

    &:hover {
        border-color: $ril-primary;
        background-color: transparent;
    }
    &:active {
        background-color: #9999ff;
        color: $ril-primary;
        
    }
  }

  &.tertiary {
    background-color: transparent;
    color: $ril-primary;
    border-color: transparent;

    &:hover {
        border-color: transparent;
        background-color: #e8e8fd;
    }
    &:active {
        background-color: #e8e8fd;
        color: $ril-primary;
        
    }
    &:focus {
        background-color: #9999ff;
    }
  }

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

.icon  {
    width: 56px;
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
.disable-btn {
  pointer-events: none;
  opacity: 0.4;
  cursor: pointer;
}
</style>
