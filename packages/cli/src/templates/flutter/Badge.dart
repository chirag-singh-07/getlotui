import 'package:flutter/material.dart';

enum CrossUIBadgeVariant {
  defaultVariant,
  secondary,
  outline,
  destructive,
  success,
  warning,
}

enum CrossUIBadgeSize { sm, md }

class CrossUIBadge extends StatelessWidget {
  final String label;
  final CrossUIBadgeVariant variant;
  final CrossUIBadgeSize size;

  const CrossUIBadge({
    super.key,
    required this.label,
    this.variant = CrossUIBadgeVariant.defaultVariant,
    this.size = CrossUIBadgeSize.md,
  });

  @override
  Widget build(BuildContext context) {
    Color backgroundColor;
    Color textColor;
    BorderSide borderSide = BorderSide.none;

    switch (variant) {
      case CrossUIBadgeVariant.secondary:
        backgroundColor = Colors.blue.withValues(alpha: 0.1);
        textColor = Colors.blue;
        break;
      case CrossUIBadgeVariant.outline:
        backgroundColor = Colors.transparent;
        textColor = Colors.blue;
        borderSide = const BorderSide(color: Colors.blue);
        break;
      case CrossUIBadgeVariant.destructive:
        backgroundColor = Colors.red;
        textColor = Colors.white;
        break;
      case CrossUIBadgeVariant.success:
        backgroundColor = Colors.green.withValues(alpha: 0.1);
        textColor = Colors.green;
        break;
      case CrossUIBadgeVariant.warning:
        backgroundColor = Colors.amber.withValues(alpha: 0.1);
        textColor = Colors.amber;
        break;
      case CrossUIBadgeVariant.defaultVariant:
        backgroundColor = Colors.blue;
        textColor = Colors.white;
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
