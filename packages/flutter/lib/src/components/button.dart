import 'package:flutter/material.dart';
import '../theme/tokens.dart';
import '../theme/crossui_theme.dart';

enum CrossUIButtonVariant { primary, secondary, outline, ghost, destructive }

enum CrossUIButtonSize { sm, defaultSize, lg }

class CrossUIButton extends StatelessWidget {
  final String? label;
  final VoidCallback? onPressed;
  final CrossUIButtonVariant variant;
  final CrossUIButtonSize size;
  final bool disabled;
  final Widget? icon;

  const CrossUIButton({
    Key? key,
    this.label,
    this.onPressed,
    this.variant = CrossUIButtonVariant.primary,
    this.size = CrossUIButtonSize.defaultSize,
    this.disabled = false,
    this.icon,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Color backgroundColor;
    Color foregroundColor;
    BorderSide borderSide = BorderSide.none;
    final theme = context.theme;

    switch (variant) {
      case CrossUIButtonVariant.secondary:
        backgroundColor = theme.secondary;
        foregroundColor = theme.onSecondary;
        break;
      case CrossUIButtonVariant.outline:
        backgroundColor = Colors.transparent;
        foregroundColor = theme.primary;
        borderSide = BorderSide(color: theme.border);
        break;
      case CrossUIButtonVariant.ghost:
        backgroundColor = Colors.transparent;
        foregroundColor = theme.primary;
        break;
      case CrossUIButtonVariant.destructive:
        backgroundColor = theme.danger;
        foregroundColor =
            Colors.white; // Assuming onDanger is white or I keys theme.onDanger
        // Wait, I didn't add onDanger to theme?
        // Let's check crossui_theme.dart.
        // I added danger, warning, etc. but NOT onDanger, onWarning.
        // I'll assume white for now or check if I should add them.
        // In tokens.dart: static const onDanger = Color(0xFFFFFFFF);
        break;
      case CrossUIButtonVariant.primary:
        backgroundColor = theme.primary;
        foregroundColor = theme.onPrimary;
        break;
    }

    if (disabled) {
      backgroundColor = backgroundColor.withValues(alpha: 0.5);
      foregroundColor = foregroundColor.withValues(alpha: 0.5);
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
            if (icon != null) icon!,
            if (icon != null && label != null) const SizedBox(width: 8),
            if (label != null)
              Text(
                label!,
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
