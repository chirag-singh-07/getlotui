import 'package:flutter/material.dart';
import '../theme/crossui_theme.dart';

enum CrossUIBadgeVariant {
  defaultVariant,
  secondary,
  outline,
  destructive,
  success,
  warning
}

enum CrossUIBadgeSize { sm, md }

class CrossUIBadge extends StatelessWidget {
  final String label;
  final CrossUIBadgeVariant variant;
  final CrossUIBadgeSize size;

  const CrossUIBadge({
    Key? key,
    required this.label,
    this.variant = CrossUIBadgeVariant.defaultVariant,
    this.size = CrossUIBadgeSize.md,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;

    Color backgroundColor;
    Color textColor;
    BorderSide borderSide = BorderSide.none;

    switch (variant) {
      case CrossUIBadgeVariant.secondary:
        backgroundColor = theme.secondary.withValues(alpha: 0.1);
        textColor = theme.secondary;
        break;
      case CrossUIBadgeVariant.outline:
        backgroundColor = Colors.transparent;
        textColor = theme.primary;
        borderSide = BorderSide(color: theme.primary);
        break;
      case CrossUIBadgeVariant.destructive:
        backgroundColor = theme.danger;
        textColor = Colors.white;
        break;
      case CrossUIBadgeVariant.success:
        backgroundColor = theme.success.withValues(alpha: 0.1);
        textColor = theme.success;
        break;
      case CrossUIBadgeVariant.warning:
        backgroundColor = theme.warning.withValues(alpha: 0.1);
        textColor = theme.warning;
        break;
      case CrossUIBadgeVariant.defaultVariant:
        backgroundColor = theme.primary;
        textColor = theme.onPrimary;
        break;
    }

    EdgeInsets padding;
    double fontSize;

    if (size == CrossUIBadgeSize.sm) {
      padding = const EdgeInsets.symmetric(horizontal: 6, vertical: 2);
      fontSize = 10;
    } else {
      padding = const EdgeInsets.symmetric(horizontal: 10, vertical: 4);
      fontSize = 12;
    }

    return Container(
      padding: padding,
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(999),
        border: Border.fromBorderSide(borderSide),
      ),
      child: Text(
        label.toUpperCase(),
        style: TextStyle(
          color: textColor,
          fontSize: fontSize,
          fontWeight: FontWeight.w700,
          letterSpacing: 0.5,
        ),
      ),
    );
  }
}
