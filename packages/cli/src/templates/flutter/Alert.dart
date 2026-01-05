import 'package:flutter/material.dart';
import '../theme/tokens.dart';

enum CrossUIAlertVariant { info, success, warning, destructive }

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
    Color borderColor;
    Color backgroundColor;
    Color iconColor;
    IconData defaultIcon;

    switch (variant) {
      case CrossUIAlertVariant.success:
        borderColor = CrossUITokens.success;
        backgroundColor = CrossUITokens.successLight;
        iconColor = CrossUITokens.onSuccessLight;
        defaultIcon = Icons.check_circle_outline;
        break;
      case CrossUIAlertVariant.warning:
        borderColor = CrossUITokens.warning;
        backgroundColor = CrossUITokens.warningLight;
        iconColor = CrossUITokens.onWarningLight;
        defaultIcon = Icons.warning_amber_rounded;
        break;
      case CrossUIAlertVariant.destructive:
        borderColor = CrossUITokens.danger;
        backgroundColor = CrossUITokens.dangerLight;
        iconColor = CrossUITokens.onDangerLight;
        defaultIcon = Icons.error_outline;
        break;
      case CrossUIAlertVariant.info:
      default:
        borderColor = CrossUITokens.info;
        backgroundColor = CrossUITokens.infoLight;
        iconColor = CrossUITokens.onInfoLight;
        defaultIcon = Icons.info_outline;
        break;
    }

    return Container(
      padding: const EdgeInsets.all(CrossUITokens.spacingM),
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
        border: Border.all(color: borderColor.withOpacity(0.5)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon ?? defaultIcon, color: iconColor, size: 20),
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
                    color: iconColor,
                  ),
                ),
                if (description != null) ...[
                  const SizedBox(height: 4),
                  Text(
                    description!,
                    style: TextStyle(
                      fontSize: CrossUITokens.fontSizeSm,
                      color: iconColor.withOpacity(0.8),
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
