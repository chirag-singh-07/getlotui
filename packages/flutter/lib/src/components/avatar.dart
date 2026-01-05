import 'package:flutter/material.dart';
import '../theme/crossui_theme.dart';

enum CrossUIAvatarSize { xs, sm, md, lg, xl, xxl }

class CrossUIAvatar extends StatelessWidget {
  final String? src;
  final String? fallback;
  final CrossUIAvatarSize size;

  const CrossUIAvatar({
    Key? key,
    this.src,
    this.fallback,
    this.size = CrossUIAvatarSize.md,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;

    double dimension;
    double fontSize;

    switch (size) {
      case CrossUIAvatarSize.xs:
        dimension = 24.0;
        fontSize = 10.0;
        break;
      case CrossUIAvatarSize.sm:
        dimension = 32.0;
        fontSize = 12.0;
        break;
      case CrossUIAvatarSize.lg:
        dimension = 48.0;
        fontSize = 16.0;
        break;
      case CrossUIAvatarSize.xl:
        dimension = 64.0;
        fontSize = 20.0;
        break;
      case CrossUIAvatarSize.xxl:
        dimension = 80.0;
        fontSize = 24.0;
        break;
      case CrossUIAvatarSize.md:
        dimension = 40.0;
        fontSize = 14.0;
        break;
    }

    return Container(
      width: dimension,
      height: dimension,
      decoration: BoxDecoration(
        color: theme.secondary.withValues(alpha: 0.1),
        shape: BoxShape.circle,
        border: Border.all(color: theme.border, width: 1),
      ),
      clipBehavior: Clip.antiAlias,
      child: src != null
          ? Image.network(
              src!,
              fit: BoxFit.cover,
              errorBuilder: (context, error, stackTrace) =>
                  _buildFallback(theme, fontSize),
            )
          : _buildFallback(theme, fontSize),
    );
  }

  Widget _buildFallback(CrossUIThemeData theme, double fontSize) {
    return Center(
      child: Text(
        fallback?.substring(0, fallback!.length >= 2 ? 2 : 1).toUpperCase() ??
            "??",
        style: TextStyle(
          color: theme.secondary,
          fontSize: fontSize,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }
}
