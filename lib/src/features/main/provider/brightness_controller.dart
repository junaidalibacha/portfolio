import 'package:portfolio/src/common/provider/shared_preferences_provider.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'dart:ui';

part 'brightness_controller.g.dart';

@riverpod
class BrightnessController extends _$BrightnessController {
  static const brightnessKey = "brightness";

  @override
  FutureOr<Brightness> build() async {
    final platformDispatcher = PlatformDispatcher.instance;
    platformDispatcher.onPlatformBrightnessChanged = updateBrightness;
    return _getBrightness();
  }

  Future<void> updateBrightness() async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      final brightness = await _getBrightness();
      final Brightness newBrightness;
      if (brightness.name == Brightness.dark.name) {
        newBrightness = Brightness.light;
      } else {
        newBrightness = Brightness.dark;
      }
      await _setBrightness(newBrightness);
      return newBrightness;
    });
  }

  Future<Brightness> _getBrightness() async {
    final sharedPreferences = await ref.watch(sharedPreferencesProvider.future);
    final brightnessValue = sharedPreferences.getString(brightnessKey);
    if (brightnessValue == Brightness.dark.name) {
      return Brightness.dark;
    } else if (brightnessValue == Brightness.light.name) {
      return Brightness.light;
    } else {
      // first build
      final platformDispatcher = PlatformDispatcher.instance;
      final platformBrightness = platformDispatcher.platformBrightness;
      await _setBrightness(platformBrightness);
      return platformBrightness;
    }
  }

  Future<void> _setBrightness(Brightness brightness) async {
    ref.watch(sharedPreferencesProvider).whenData((sharedPreferences) async {
      await sharedPreferences.setString(brightnessKey, brightness.name);
    });
  }
}
