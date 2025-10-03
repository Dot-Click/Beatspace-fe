import {
  Button,
  createTheme,
  NumberInput,
  PasswordInput,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

const globalInputStyle = {
  defaultProps: {
    variant: "",
  },
  styles: (theme, params, ctx) => {
    return {
      label: {},
      input: {},
      wrapper: {},
      description: {},
    };
  },
};

const globalButtonStyles = {
  defaultProps: {
    variant: "",
  },
  styles: (theme, params, ctx) => {
    const buttonVariants = {
      primary: {},
      secondary: {},
      danger: {},
      outline: {},
    };
    return {
      root: buttonVariants[params.variant] || buttonVariants.primary,
    };
  },
};

export const theme = createTheme({
  components: {
    TextInput: TextInput.extend(globalInputStyle),
    Textarea: Textarea.extend(globalInputStyle),
    NumberInput: NumberInput.extend(globalInputStyle),
    DatePickerInput: DatePickerInput.extend(globalInputStyle),
    Select: Select.extend(globalInputStyle),
    PasswordInput: PasswordInput.extend(globalInputStyle),
    Button: Button.extend(globalButtonStyles),
  },
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  primaryColor: "indigo",
  colors: {
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5c5f66",
      "#373A40",
      "#2C2E33",
      "#25262b",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
  },
});
