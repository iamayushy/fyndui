<script>
    export default {
        name: "fy-image",
        props: {
            src: {
                type: String,
                default: ""
            },
            height: {
                type : String,
                default: "100%"
            },
            fit: {
                type: String,
                default : ""
            },
            desc : {
                type: String,
                default: ""
            },
            radius: {
                type: String,
                default: "32px"
            }
            
        },

        computed : {
            classes () {
                return {
                    [this.fit] : true
                }
            },
            styled() {
                return {
                    borderRadius: this.radius
                }
            }
        }
    }

</script>

<template>
<img :style="styled" class="image" :class="classes" :src="src" width="100%" :height="height" :alt="desc"/>
</template>

<style lang="scss" scoped>
.image {
   &.contain{
    object-fit: contain;
   }
   &.cover {
    object-fit: cover;
   }
   &.fill {
    object-fit: fill;
   }
   &.scale-down {
    object-fit: scale-down;
   }
}
</style>