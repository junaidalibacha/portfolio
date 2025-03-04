import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_web_plugins/url_strategy.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:portfolio/src/app.dart';
import 'package:portfolio/src/app_startup.dart';
import 'package:portfolio/src/localization/app_localizations.dart';
import 'package:portfolio/src/localization/locale_controller.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  EasyLocalization.logger.enableBuildModes = [];
  usePathUrlStrategy();
  GoogleFonts.config.allowRuntimeFetching = false;
  final supportedLocales = await AppLocalizations.supportedLocales();
  runApp(
    ProviderScope(
      child: AppStartupWidget(
        onLoaded: (context) => Consumer(
          builder: (context, ref, child) {
            ref.watch(localeControllerProvider);
            return EasyLocalization(
              path: AppLocalizations.translationsPath,
              supportedLocales: supportedLocales,
              fallbackLocale: supportedLocales.first,
              child: const MyApp(),
            );
          },
        ),
      ),
    ),
  );
}
