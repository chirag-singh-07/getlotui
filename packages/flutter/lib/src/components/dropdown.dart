import 'package:flutter/material.dart';
import '../theme/tokens.dart';
import '../theme/crossui_theme.dart';

class CrossUIDropdownItem<T> {
  final T value;
  final String label;
  final IconData? icon;

  const CrossUIDropdownItem({
    required this.value,
    required this.label,
    this.icon,
  });
}

class CrossUIDropdown<T> extends StatelessWidget {
  final Widget trigger;
  final List<CrossUIDropdownItem<T>> items;
  final ValueChanged<T>? onSelect;
  final String? label;

  const CrossUIDropdown({
    Key? key,
    required this.trigger,
    required this.items,
    this.onSelect,
    this.label,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;

    return PopupMenuButton<T>(
      child: trigger,
      onSelected: onSelect,
      offset: const Offset(0, 48),
      elevation: 8,
      color: theme.surface,
      shadowColor: Colors.black.withValues(alpha: 0.2),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
        side: BorderSide(color: theme.border, width: 0.5),
      ),
      itemBuilder: (context) {
        return items.map((item) {
          return PopupMenuItem<T>(
            value: item.value,
            height: 40,
            child: Row(
              children: [
                if (item.icon != null) ...[
                  Icon(item.icon, size: 18, color: theme.text),
                  const SizedBox(width: 12),
                ],
                Text(
                  item.label,
                  style: TextStyle(
                    color: theme.text,
                    fontSize: CrossUITokens.fontSizeSm,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          );
        }).toList();
      },
    );
  }
}
