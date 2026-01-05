import 'package:flutter/material.dart';
import '../theme/tokens.dart';
import '../theme/crossui_theme.dart';

enum CrossUIAlertVariant { info, success, warning, error }

class CrossUIAlert extends StatelessWidget {
  final String title;
  final String? description;
  final CrossUIAlertVariant variant;
  final IconData? icon;

  const CrossUIAlert({
    Key? key,
    required this.title,
    this.description,
    this.variant = CrossUIAlertVariant.info,
    this.icon,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Get colors from theme
    final theme = context.theme;
    Color baseColor;
    IconData defaultIcon;

    switch (variant) {
      case CrossUIAlertVariant.success:
        baseColor = theme.success;
        defaultIcon = Icons.check_circle_outline;
        break;
      case CrossUIAlertVariant.warning:
        baseColor = theme.warning;
        defaultIcon = Icons.warning_amber_rounded;
        break;
      case CrossUIAlertVariant.error:
        baseColor = theme.danger;
        defaultIcon = Icons.error_outline;
        break;
      case CrossUIAlertVariant.info:
        baseColor = theme.info;
        defaultIcon = Icons.info_outline;
        break;
    }

    // Determine derived colors
    // Using opacity for background allows it to look good on both light and dark themes
    final backgroundColor = baseColor.withValues(alpha: 0.15);
    final borderColor = baseColor.withValues(alpha: 0.5);
    final foregroundColor =
        baseColor; // Use the main color for text/icon for good contrast on low opacity bg

    return Container(
      padding: const EdgeInsets.all(CrossUITokens.spacingM),
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
        border: Border.all(color: borderColor),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon ?? defaultIcon, color: foregroundColor, size: 20),
          const SizedBox(width: CrossUITokens.spacingSm),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: CrossUITokens.fontSizeBase,
                    color: foregroundColor,
                  ),
                ),
                if (description != null) ...[
                  const SizedBox(height: 4),
                  Text(
                    description!,
                    style: TextStyle(
                      fontSize: CrossUITokens.fontSizeSm,
                      color: foregroundColor.withValues(alpha: 0.8),
                    ),
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}
