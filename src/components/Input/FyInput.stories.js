import FyInput from "../Input/FyInput.vue";

export default {
  title: "Components/Input",
  component: FyInput,
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
    },
    type: {
      control: { type: "inline-radio" },
      options: ["text", "password", "email"],
    },
    disable: {
      control: { type: "inline-radio" },
      options: { true: 1, false: 0 },
    },
    iconLeft: { control: { type: "text" } },
    iconRight: { control: { type: "text" } },
    iconSize: { control: { type: "number" } },
    // iconBothSide: { type: "boolean" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { FyInput },
  props: Object.keys(argTypes),
  template: '<fy-input v-bind="$props"></fy-input>',
});

export const Primary = Template.bind({});
Primary.args = {
  varient: "textinput",
};

export const Icon = Template.bind({});

Icon.args = {
  varient: "searchbar",
  placeholder: "search",
};
