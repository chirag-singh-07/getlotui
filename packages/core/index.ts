import colors from "./tokens/colors.json";
import spacing from "./tokens/spacing.json";
import radius from "./tokens/radius.json";
import buttonDef from "./components/button.json";
import inputDef from "./components/input.json";
import otpInputDef from "./components/otp-input.json";
import checkboxDef from "./components/checkbox.json";
import radioDef from "./components/radio.json";
import switchDef from "./components/switch.json";
import accordionDef from "./components/accordion.json";
import alertDialogDef from "./components/alert-dialog.json";
import avatarDef from "./components/avatar.json";
import badgeDef from "./components/badge.json";
import pressAnim from "./animations/press.json";
import dropdownDef from "./components/dropdown.json";

// Export Tokens
export const Tokens = {
  colors,
  spacing,
  radius,
};

// Export Component Definitions (Contracts)
export const Components = {
  Button: buttonDef,
  Input: inputDef,
  OTPInput: otpInputDef,
  Checkbox: checkboxDef,
  Radio: radioDef,
  Switch: switchDef,
  Accordion: accordionDef,
  AlertDialog: alertDialogDef,
  Avatar: avatarDef,
  Badge: badgeDef,
  Dropdown: dropdownDef,
};

// Export Animation configs
export const Animations = {
  Press: pressAnim,
};

// Type Definitions
export type ColorToken = keyof typeof colors;
export type SpacingToken = keyof typeof spacing;
export type ButtonVariant = keyof typeof buttonDef.variants;
