import 'package:flutter/material.dart';

class CrossUIUtils {
  /// Merges a list of TextStyles into a single TextStyle.
  /// Null values are ignored.
  static TextStyle cnText(List<TextStyle?> styles) {
    TextStyle result = const TextStyle();
    for (var style in styles) {
      if (style != null) {
        result = result.merge(style);
      }
    }
    return result;
  }

  /// Helper to conditionally return a value.
  static T? conditional<T>(bool condition, T value) {
    return condition ? value : null;
  }
}
