import 'package:flutter/material.dart';
import '../theme/crossui_theme.dart';

class CrossUICarousel extends StatefulWidget {
  final List<Widget> items;
  final Axis orientation;
  final bool showButtons;
  final double height;

  const CrossUICarousel({
    Key? key,
    required this.items,
    this.orientation = Axis.horizontal,
    this.showButtons = true,
    this.height = 200,
  }) : super(key: key);

  @override
  _CrossUICarouselState createState() => _CrossUICarouselState();
}

class _CrossUICarouselState extends State<CrossUICarousel> {
  late PageController _pageController;
  int _currentPage = 0;

  @override
  void initState() {
    super.initState();
    _pageController = PageController();
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        SizedBox(
          height: widget.height,
          child: Stack(
            children: [
              PageView.builder(
                controller: _pageController,
                scrollDirection: widget.orientation,
                onPageChanged: (int page) {
                  setState(() {
                    _currentPage = page;
                  });
                },
                itemCount: widget.items.length,
                itemBuilder: (context, index) {
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4.0),
                    child: widget.items[index],
                  );
                },
              ),
              if (widget.showButtons) ...[
                Positioned(
                  left: 8,
                  top: 0,
                  bottom: 0,
                  child: Center(
                    child: IconButton(
                      onPressed: _currentPage > 0
                          ? () => _pageController.previousPage(
                                duration: const Duration(milliseconds: 300),
                                curve: Curves.easeInOut,
                              )
                          : null,
                      icon: Icon(
                        Icons.chevron_left,
                        color: _currentPage > 0 ? theme.text : theme.textMuted,
                      ),
                      style: IconButton.styleFrom(
                        backgroundColor:
                            theme.background.withValues(alpha: 0.8),
                      ),
                    ),
                  ),
                ),
                Positioned(
                  right: 8,
                  top: 0,
                  bottom: 0,
                  child: Center(
                    child: IconButton(
                      onPressed: _currentPage < widget.items.length - 1
                          ? () => _pageController.nextPage(
                                duration: const Duration(milliseconds: 300),
                                curve: Curves.easeInOut,
                              )
                          : null,
                      icon: Icon(
                        Icons.chevron_right,
                        color: _currentPage < widget.items.length - 1
                            ? theme.text
                            : theme.textMuted,
                      ),
                      style: IconButton.styleFrom(
                        backgroundColor:
                            theme.background.withValues(alpha: 0.8),
                      ),
                    ),
                  ),
                ),
              ],
            ],
          ),
        ),
        const SizedBox(height: 12),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: List.generate(
            widget.items.length,
            (index) => Container(
              margin: const EdgeInsets.symmetric(horizontal: 4),
              width: _currentPage == index ? 20 : 8,
              height: 8,
              decoration: BoxDecoration(
                color: _currentPage == index ? theme.primary : theme.border,
                borderRadius: BorderRadius.circular(4),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
