import 'package:flutter/material.dart';
import '../theme/tokens.dart';

class CrossUICard extends StatelessWidget {
  final Widget? header;
  final Widget? title;
  final Widget? description;
  final Widget child;
  final Widget? footer;
  final VoidCallback? onTap;

  const CrossUICard({
    Key? key,
    required this.child,
    this.header,
    this.title,
    this.description,
    this.footer,
    this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(CrossUITokens.radiusLarge),
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(CrossUITokens.radiusLarge),
          border: Border.all(color: CrossUITokens.border),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.05),
              blurRadius: 10,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            if (header != null || title != null || description != null)
              Padding(
                padding: const EdgeInsets.all(CrossUITokens.spacingL),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    if (header != null) header!,
                    if (title != null) ...[
                      DefaultTextStyle(
                        style: const TextStyle(
                          fontSize: CrossUITokens.fontSize2xl,
                          fontWeight: FontWeight.bold,
                          color: CrossUITokens.dark,
                        ),
                        child: title!,
                      ),
                    ],
                    if (description != null) ...[
                      const SizedBox(height: 4),
                      DefaultTextStyle(
                        style: const TextStyle(
                          fontSize: CrossUITokens.fontSizeSm,
                          color: Colors.grey,
                        ),
                        child: description!,
                      ),
                    ],
                  ],
                ),
              ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: CrossUITokens.spacingL),
              child: child,
            ),
            if (footer != null) ...[
              const SizedBox(height: CrossUITokens.spacingL),
              const Divider(height: 1),
              Padding(
                padding: const EdgeInsets.all(CrossUITokens.spacingL),
                child: footer!,
              ),
            ] else 
              const SizedBox(height: CrossUITokens.spacingL),
          ],
        ),
      ),
    );
  }
}
