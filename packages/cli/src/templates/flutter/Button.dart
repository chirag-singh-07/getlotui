import 'package:flutter/material.dart';
import '../theme/config.dart';

enum CrossUIButtonVariant {
  defaultVariant,
  secondary,
  outline,
  ghost,
  destructive,
}

enum CrossUIButtonSize { sm, defaultSize, lg }

class CrossUIButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final CrossUIButtonVariant variant;
  final CrossUIButtonSize size;
  final bool disabled;
  final Widget? icon;

  const CrossUIButton({
    Key? key,
    required this.label,
    this.onPressed,
    this.variant = CrossUIButtonVariant.defaultVariant,
    this.size = CrossUIButtonSize.defaultSize,
    this.disabled = false,
    this.icon,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Color backgroundColor;
    Color foregroundColor;
    BorderSide borderSide = BorderSide.none;

    final themeColors = CrossUITheme.colors;

    switch (variant) {
      case CrossUIButtonVariant.secondary:
        backgroundColor = themeColors['secondary'] ?? Colors.grey;
        foregroundColor = Colors.white;
        break;
      case CrossUIButtonVariant.outline:
        backgroundColor = Colors.transparent;
        foregroundColor = themeColors['primary'] ?? Colors.blue;
        borderSide = BorderSide(color: themeColors['primary'] ?? Colors.blue);
        break;
      case CrossUIButtonVariant.ghost:
        backgroundColor = Colors.transparent;
        foregroundColor = themeColors['primary'] ?? Colors.blue;
        break;
      case CrossUIButtonVariant.destructive:
        backgroundColor = Colors.red;
        foregroundColor = Colors.white;
        break;
      case CrossUIButtonVariant.defaultVariant:
      default:
        backgroundColor = themeColors['primary'] ?? Colors.blue;
        foregroundColor = themeColors['background'] ?? Colors.white;
        break;
    }

    if (disabled) {
      backgroundColor = backgroundColor.withOpacity(0.5);
      foregroundColor = foregroundColor.withOpacity(0.5);
    }

    EdgeInsets padding;
    double fontSize;
    switch (size) {
      case CrossUIButtonSize.sm:
        padding = const EdgeInsets.symmetric(horizontal: 12, vertical: 8);
        fontSize = CrossUITokens.fontSizeSm;
        break;
      case CrossUIButtonSize.lg:
        padding = const EdgeInsets.symmetric(horizontal: 24, vertical: 16);
        fontSize = CrossUITokens.fontSizeLg;
        break;
      case CrossUIButtonSize.defaultSize:
      default:
        padding = const EdgeInsets.symmetric(horizontal: 16, vertical: 12);
        fontSize = CrossUITokens.fontSizeBase;
        break;
    }

    return InkWell(
      onTap: disabled ? null : onPressed,
      borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
      child: Container(
        padding: padding,
        decoration: BoxDecoration(
          color: backgroundColor,
          borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
          border: Border.fromBorderSide(borderSide),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            if (icon != null) ...[icon!, const SizedBox(width: 8)],
            Text(
              label,
              style: TextStyle(
                color: foregroundColor,
                fontSize: fontSize,
                fontWeight: FontWeight.w600,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
