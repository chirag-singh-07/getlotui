import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  Text as RNText,
} from "react-native";
import {
  Button,
  Input,
  OTPInput,
  Checkbox,
  Radio,
  Switch,
  ThemeProvider,
  Text as CrossText,
  Alert as CrossAlert,
  ToastProvider,
  useToast,
  Dialog,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@crossui/expo";
import { useState } from "react";

function MainContent() {
  const { show } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");
  const [otp, setOtp] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(1);
  const [switchValue, setSwitchValue] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <RNText style={styles.headerTitle}>UI Playground</RNText>
          <RNText style={styles.headerSubtitle}>
            Universal JSON Design System
          </RNText>

          {/* New Components Section */}
          <CrossText variant="h3" style={{ marginBottom: 16 }}>
            🆕 New Components
          </CrossText>

          {/* Typography Section */}
          <Card style={{ marginBottom: 24 }}>
            <CardHeader>
              <CardTitle>📊 Typography</CardTitle>
              <CardDescription>
                Standard font variants and styles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CrossText variant="h1">Heading 1</CrossText>
              <CrossText variant="h2">Heading 2</CrossText>
              <CrossText variant="h3">Heading 3</CrossText>
              <CrossText variant="h4">Heading 4</CrossText>
              <CrossText variant="h5">Heading 5</CrossText>
              <CrossText variant="h6">Heading 6</CrossText>
              <CrossText variant="body">Body text with default theme</CrossText>
              <CrossText variant="subtitle">Subtitle text</CrossText>
              <CrossText variant="caption">Caption text</CrossText>
              <CrossText variant="muted">Muted text</CrossText>
              <CrossText variant="code">const crossUI = true;</CrossText>
            </CardContent>
          </Card>

          {/* Alerts Section */}
          <Card style={{ marginBottom: 24 }}>
            <CardHeader>
              <CardTitle>🔔 Alerts</CardTitle>
              <CardDescription>
                Inline feedback for various states
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={{ gap: 12 }}>
                <CrossAlert
                  title="Informational Alert"
                  variant="info"
                  description="This is a neutral message."
                />
                <CrossAlert
                  title="Success Alert"
                  variant="success"
                  description="Operation completed successfully."
                />
                <CrossAlert
                  title="Warning Alert"
                  variant="warning"
                  description="Please be careful with this action."
                />
                <CrossAlert
                  title="Error Alert"
                  variant="error"
                  description="Something went wrong!"
                />
              </View>
            </CardContent>
          </Card>

          {/* Toasts Section */}
          <Card style={{ marginBottom: 24 }}>
            <CardHeader>
              <CardTitle>🍞 Toasts</CardTitle>
              <CardDescription>
                Brief, ephemeral snackbar notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View style={styles.row}>
                <Button
                  title="Info Toast"
                  onPress={() => show("Information message")}
                />
                <Button
                  title="Success"
                  variant="success"
                  onPress={() => show("Success!", { variant: "success" })}
                />
                <Button
                  title="Error"
                  variant="danger"
                  onPress={() => show("Error!", { variant: "error" })}
                />
              </View>
            </CardContent>
          </Card>

          {/* Dialog Section */}
          <Card style={{ marginBottom: 24 }}>
            <CardHeader>
              <CardTitle>🪟 Dialog (Modal)</CardTitle>
              <CardDescription>
                Overlay for focused user interaction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                title="Open Dialog"
                onPress={() => setDialogVisible(true)}
              />
              <Dialog
                visible={dialogVisible}
                onClose={() => setDialogVisible(false)}
                title="Confirm Custom Action"
                description="This is a CrossUI Dialog component with custom children."
              >
                <View
                  style={{
                    padding: 10,
                    backgroundColor: "#f9fafb",
                    borderRadius: 8,
                    marginTop: 8,
                  }}
                >
                  <CrossText variant="body">
                    Custom content inside dialog!
                  </CrossText>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    marginTop: 16,
                    gap: 10,
                  }}
                >
                  <Button
                    title="Cancel"
                    variant="outlinePrimary"
                    onPress={() => setDialogVisible(false)}
                  />
                  <Button
                    title="Confirm"
                    onPress={() => {
                      setDialogVisible(false);
                      show("Action confirmed!", { variant: "success" });
                    }}
                  />
                </View>
              </Dialog>
            </CardContent>
          </Card>

          {/* Dropdown Section */}
          <Card style={{ marginBottom: 24 }}>
            <CardHeader>
              <CardTitle>🔽 Dropdown Menu</CardTitle>
              <CardDescription>Contextual lists of actions</CardDescription>
            </CardHeader>
            <CardContent>
              <Dropdown>
                <DropdownTrigger>
                  <Button title="Open Menu" />
                </DropdownTrigger>
                <DropdownContent>
                  <DropdownItem
                    icon="person-outline"
                    onSelect={() => show("Profile selected")}
                  >
                    Profile
                  </DropdownItem>
                  <DropdownItem
                    icon="settings-outline"
                    onSelect={() => show("Settings selected")}
                  >
                    Settings
                  </DropdownItem>
                  <DropdownItem
                    icon="trash-outline"
                    destructive
                    onSelect={() =>
                      show("Delete selected", { variant: "error" })
                    }
                  >
                    Delete
                  </DropdownItem>
                </DropdownContent>
              </Dropdown>
            </CardContent>
          </Card>

          <CrossText variant="h3" style={{ marginBottom: 16, marginTop: 16 }}>
            🛠️ Original Components
          </CrossText>

          {/* OTP Input Section */}
          <Card style={{ marginBottom: 24 }}>
            <RNText style={styles.sectionTitle}>🔐 OTP Input</RNText>
            <RNText style={styles.sectionDesc}>
              Animated one-time password input with auto-focus.
            </RNText>

            <View style={{ marginBottom: 20 }}>
              <RNText style={styles.inputLabel}>Enter 6-digit code</RNText>
              <OTPInput
                length={6}
                value={otp}
                onChange={setOtp}
                onComplete={(code) =>
                  show(`OTP Complete: ${code}`, { variant: "success" })
                }
                size="md"
              />
            </View>
          </Card>

          {/* Enhanced Inputs Section */}
          <Card style={{ marginBottom: 24 }}>
            <RNText style={styles.sectionTitle}>📝 Enhanced Inputs</RNText>
            <RNText style={styles.sectionDesc}>
              Inputs with icons, animations, and helper text.
            </RNText>

            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChangeText={setEmail}
              leftIcon="mail-outline"
              helperText="We'll never share your email"
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter securely"
              value={password}
              onChangeText={setPassword}
              leftIcon="lock-closed-outline"
            />

            <Input
              label="Search"
              placeholder="Search anything..."
              value={search}
              onChangeText={setSearch}
              leftIcon="search-outline"
              rightIcon="close-circle"
              onRightIconPress={() => setSearch("")}
              helperText="Press X to clear"
            />
          </Card>

          {/* Selecting Section */}
          <Card style={{ marginBottom: 24 }}>
            <RNText style={styles.sectionTitle}>✅ Selection Controls</RNText>

            <View style={styles.controlRow}>
              <Checkbox checked={isChecked} onChange={setIsChecked} />
              <RNText style={styles.controlLabel}>
                Accept Terms & Conditions
              </RNText>
            </View>

            <View style={styles.controlRow}>
              <Switch value={switchValue} onChange={setSwitchValue} />
              <RNText style={styles.controlLabel}>Enable Notifications</RNText>
            </View>

            <RNText style={[styles.sectionDesc, { marginTop: 16 }]}>
              Radio Group
            </RNText>
            <View style={styles.controlRow}>
              <Radio
                selected={radioValue === 1}
                onPress={() => setRadioValue(1)}
              />
              <RNText style={styles.controlLabel}>Option 1</RNText>
              <View style={{ width: 16 }} />
              <Radio
                selected={radioValue === 2}
                onPress={() => setRadioValue(2)}
              />
              <RNText style={styles.controlLabel}>Option 2</RNText>
            </View>
          </Card>

          {/* Existing Buttons Section */}
          <Card style={{ marginBottom: 24 }}>
            <RNText style={styles.sectionTitle}>✨ Buttons (Existing)</RNText>
            <View style={styles.row}>
              <Button title="Login" variant="primary" />
              <Button title="Sign Up" variant="secondary" />
            </View>
          </Card>

          <View style={{ height: 60 }} />
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <MainContent />
      </ToastProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F2F3F5",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  scrollContent: {
    padding: 24,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 32,
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 4,
  },
  sectionDesc: {
    fontSize: 14,
    color: "#9CA3AF",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  controlRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  controlLabel: {
    marginLeft: 12,
    fontSize: 16,
    color: "#374151",
    fontWeight: "500",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 12,
  },
});
