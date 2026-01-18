import 'package:flutter/material.dart';
import '../theme/tokens.dart';
import '../theme/crossui_theme.dart';

class CrossUIBreadcrumb extends StatelessWidget {
  final List<Widget> children;

  const CrossUIBreadcrumb({
    Key? key,
    required this.children,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Wrap(
      crossAxisAlignment: WrapCrossAlignment.center,
      children: children,
    );
  }
}

class CrossUIBreadcrumbItem extends StatelessWidget {
  final Widget child;

  const CrossUIBreadcrumbItem({
    Key? key,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return child;
  }
}

class CrossUIBreadcrumbLink extends StatelessWidget {
  final String text;
  final VoidCallback? onPressed;
  final bool isCurrentPage;

  const CrossUIBreadcrumbLink({
    Key? key,
    required this.text,
    this.onPressed,
    this.isCurrentPage = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;

    // Determine color based on whether it is the current page or a link
    final textColor = isCurrentPage
        ? theme.text // Active/Current page
        : theme.textMuted; // Inactive/Link

    return GestureDetector(
      onTap: isCurrentPage ? null : onPressed,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 4.0),
        child: Text(
          text,
          style: TextStyle(
            color: textColor,
            fontSize: CrossUITokens.fontSizeSm,
            fontWeight: isCurrentPage ? FontWeight.w600 : FontWeight.normal,
          ),
        ),
      ),
    );
  }
}

class CrossUIBreadcrumbSeparator extends StatelessWidget {
  const CrossUIBreadcrumbSeparator({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;
    return Icon(
      Icons.chevron_right,
      size: 16,
      color: theme.textMuted,
    );
  }
}

class CrossUIBreadcrumbEllipsis extends StatelessWidget {
  const CrossUIBreadcrumbEllipsis({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 4.0),
      child: Icon(
        Icons.more_horiz,
        size: 16,
        color: theme.textMuted,
      ),
    );
  }
}
