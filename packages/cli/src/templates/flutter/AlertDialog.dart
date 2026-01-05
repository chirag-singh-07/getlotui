import 'package:flutter/material.dart';

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
    super.key,
    required this.title,
    this.description,
    this.cancelText = 'Cancel',
    this.actionText = 'Continue',
    this.onCancel,
    this.onAction,
    this.variant = CrossUIAlertDialogVariant.defaultVariant,
    this.content,
  });

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
    Color actionBackgroundColor;
    Color actionTextColor;

    if (variant == CrossUIAlertDialogVariant.destructive) {
      actionBackgroundColor = Colors.red;
      actionTextColor = Colors.white;
    } else {
      actionBackgroundColor = Colors.blue;
      actionTextColor = Colors.white;
    }

    return Dialog(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: BorderSide(color: Colors.grey.withValues(alpha: 0.2), width: 1),
      ),
      child: Container(
        constraints: const BoxConstraints(maxWidth: 400),
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                if (description != null) ...[
                  const SizedBox(height: 8),
                  Text(
                    description!,
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.grey[600],
                      height: 1.5,
                    ),
                  ),
                ],
              ],
            ),
            if (content != null) ...[const SizedBox(height: 16), content!],
            const SizedBox(height: 24),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Expanded(
                  child: InkWell(
                    onTap: () {
                      onCancel?.call();
                      Navigator.of(context).pop(false);
                    },
                    borderRadius: BorderRadius.circular(8),
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 12,
                      ),
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: Colors.grey.withValues(alpha: 0.3),
                        ),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: const Text(
                        'Cancel',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: InkWell(
                    onTap: () {
                      onAction?.call();
                      Navigator.of(context).pop(true);
                    },
                    borderRadius: BorderRadius.circular(8),
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 12,
                      ),
                      decoration: BoxDecoration(
                        color: actionBackgroundColor,
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Text(
                        actionText,
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: 16,
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
