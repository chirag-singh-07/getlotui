import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { ChevronRight, MoreHorizontal } from "lucide-react-native";
import breadcrumbSpec from "@crossui/core/components/breadcrumb.json";
import colors from "@crossui/core/tokens/colors.json";
import spacing from "@crossui/core/tokens/spacing.json";

// Types
export interface BreadcrumbProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export interface BreadcrumbItemProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export interface BreadcrumbLinkProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}

export interface BreadcrumbPageProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export interface BreadcrumbSeparatorProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

export interface BreadcrumbEllipsisProps {
  style?: ViewStyle;
}

// Components
export function Breadcrumb({ children, style }: BreadcrumbProps) {
  return <View style={[styles.list, style]}>{children}</View>;
}

export function BreadcrumbItem({ children, style }: BreadcrumbItemProps) {
  return <View style={[styles.item, style]}>{children}</View>;
}

export function BreadcrumbLink({
  children,
  onPress,
  style,
}: BreadcrumbLinkProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Text style={[styles.link, style]}>{children}</Text>
    </TouchableOpacity>
  );
}

export function BreadcrumbPage({ children, style }: BreadcrumbPageProps) {
  return <Text style={[styles.page, style]}>{children}</Text>;
}

export function BreadcrumbSeparator({
  children,
  style,
}: BreadcrumbSeparatorProps) {
  const iconColor =
    colors[
      breadcrumbSpec.variants.default.separatorColor as keyof typeof colors
    ];

  return (
    <View style={[styles.separator, style]}>
      {children ?? <ChevronRight size={16} color={iconColor} />}
    </View>
  );
}

export function BreadcrumbEllipsis({ style }: BreadcrumbEllipsisProps) {
  const iconColor =
    colors[
      breadcrumbSpec.variants.default.separatorColor as keyof typeof colors
    ];

  return (
    <View style={[styles.ellipsis, style]}>
      <MoreHorizontal size={16} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 8, // approximated from gap-xs
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  link: {
    fontSize: 14,
    color:
      colors[breadcrumbSpec.variants.default.textColor as keyof typeof colors],
    fontWeight: "500",
  },
  page: {
    fontSize: 14,
    color:
      colors[
        breadcrumbSpec.variants.default.activeColor as keyof typeof colors
      ],
    fontWeight: "500",
  },
  separator: {
    opacity: 0.5,
  },
  ellipsis: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
  },
});
