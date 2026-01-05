import 'package:flutter/material.dart';

@immutable
class CrossUIThemeData extends ThemeExtension<CrossUIThemeData> {
  final Color primary;
  final Color onPrimary;
  final Color secondary;
  final Color onSecondary;
  final Color background;
  final Color surface;
  final Color text;
  final Color textMuted;
  final Color border;

  final Color danger;
  final Color warning;
  final Color success;
  final Color info;

  const CrossUIThemeData({
    required this.primary,
    required this.onPrimary,
    required this.secondary,
    required this.onSecondary,
    required this.background,
    required this.surface,
    required this.text,
    required this.textMuted,
    required this.border,
    required this.danger,
    required this.warning,
    required this.success,
    required this.info,
  });

  @override
  CrossUIThemeData copyWith({
    Color? primary,
    Color? onPrimary,
    Color? secondary,
    Color? onSecondary,
    Color? background,
    Color? surface,
    Color? text,
    Color? textMuted,
    Color? border,
    Color? danger,
    Color? warning,
    Color? success,
    Color? info,
  }) {
    return CrossUIThemeData(
      primary: primary ?? this.primary,
      onPrimary: onPrimary ?? this.onPrimary,
      secondary: secondary ?? this.secondary,
      onSecondary: onSecondary ?? this.onSecondary,
      background: background ?? this.background,
      surface: surface ?? this.surface,
      text: text ?? this.text,
      textMuted: textMuted ?? this.textMuted,
      border: border ?? this.border,
      danger: danger ?? this.danger,
      warning: warning ?? this.warning,
      success: success ?? this.success,
      info: info ?? this.info,
    );
  }

  @override
  CrossUIThemeData lerp(ThemeExtension<CrossUIThemeData>? other, double t) {
    if (other is! CrossUIThemeData) {
      return this;
    }
    return CrossUIThemeData(
      primary: Color.lerp(primary, other.primary, t)!,
      onPrimary: Color.lerp(onPrimary, other.onPrimary, t)!,
      secondary: Color.lerp(secondary, other.secondary, t)!,
      onSecondary: Color.lerp(onSecondary, other.onSecondary, t)!,
      background: Color.lerp(background, other.background, t)!,
      surface: Color.lerp(surface, other.surface, t)!,
      text: Color.lerp(text, other.text, t)!,
      textMuted: Color.lerp(textMuted, other.textMuted, t)!,
      border: Color.lerp(border, other.border, t)!,
      danger: Color.lerp(danger, other.danger, t)!,
      warning: Color.lerp(warning, other.warning, t)!,
      success: Color.lerp(success, other.success, t)!,
      info: Color.lerp(info, other.info, t)!,
    );
  }

  static const light = CrossUIThemeData(
    primary: Color(0xFF6366F1),
    onPrimary: Colors.white,
    secondary: Color(0xFF10B981),
    onSecondary: Colors.white,
    background: Color(0xFFF8FAFC),
    surface: Colors.white,
    text: Color(0xFF0F172A),
    textMuted: Color(0xFF64748B),
    border: Color(0xFFE2E8F0),
    danger: Color(0xFFEF4444),
    warning: Color(0xFFF59E0B),
    success: Color(0xFF22C55E),
    info: Color(0xFF3B82F6),
  );

  static const dark = CrossUIThemeData(
    primary: Color(0xFF818CF8),
    onPrimary: Color(0xFF0F172A),
    secondary: Color(0xFF34D399),
    onSecondary: Color(0xFF0F172A),
    background: Color(0xFF0F172A),
    surface: Color(0xFF1E293B),
    text: Color(0xFFF8FAFC),
    textMuted: Color(0xFF94A3B8),
    border: Color(0xFF334155),
    danger: Color(0xFFF87171),
    warning: Color(0xFFFBBF24),
    success: Color(0xFF4ADE80),
    info: Color(0xFF60A5FA),
  );
}

// Extension to easily access the theme
extension CrossUITheme on BuildContext {
  CrossUIThemeData get theme =>
      Theme.of(this).extension<CrossUIThemeData>() ?? CrossUIThemeData.light;
}
