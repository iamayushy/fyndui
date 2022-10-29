import FyInput from "../Input/FyInput.vue";

export default {
  title: "Components/Input",
  component: FyInput,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["Default", "Filled", "Unstyled"],
    },
    placeholder: { control: "text" },
    radius: {
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    size: {
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    disable: { control: "boolean" },
    icon: {
      control: "text",
    },
    iconPostion: {
      control: { type: "inline-radio" },
      options: { left: "icon-left", right: "icon-right" },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { FyInput },
  props: Object.keys(argTypes),
  template: '<fy-input v-bind="$props"></fy-input>',
});

export const Primary = Template.bind({});
