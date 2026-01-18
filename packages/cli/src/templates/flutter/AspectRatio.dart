import 'package:flutter/material.dart';

enum CrossUIAspectRatioVariant { square, landscape, portrait, wide, ultrawide }

class CrossUIAspectRatio extends StatelessWidget {
  final Widget child;
  final double? ratio;
  final CrossUIAspectRatioVariant variant;

  const CrossUIAspectRatio({
    Key? key,
    required this.child,
    this.ratio,
    this.variant = CrossUIAspectRatioVariant.landscape,
  }) : super(key: key);

  double get _aspectRatio {
    if (ratio != null) return ratio!;

    switch (variant) {
      case CrossUIAspectRatioVariant.square:
        return 1.0;
      case CrossUIAspectRatioVariant.landscape:
        return 16 / 9;
      case CrossUIAspectRatioVariant.portrait:
        return 3 / 4;
      case CrossUIAspectRatioVariant.wide:
        return 21 / 9;
      case CrossUIAspectRatioVariant.ultrawide:
        return 32 / 9;
    }
  }

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: _aspectRatio,
      child: child,
    );
  }
}
