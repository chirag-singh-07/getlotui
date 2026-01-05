import 'package:flutter/material.dart';
import '../theme/tokens.dart';
import '../theme/crossui_theme.dart';

enum CrossUIAlertDialogVariant { defaultVariant, destructive }

class CrossUIAlertDialog extends StatelessWidget {
  final String title;
  final String? description;
  final String cancelText;
  final String actionText;
  final VoidCallback? onCancel;
  final VoidCallback? onAction;
  final CrossUIAlertDialogVariant variant;
  final Widget? content;

  const CrossUIAlertDialog({
    Key? key,
    required this.title,
    this.description,
    this.cancelText = 'Cancel',
    this.actionText = 'Continue',
    this.onCancel,
    this.onAction,
    this.variant = CrossUIAlertDialogVariant.defaultVariant,
    this.content,
  }) : super(key: key);

  static Future<T?> show<T>({
    required BuildContext context,
    required String title,
    String? description,
    String cancelText = 'Cancel',
    String actionText = 'Continue',
    VoidCallback? onCancel,
    VoidCallback? onAction,
    CrossUIAlertDialogVariant variant =
        CrossUIAlertDialogVariant.defaultVariant,
    Widget? content,
  }) {
    return showDialog<T>(
      context: context,
      barrierDismissible: true,
      builder: (BuildContext context) {
        return CrossUIAlertDialog(
          title: title,
          description: description,
          cancelText: cancelText,
          actionText: actionText,
          onCancel: onCancel,
          onAction: onAction,
          variant: variant,
          content: content,
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;

    Color actionBackgroundColor;
    Color actionTextColor;

    if (variant == CrossUIAlertDialogVariant.destructive) {
      actionBackgroundColor = theme.danger;
      actionTextColor = Colors.white;
    } else {
      actionBackgroundColor = theme.primary;
      actionTextColor = theme.onPrimary;
    }

    return Dialog(
      backgroundColor: theme.surface,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(CrossUITokens.radiusLarge),
        side: BorderSide(color: theme.border, width: 1),
      ),
      child: Container(
        constraints: const BoxConstraints(maxWidth: 400),
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w700,
                    color: theme.text,
                  ),
                ),
                if (description != null) ...[
                  const SizedBox(height: 8),
                  Text(
                    description!,
                    style: TextStyle(
                      fontSize: CrossUITokens.fontSizeSm,
                      color: theme.textMuted,
                      height: 1.5,
                    ),
                  ),
                ],
              ],
            ),

            // Custom content
            if (content != null) ...[
              const SizedBox(height: 16),
              content!,
            ],

            const SizedBox(height: 24),

            // Footer with buttons
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                // Cancel button
                Expanded(
                  child: InkWell(
                    onTap: () {
                      onCancel?.call();
                      Navigator.of(context).pop(false);
                    },
                    borderRadius:
                        BorderRadius.circular(CrossUITokens.radiusMedium),
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 12,
                      ),
                      decoration: BoxDecoration(
                        border: Border.all(color: theme.border),
                        borderRadius:
                            BorderRadius.circular(CrossUITokens.radiusMedium),
                      ),
                      child: Text(
                        cancelText,
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: CrossUITokens.fontSizeBase,
                          fontWeight: FontWeight.w600,
                          color: theme.text,
                        ),
                      ),
                    ),
                  ),
                ),

                const SizedBox(width: 8),

                // Action button
                Expanded(
                  child: InkWell(
                    onTap: () {
                      onAction?.call();
                      Navigator.of(context).pop(true);
                    },
                    borderRadius:
                        BorderRadius.circular(CrossUITokens.radiusMedium),
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 12,
                      ),
                      decoration: BoxDecoration(
                        color: actionBackgroundColor,
                        borderRadius:
                            BorderRadius.circular(CrossUITokens.radiusMedium),
                      ),
                      child: Text(
                        actionText,
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: CrossUITokens.fontSizeBase,
                          fontWeight: FontWeight.w600,
                          color: actionTextColor,
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
