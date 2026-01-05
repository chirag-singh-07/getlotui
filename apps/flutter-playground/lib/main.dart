import 'package:flutter/material.dart';
import 'package:crossui_flutter/crossui_flutter.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const CrossUIPlayground());
}

class CrossUIPlayground extends StatelessWidget {
  const CrossUIPlayground({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CrossUI Flutter Playground',
      theme: ThemeData(
        useMaterialDesign: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF6366f1),
          brightness: Brightness.dark,
        ),
        textTheme: GoogleFonts.interTextTheme(ThemeData.dark().textTheme),
      ),
      home: const PlaygroundHome(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class PlaygroundHome extends StatefulWidget {
  const PlaygroundHome({super.key});

  @override
  State<PlaygroundHome> createState() => _PlaygroundHomeState();
}

class _PlaygroundHomeState extends State<PlaygroundHome> {
  final TextEditingController _inputController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0F172A),
      appBar: AppBar(
        title: Text(
          'CrossUI Playground',
          style: GoogleFonts.outfit(fontWeight: FontWeight.bold),
        ),
        backgroundColor: Colors.transparent,
        elevation: 0,
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <>[
            const _SectionHeader(title: 'Typography'),
            const CrossUIText(
              'Heading 1',
              variant: CrossUITextVariant.h1,
            ),
            const SizedBox(height: 8),
            const CrossUIText(
              'Heading 2',
              variant: CrossUITextVariant.h2,
            ),
            const SizedBox(height: 8),
            const CrossUIText(
              'Heading 3',
              variant: CrossUITextVariant.h3,
            ),
            const SizedBox(height: 8),
            const CrossUIText(
              'This is body text. Cross-platform, theme-driven UI system powered by JSON design tokens.',
              variant: CrossUITextVariant.body,
            ),
            const SizedBox(height: 8),
            const CrossUIText(
              'Muted text for secondary information.',
              variant: CrossUITextVariant.muted,
            ),
            
            const SizedBox(height: 48),
            const _SectionHeader(title: 'Buttons'),
            Wrap(
              spacing: 12,
              runSpacing: 12,
              children: <>[
                CrossUIButton(
                  label: 'Primary',
                  onPressed: () {},
                  variant: CrossUIButtonVariant.primary,
                ),
                CrossUIButton(
                  label: 'Secondary',
                  onPressed: () {},
                  variant: CrossUIButtonVariant.secondary,
                ),
                CrossUIButton(
                  label: 'Outline',
                  onPressed: () {},
                  variant: CrossUIButtonVariant.outline,
                ),
                CrossUIButton(
                  label: 'Ghost',
                  onPressed: () {},
                  variant: CrossUIButtonVariant.ghost,
                ),
                CrossUIButton(
                  label: 'Destructive',
                  onPressed: () {},
                  variant: CrossUIButtonVariant.destructive,
                ),
              ],
            ),
            const SizedBox(height: 24),
            Row(
              children: <>[
                CrossUIButton(
                  label: 'Small',
                  onPressed: () {},
                  size: CrossUIButtonSize.sm,
                ),
                const SizedBox(width: 12),
                CrossUIButton(
                  label: 'Default',
                  onPressed: () {},
                  size: CrossUIButtonSize.md,
                ),
                const SizedBox(width: 12),
                CrossUIButton(
                  label: 'Large',
                  onPressed: () {},
                  size: CrossUIButtonSize.lg,
                ),
              ],
            ),

            const SizedBox(height: 48),
            const _SectionHeader(title: 'Alerts'),
            const CrossUIAlert(
              title: 'Information',
              description: 'This is an informative message for the user.',
              variant: CrossUIAlertVariant.info,
            ),
            const SizedBox(height: 16),
            const CrossUIAlert(
              title: 'Success',
              description: 'The operation was completed successfully.',
              variant: CrossUIAlertVariant.success,
            ),
            const SizedBox(height: 16),
            const CrossUIAlert(
              title: 'Warning',
              description: 'Please review the settings before proceeding.',
              variant: CrossUIAlertVariant.warning,
            ),
            const SizedBox(height: 16),
            const CrossUIAlert(
              title: 'Error',
              description: 'An unexpected error occurred. Please try again.',
              variant: CrossUIAlertVariant.error,
            ),

            const SizedBox(height: 48),
            const _SectionHeader(title: 'Cards'),
            const CrossUICard(
              title: 'Project Alpha',
              description: 'Last edited 2 hours ago',
              content: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <>[
                  Text(
                    'This card demonstrates the standard modular structure of CrossUI components.',
                    style: TextStyle(color: Colors.white70),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),
            CrossUICard(
              title: 'Interactive Card',
              description: 'Clickable example',
              onPress: () {},
              content: const Text(
                'This card has a hover/press effect and can trigger actions.',
                style: TextStyle(color: Colors.white70),
              ),
            ),

            const SizedBox(height: 48),
            const _SectionHeader(title: 'Inputs'),
            CrossUIInput(
              placeholder: 'Enter your email',
              controller: _inputController,
            ),
            const SizedBox(height: 16),
            const CrossUIInput(
              placeholder: 'Password',
              obscureText: true,
            ),
            const SizedBox(height: 16),
            const CrossUIInput(
              placeholder: 'Disabled input',
              enabled: false,
            ),
            
            const SizedBox(height: 100), // Spacing at bottom
          ],
        ),
      ),
    );
  }
}

class _SectionHeader extends StatelessWidget {
  final String title;
  const _SectionHeader({required this.title});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 24.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <>[
          Text(
            title,
            style: GoogleFonts.outfit(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: const Color(0xFF6366f1),
            ),
          ),
          Container(
            margin: const EdgeInsets.only(top: 8),
            height: 2,
            width: 40,
            color: const Color(0xFF6366f1).withOpacity(0.5),
          ),
        ],
      ),
    );
  }
}
