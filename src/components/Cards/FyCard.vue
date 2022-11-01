<script>
    export default {
        name: "fy-card",
        props : {
            
            content: {
                type: String,
                default: ''
            }
        }
    }
</script>

<template>
    <div class="fy-card-outer">
        <section class="fy-card-inner">
            
            <section class="fy-image">
                <slot name="header"></slot>
            </section>
        <section class="fy-content">
            <section  class="fy-container">
                <slot name="content">
                </slot>
            </section>

            <section class="fy-container">
                <slot name="actions"></slot>
            </section>
            <slot></slot>
        </section>
        </section>
    </div>
</template>

<style>
.fy-card-outer {


}
.fy-image{
    
}
.fy-card-inner {
}
.fy-container     {
    padding: 0.6rem;
}

.card-header {

}
</style>