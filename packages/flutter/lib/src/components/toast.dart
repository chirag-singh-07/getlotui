import 'package:flutter/material.dart';
import '../theme/tokens.dart';
import '../theme/crossui_theme.dart';

enum CrossUIToastVariant { success, error, info }

class CrossUIToast extends StatelessWidget {
  final String title;
  final String? description;
  final CrossUIToastVariant variant;

  const CrossUIToast({
    Key? key,
    required this.title,
    this.description,
    this.variant = CrossUIToastVariant.info,
  }) : super(key: key);

  /// Shows a toast notification.
  ///
  /// The [context] is used to find the [Overlay].
  /// [title] is the main message.
  /// [description] is the optional sub-message.
  /// [variant] determines the color scheme and icon.
  /// [duration] is how long the toast stays visible.
  static void show(
    BuildContext context, {
    required String title,
    String? description,
    CrossUIToastVariant variant = CrossUIToastVariant.info,
    Duration duration = const Duration(seconds: 4),
  }) {
    final overlay = Overlay.of(context);
    late OverlayEntry entry;

    entry = OverlayEntry(
      builder: (context) {
        return _ToastOverlay(
          onDismiss: () => entry.remove(),
          duration: duration,
          child: CrossUIToast(
            title: title,
            description: description,
            variant: variant,
          ),
        );
      },
    );

    overlay.insert(entry);
  }

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;

    Color backgroundColor;
    Color foregroundColor;
    IconData icon;

    switch (variant) {
      case CrossUIToastVariant.success:
        backgroundColor = theme.success;
        foregroundColor = Colors.white;
        icon = Icons.check_circle_outline;
        break;
      case CrossUIToastVariant.error:
        backgroundColor = theme.danger;
        foregroundColor = Colors.white;
        icon = Icons.error_outline;
        break;
      case CrossUIToastVariant.info:
        backgroundColor =
            theme.text; // Assuming dark for info as per spec "dark"
        foregroundColor = theme.background;
        icon = Icons.info_outline;
        break;
    }

    return Container(
      width: double.infinity,
      constraints: const BoxConstraints(maxWidth: 340),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.1),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, color: foregroundColor, size: 20),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    color: foregroundColor,
                    fontWeight: FontWeight.w600,
                    fontSize: CrossUITokens.fontSizeSm,
                  ),
                ),
                if (description != null) ...[
                  const SizedBox(height: 2),
                  Text(
                    description!,
                    style: TextStyle(
                      color: foregroundColor.withValues(alpha: 0.8),
                      fontSize: CrossUITokens.fontSizeXs,
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

class _ToastOverlay extends StatefulWidget {
  final Widget child;
  final VoidCallback onDismiss;
  final Duration duration;

  const _ToastOverlay({
    required this.child,
    required this.onDismiss,
    required this.duration,
  });

  @override
  State<_ToastOverlay> createState() => _ToastOverlayState();
}

class _ToastOverlayState extends State<_ToastOverlay>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _opacity;
  late Animation<Offset> _offset;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 300),
    );

    _opacity = CurvedAnimation(parent: _controller, curve: Curves.easeOut);
    _offset = Tween<Offset>(
      begin: const Offset(0, 0.5),
      end: Offset.zero,
    ).animate(CurvedAnimation(parent: _controller, curve: Curves.easeOut));

    _controller.forward();

    Future.delayed(widget.duration, () async {
      if (mounted) {
        await _controller.reverse();
        widget.onDismiss();
      }
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Positioned(
      bottom: 60,
      left: 16,
      right: 16,
      child: Center(
        child: FadeTransition(
          opacity: _opacity,
          child: SlideTransition(
            position: _offset,
            child: Material(
              color: Colors.transparent,
              child: widget.child,
            ),
          ),
        ),
      ),
    );
  }
}
