import React, { createContext, useState, useCallback } from "react";
import { View, StyleSheet, SafeAreaView, Platform } from "react-native";
import { Toast, ToastVariant } from "./Toast";
import toastSpec from "@crossui/core/components/toast.json";

type ToastOptions = {
  variant?: ToastVariant;
  duration?: number;
};

type ToastItem = {
  id: string;
  message: string;
} & ToastOptions;

type ToastContextType = {
  show: (message: string, options?: ToastOptions) => void;
  hide: (id: string) => void;
};

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const show = useCallback((message: string, options?: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, ...options }]);
  }, []);

  const hide = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ show, hide }}>
      {children}
      <View style={styles.toastContainer} pointerEvents="box-none">
        <SafeAreaView style={styles.safeArea} pointerEvents="box-none">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              id={toast.id}
              message={toast.message}
              variant={toast.variant}
              duration={toast.duration}
              onDismiss={hide}
            />
          ))}
        </SafeAreaView>
      </View>
    </ToastContext.Provider>
  );
}

const styles = StyleSheet.create({
  toastContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: toastSpec.position.bottom ? "flex-end" : "flex-start",
    zIndex: 9999,
  },
  safeArea: {
    flex: 1,
    justifyContent: "flex-end", // Adjust based on toastSpec.position logic if needed, but flex-end works for bottom toasts
    paddingBottom: toastSpec.position.bottom || 0,
    paddingTop: toastSpec.position.top || 0,
  },
});
