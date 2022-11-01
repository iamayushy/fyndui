import FyCard from "../components/Cards/FyCard.vue"

export default {
    title: 'Components/Card',
    components: FyCard,

    argTypes : {

    }
}

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {FyCard},
    template: `<fy-card v-bind="$props">
    <section slot ="header">
    hh1dbebdew
    </section>
    <section slot ="content">
    hh1dbebdew
    </section>
    <section slot ="actions">
    hh1dbebdew
    </section>
    </fy-card>`
})

export const Primary = Template.bind({})

Primary.args = {
   
}