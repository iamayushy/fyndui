import FyButton from "./FyButton.vue";

export default {
  title: "Components/Button",
  component: FyButton,

  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "md", "lg", "xl"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FyButton },
  template: '<fy-button  v-bind="$props" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  label: "Button",
  size: "xl",
};
