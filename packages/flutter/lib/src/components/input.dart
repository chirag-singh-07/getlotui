import 'package:flutter/material.dart';
import '../theme/tokens.dart';

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
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (label != null) ...[
          Text(
            label!,
            style: const TextStyle(
              fontSize: CrossUITokens.fontSizeSm,
              fontWeight: FontWeight.w600,
              color: CrossUITokens.dark,
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
          style: const TextStyle(fontSize: CrossUITokens.fontSizeBase),
          decoration: InputDecoration(
            hintText: placeholder,
            hintStyle: const TextStyle(color: Color(0xFF94A3B8)),
            contentPadding: const EdgeInsets.symmetric(
              horizontal: CrossUITokens.spacingM,
              vertical: CrossUITokens.spacingM,
            ),
            filled: true,
            fillColor: disabled ? const Color(0xFFF1F5F9) : Colors.white,
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
              borderSide: const BorderSide(color: CrossUITokens.border),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
              borderSide: const BorderSide(color: CrossUITokens.primary, width: 2),
            ),
            disabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
              borderSide: const BorderSide(color: CrossUITokens.border),
            ),
          ),
        ),
      ],
    );
  }
}
