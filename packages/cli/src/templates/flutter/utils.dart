import 'package:flutter/material.dart';

class CrossUIUtils {
  static TextStyle cnText(List<TextStyle?> styles) {
    TextStyle result = const TextStyle();
    for (var style in styles) {
      if (style != null) {
        result = result.merge(style);
      }
    }
    return result;
  }
}
