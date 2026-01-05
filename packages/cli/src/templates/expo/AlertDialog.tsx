import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";

export interface AlertDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  title: string;
  description: string;
  cancelText?: string;
  actionText?: string;
  onAction?: () => void;
}

export const AlertDialog = ({
  open: controlledOpen,
  onOpenChange,
  trigger,
  title,
  description,
  cancelText = "Cancel",
  actionText = "Continue",
  onAction,
}: AlertDialogProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const setOpen = (val: boolean) => {
    if (onOpenChange) onOpenChange(val);
    setInternalOpen(val);
  };

  return (
    <>
      {trigger && (
        <Pressable onPress={() => setOpen(true)}>{trigger}</Pressable>
      )}

      <Modal
        transparent
        visible={isOpen}
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
          <Pressable
            style={styles.content}
            onPress={(e) => e.stopPropagation()}
          >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>

            <View style={styles.footer}>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={() => setOpen(false)}
              >
                <Text style={styles.cancelButtonText}>{cancelText}</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.actionButton]}
                onPress={() => {
                  onAction?.();
                  setOpen(false);
                }}
              >
                <Text style={styles.actionButtonText}>{actionText}</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 24,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#18181b",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#71717a",
    lineHeight: 20,
    marginBottom: 24,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    minWidth: 80,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e4e4e7",
  },
  actionButton: {
    backgroundColor: "#18181b",
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#18181b",
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
});
