import 'package:flutter/material.dart';
import '../theme/tokens.dart';
import '../theme/crossui_theme.dart';

enum CrossUITextVariant {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  body,
  subtitle,
  caption,
  muted,
  code
}

class CrossUIText extends StatelessWidget {
  final String text;
  final CrossUITextVariant variant;
  final Color? color;
  final TextAlign? textAlign;
  final FontWeight? fontWeight;

  const CrossUIText(
    this.text, {
    Key? key,
    this.variant = CrossUITextVariant.body,
    this.color,
    this.textAlign,
    this.fontWeight,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double fontSize;
    FontWeight defaultFontWeight = FontWeight.normal;
    // Default to theme text color
    Color defaultColor = color ?? context.theme.text;
    bool isCode = false;

    switch (variant) {
      case CrossUITextVariant.h1:
        fontSize = CrossUITokens.fontSize6xl;
        defaultFontWeight = FontWeight.w900;
        break;
      case CrossUITextVariant.h2:
        fontSize = CrossUITokens.fontSize4xl;
        defaultFontWeight = FontWeight.bold;
        break;
      case CrossUITextVariant.h3:
        fontSize = CrossUITokens.fontSize2xl;
        defaultFontWeight = FontWeight.bold;
        break;
      case CrossUITextVariant.h4:
        fontSize = CrossUITokens.fontSizeXl;
        defaultFontWeight = FontWeight.w600;
        break;
      case CrossUITextVariant.h5:
        fontSize = CrossUITokens.fontSizeLg;
        defaultFontWeight = FontWeight.w600;
        break;
      case CrossUITextVariant.h6:
        fontSize = CrossUITokens.fontSizeBase;
        defaultFontWeight = FontWeight.w600;
        break;
      case CrossUITextVariant.subtitle:
        fontSize = CrossUITokens.fontSizeLg;
        defaultColor = color ?? context.theme.textMuted;
        break;
      case CrossUITextVariant.caption:
        fontSize = CrossUITokens.fontSizeXs;
        defaultColor = color ?? context.theme.textMuted;
        break;
      case CrossUITextVariant.muted:
        fontSize = CrossUITokens.fontSizeSm;
        defaultColor = color ?? context.theme.textMuted;
        break;
      case CrossUITextVariant.code:
        fontSize = CrossUITokens.fontSizeSm;
        isCode = true;
        break;
      case CrossUITextVariant.body:
        fontSize = CrossUITokens.fontSizeBase;
        break;
    }

    return Text(
      text,
      textAlign: textAlign,
      style: TextStyle(
        fontSize: fontSize,
        fontWeight: fontWeight ?? defaultFontWeight,
        color: defaultColor,
        fontFamily: isCode ? 'monospace' : null,
      ),
    );
  }
}
