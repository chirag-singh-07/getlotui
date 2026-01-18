import 'package:flutter/material.dart';
import '../theme/crossui_theme.dart';
import '../theme/tokens.dart';

class CrossUICalendar extends StatefulWidget {
  final DateTime? selectedDate;
  final ValueChanged<DateTime>? onDateSelected;
  final DateTime? initialDate;

  const CrossUICalendar({
    Key? key,
    this.selectedDate,
    this.onDateSelected,
    this.initialDate,
  }) : super(key: key);

  @override
  _CrossUICalendarState createState() => _CrossUICalendarState();
}

class _CrossUICalendarState extends State<CrossUICalendar> {
  late DateTime _currentMonth;

  @override
  void initState() {
    super.initState();
    _currentMonth = widget.initialDate ?? widget.selectedDate ?? DateTime.now();
  }

  void _prevMonth() {
    setState(() {
      _currentMonth = DateTime(_currentMonth.year, _currentMonth.month - 1);
    });
  }

  void _nextMonth() {
    setState(() {
      _currentMonth = DateTime(_currentMonth.year, _currentMonth.month + 1);
    });
  }

  @override
  Widget build(BuildContext context) {
    final theme = context.theme;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: theme.background,
        borderRadius: BorderRadius.circular(CrossUITokens.radiusLarge),
        border: Border.all(color: theme.border.withValues(alpha: 0.5)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          _buildHeader(theme),
          const SizedBox(height: 16),
          _buildDaysOfWeek(theme),
          const SizedBox(height: 8),
          _buildCalendarGrid(theme),
        ],
      ),
    );
  }

  Widget _buildHeader(CrossUIThemeData theme) {
    final monthName = _getMonthName(_currentMonth.month);
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        IconButton(
          icon: Icon(Icons.chevron_left, color: theme.text),
          onPressed: _prevMonth,
          visualDensity: VisualDensity.compact,
        ),
        Text(
          '$monthName ${_currentMonth.year}',
          style: TextStyle(
            color: theme.text,
            fontSize: 16,
            fontWeight: FontWeight.w600,
          ),
        ),
        IconButton(
          icon: Icon(Icons.chevron_right, color: theme.text),
          onPressed: _nextMonth,
          visualDensity: VisualDensity.compact,
        ),
      ],
    );
  }

  Widget _buildDaysOfWeek(CrossUIThemeData theme) {
    final days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: days
          .map((day) => Container(
                width: 36,
                alignment: Alignment.center,
                child: Text(
                  day,
                  style: TextStyle(
                    color: theme.textMuted,
                    fontSize: 12,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ))
          .toList(),
    );
  }

  Widget _buildCalendarGrid(CrossUIThemeData theme) {
    final firstDayOfMonth =
        DateTime(_currentMonth.year, _currentMonth.month, 1);
    final daysInMonth =
        DateTime(_currentMonth.year, _currentMonth.month + 1, 0).day;
    final startWeekday = firstDayOfMonth.weekday % 7;

    final List<Widget> dayWidgets = [];

    // Empty cells
    for (int i = 0; i < startWeekday; i++) {
      dayWidgets.add(const SizedBox(width: 36, height: 36));
    }

    // Days
    for (int day = 1; day <= daysInMonth; day++) {
      final date = DateTime(_currentMonth.year, _currentMonth.month, day);
      final isSelected = widget.selectedDate != null &&
          widget.selectedDate!.year == date.year &&
          widget.selectedDate!.month == date.month &&
          widget.selectedDate!.day == date.day;

      final isToday = DateTime.now().year == date.year &&
          DateTime.now().month == date.month &&
          DateTime.now().day == date.day;

      dayWidgets.add(
        GestureDetector(
          onTap: () => widget.onDateSelected?.call(date),
          child: Container(
            width: 36,
            height: 36,
            margin: const EdgeInsets.symmetric(vertical: 2, horizontal: 2),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: isSelected ? theme.primary : Colors.transparent,
              borderRadius: BorderRadius.circular(CrossUITokens.radiusMedium),
            ),
            child: Text(
              '$day',
              style: TextStyle(
                color: isSelected
                    ? theme.onPrimary
                    : (isToday ? theme.primary : theme.text),
                fontSize: 14,
                fontWeight: (isToday || isSelected)
                    ? FontWeight.w700
                    : FontWeight.normal,
              ),
            ),
          ),
        ),
      );
    }

    return Wrap(
      children: dayWidgets,
    );
  }

  String _getMonthName(int month) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return months[month - 1];
  }
}
