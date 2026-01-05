import { StyleSheet } from "react-native";

/**
 * A utility to merge React Native styles.
 * It flattens arrays and handles conditional styles.
 * Usage: cn(styles.base, isSelected && styles.selected)
 */
export function cn(...inputs: any[]) {
  return StyleSheet.flatten(inputs.filter(Boolean));
}
