import FyTag from "../Tag/FyTag.vue";

export default {
  title: "Components/Tag",
  component: FyTag,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    color: {
      control: { type: "color" },
    },
    borderColor: {
      control: { type: "color" },
    },
    
  },
};

const Template = (args, { argTypes }) => ({
  components: { FyTag },
  props: Object.keys(argTypes),
  template: '<fy-tag v-bind="$props"></fy-tag>',
});

export const Default = Template.bind({});
