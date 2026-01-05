import React, { useState, useEffect, createContext, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Pressable,
} from "react-native";

type ToastType = "default" | "success" | "error";

interface Toast {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
}

interface ToastContextType {
  toast: (toast: Omit<Toast, "id">) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = ({
    title,
    description,
    type = "default",
  }: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <View style={styles.container} pointerEvents="box-none">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onRemove={() => removeToast(t.id)} />
        ))}
      </View>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

const ToastItem = ({
  toast,
  onRemove,
}: {
  toast: Toast;
  onRemove: () => void;
}) => {
  const opacity = useState(new Animated.Value(0))[0];
  const translateY = useState(new Animated.Value(20))[0];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 20,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => onRemove());
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const bgColors = {
    default: "white",
    success: "#f0fdf4",
    error: "#fef2f2",
  };

  return (
    <Animated.View
      style={[
        styles.toast,
        {
          opacity,
          transform: [{ translateY }],
          backgroundColor: bgColors[toast.type || "default"],
        },
      ]}
    >
      <View>
        <Text style={styles.title}>{toast.title}</Text>
        {toast.description && (
          <Text style={styles.description}>{toast.description}</Text>
        )}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    alignItems: "center",
  },
  toast: {
    width: "100%",
    maxWidth: 400,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e4e4e7",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#18181b",
  },
  description: {
    fontSize: 12,
    color: "#71717a",
    marginTop: 2,
  },
});
