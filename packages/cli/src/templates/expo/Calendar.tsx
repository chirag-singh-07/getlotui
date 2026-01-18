import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import calendarSpec from "@crossui/core/components/calendar.json";
import colors from "@crossui/core/tokens/colors.json";
import spacing from "@crossui/core/tokens/spacing.json";
import radius from "@crossui/core/tokens/radius.json";

export interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  variant?: keyof typeof calendarSpec.variants;
  style?: ViewStyle;
}

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function Calendar({
  selected,
  onSelect,
  variant = calendarSpec.defaults.variant as keyof typeof calendarSpec.variants,
  style,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const config = calendarSpec.variants[variant];

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const isSelected = (day: number) => {
    return (
      selected &&
      selected.getDate() === day &&
      selected.getMonth() === month &&
      selected.getFullYear() === year
    );
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  const renderDays = () => {
    const days = [];
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<View key={`empty-${i}`} style={styles.dayCell} />);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const selectedDay = isSelected(i);
      const today = isToday(i);

      days.push(
        <TouchableOpacity
          key={`day-${i}`}
          style={[
            styles.dayCell,
            selectedDay && {
              backgroundColor:
                colors[config.selectedBackgroundColor as keyof typeof colors],
              borderRadius: radius.medium,
            },
            selectedDay &&
              config.selectedBorderColor && {
                borderWidth: 1,
                borderColor:
                  colors[config.selectedBorderColor as keyof typeof colors],
              },
          ]}
          onPress={() => onSelect?.(new Date(year, month, i))}
        >
          <Text
            style={[
              styles.dayText,
              { color: colors[config.textColor as keyof typeof colors] },
              today && {
                color: colors[config.todayTextColor as keyof typeof colors],
                fontWeight: "700",
              },
              selectedDay && {
                color: colors[config.selectedTextColor as keyof typeof colors],
              },
            ]}
          >
            {i}
          </Text>
        </TouchableOpacity>,
      );
    }

    return days;
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevMonth} style={styles.navButton}>
          <ChevronLeft size={20} color={colors.foreground} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {MONTHS[month]} {year}
        </Text>
        <TouchableOpacity onPress={handleNextMonth} style={styles.navButton}>
          <ChevronRight size={20} color={colors.foreground} />
        </TouchableOpacity>
      </View>

      <View style={styles.daysHeader}>
        {DAYS_OF_WEEK.map((day) => (
          <Text key={day} style={styles.dayHeaderText}>
            {day}
          </Text>
        ))}
      </View>

      <View style={styles.daysGrid}>{renderDays()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background,
    borderRadius: radius.large,
    width: 300,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.foreground,
  },
  navButton: {
    padding: 4,
  },
  daysHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
  },
  dayHeaderText: {
    width: 36,
    textAlign: "center",
    fontSize: 12,
    color: colors.mutedForeground,
    fontWeight: "500",
  },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  dayCell: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2,
    marginHorizontal: 2,
  },
  dayText: {
    fontSize: 14,
  },
});
