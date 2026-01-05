import { StyleSheet } from "react-native";

/**
 * A utility to merge React Native styles.
 */
export function cn(...inputs: any[]) {
  return StyleSheet.flatten(inputs.filter(Boolean));
}
