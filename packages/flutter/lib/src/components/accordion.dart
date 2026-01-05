import 'package:flutter/material.dart';
import '../theme/tokens.dart';
import '../theme/crossui_theme.dart';

enum CrossUIAccordionType { single, multiple }

class CrossUIAccordionItem {
  final String value;
  final String trigger;
  final String content;

  const CrossUIAccordionItem({
    required this.value,
    required this.trigger,
    required this.content,
  });
}

class CrossUIAccordion extends StatefulWidget {
  final List<CrossUIAccordionItem> items;
  final CrossUIAccordionType type;
  final bool collapsible;
  final dynamic defaultValue; // String or List<String>

  const CrossUIAccordion({
    Key? key,
    required this.items,
    this.type = CrossUIAccordionType.single,
    this.collapsible = false,
    this.defaultValue,
  }) : super(key: key);

  @override
  State<CrossUIAccordion> createState() => _CrossUIAccordionState();
}

class _CrossUIAccordionState extends State<CrossUIAccordion> {
  late Set<String> _openItems;

  @override
  void initState() {
    super.initState();
    _openItems = {};

    if (widget.defaultValue != null) {
      if (widget.defaultValue is String) {
        _openItems.add(widget.defaultValue as String);
      } else if (widget.defaultValue is List) {
        _openItems.addAll((widget.defaultValue as List).cast<String>());
      }
    }
  }

  void _toggleItem(String value) {
    setState(() {
      if (widget.type == CrossUIAccordionType.single) {
        if (_openItems.contains(value)) {
          if (widget.collapsible) {
            _openItems.clear();
          }
        } else {
          _openItems.clear();
          _openItems.add(value);
        }
      } else {
        // multiple
        if (_openItems.contains(value)) {
          _openItems.remove(value);
        } else {
          _openItems.add(value);
        }
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;

    return Column(
      children: widget.items.asMap().entries.map((entry) {
        final index = entry.key;
        final item = entry.value;
        final isOpen = _openItems.contains(item.value);
        final isLast = index == widget.items.length - 1;

        return Container(
          decoration: BoxDecoration(
            border: Border(
              bottom: isLast
                  ? BorderSide.none
                  : BorderSide(
                      color: theme.border,
                      width: 1,
                    ),
            ),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              InkWell(
                onTap: () => _toggleItem(item.value),
                child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Expanded(
                        child: Text(
                          item.trigger,
                          style: TextStyle(
                            fontSize: CrossUITokens.fontSizeBase,
                            fontWeight: FontWeight.w500,
                            color: theme.text,
                          ),
                        ),
                      ),
                      AnimatedRotation(
                        turns: isOpen ? 0.75 : 0.25,
                        duration: const Duration(milliseconds: 200),
                        child: Icon(
                          Icons.chevron_right,
                          color: theme.text,
                          size: 20,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              AnimatedCrossFade(
                firstChild: const SizedBox.shrink(),
                secondChild: Padding(
                  padding: const EdgeInsets.only(bottom: 16),
                  child: Text(
                    item.content,
                    style: TextStyle(
                      fontSize: CrossUITokens.fontSizeSm,
                      color: theme.textMuted,
                      height: 1.5,
                    ),
                  ),
                ),
                crossFadeState: isOpen
                    ? CrossFadeState.showSecond
                    : CrossFadeState.showFirst,
                duration: const Duration(milliseconds: 200),
              ),
            ],
          ),
        );
      }).toList(),
    );
  }
}
