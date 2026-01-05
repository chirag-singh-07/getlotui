import 'package:flutter/material.dart';
import '../theme/tokens.dart';
import '../theme/crossui_theme.dart';

class CrossUICard extends StatelessWidget {
  final String? title;
  final String? description;
  final Widget content;
  final VoidCallback? onPress;

  const CrossUICard({
    Key? key,
    required this.content,
    this.title,
    this.description,
    this.onPress,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;

    return InkWell(
      onTap: onPress,
      borderRadius: BorderRadius.circular(CrossUITokens.radiusLarge),
      child: Container(
        decoration: BoxDecoration(
          color: theme.surface,
          borderRadius: BorderRadius.circular(CrossUITokens.radiusLarge),
          border: Border.all(color: theme.border),
          // Do we want shadow in dark mode? Maybe less or different.
          // For now keep standard shadow but maybe lighter opacity or none.
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: 0.05),
              blurRadius: 10,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            if (title != null || description != null)
              Padding(
                padding: const EdgeInsets.all(CrossUITokens.spacingL),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    if (title != null) ...[
                      Text(
                        title!,
                        style: TextStyle(
                          fontSize: CrossUITokens.fontSize2xl,
                          fontWeight: FontWeight.bold,
                          color: theme.text,
                        ),
                      ),
                    ],
                    if (description != null) ...[
                      const SizedBox(height: 4),
                      Text(
                        description!,
                        style: TextStyle(
                          fontSize: CrossUITokens.fontSizeSm,
                          color: theme.textMuted,
                        ),
                      ),
                    ],
                  ],
                ),
              ),
            Padding(
              padding: const EdgeInsets.symmetric(
                  horizontal: CrossUITokens.spacingL),
              child: content,
            ),
            const SizedBox(height: CrossUITokens.spacingL),
          ],
        ),
      ),
    );
  }
}
