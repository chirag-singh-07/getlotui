import 'package:flutter/material.dart';

enum CrossUIButtonGroupOrientation { horizontal, vertical }

class CrossUIButtonGroup extends StatelessWidget {
  final List<Widget> children;
  final CrossUIButtonGroupOrientation orientation;

  const CrossUIButtonGroup({
    Key? key,
    required this.children,
    this.orientation = CrossUIButtonGroupOrientation.horizontal,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Flex(
      direction: orientation == CrossUIButtonGroupOrientation.horizontal
          ? Axis.horizontal
          : Axis.vertical,
      mainAxisSize: MainAxisSize.min,
      children: children,
    );
  }
}
