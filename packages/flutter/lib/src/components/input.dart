import 'package:flutter/material.dart';
import '../theme/tokens.dart';
import '../theme/crossui_theme.dart';

class CrossUIInput extends StatelessWidget {
  final String? placeholder;
  final TextEditingController? controller;
  final bool obscureText;
  final TextInputType? keyboardType;
  final void Function(String)? onChanged;
  final bool disabled;
  final String? label;

  const CrossUIInput({
    Key? key,
    this.placeholder,
    this.controller,
    this.obscureText = false,
    this.keyboardType,
    this.onChanged,
    this.disabled = false,
    this.label,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (label != null) ...[
          Text(
            label!,
            style: TextStyle(
              fontSize: CrossUITokens.fontSizeSm,
              fontWeight: FontWeight.w600,
              color: theme.text,
            ),
          ),
          const SizedBox(height: CrossUITokens.spacingXs),
        ],
        TextField(
          controller: controller,
          obscureText: obscureText,
          keyboardType: keyboardType,
          onChanged: onChanged,
          enabled: !disabled,
          style: TextStyle(
            fontSize: CrossUITokens.fontSizeBase,
            color: theme.text, // Input text color
          ),
          decoration: InputDecoration(
            hintText: placeholder,
            hintStyle: TextStyle(color: theme.textMuted),
            contentPadding: const EdgeInsets.symmetric(
              horizontal: CrossUITokens.spacingM,
              vertical: CrossUITokens.spacingM,
            ),
            filled: true,
            fillColor: disabled ? theme.background : theme.surface,
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
              borderSide: BorderSide(color: theme.border),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
              borderSide: BorderSide(color: theme.primary, width: 2),
            ),
            disabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
              borderSide:
                  BorderSide(color: theme.border.withValues(alpha: 0.5)),
            ),
          ),
        ),
      ],
    );
  }
}
