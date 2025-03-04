// import 'package:flutter/material.dart';
// import 'package:riverpod_annotation/riverpod_annotation.dart';

// part 'fade_animation_provider.g.dart';

// @riverpod
// class AnimationNotifier extends _$AnimationNotifier {
//   late AnimationController _controller;
//   late Animation<double> _dxAnimation;
//   late Animation<double> _dyAnimation;

//   Animation<double> get dxAnimation => _dxAnimation;
//   Animation<double> get dyAnimation => _dyAnimation;

//   @override
//   void build() {
//     // Initialization logic can go here if needed
//   }

//   void initializeAnimation(
//       TickerProvider vsync, Duration duration, Offset offset) {
//     _controller = AnimationController(
//       duration: duration,
//       vsync: vsync,
//     );

//     final curveAnimation = CurvedAnimation(
//       parent: _controller,
//       curve: Curves.decelerate,
//     );

//     _dxAnimation = Tween(begin: offset.dx, end: 0.0).animate(curveAnimation);
//     _dyAnimation = Tween(begin: offset.dy, end: 0.0).animate(curveAnimation);
//   }

//   void startAnimation(Duration delay) {
//     Future.delayed(delay, () {
//       if (_controller.isAnimating) return;
//       _controller.forward();
//     });
//   }
// }
