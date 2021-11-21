

import 'package:flutter/material.dart';
import 'package:sizer/sizer.dart';
import 'package:world_weeb_web/routes/routes.dart';
import 'package:world_weeb_web/ui/screens/details_screen.dart';
import 'package:world_weeb_web/ui/screens/home_screen.dart';

import 'config/colors.dart';
import 'config/styles.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return Sizer(
      builder: (context, orientation, deviceType) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'World Weeb Web',
          theme: ThemeData(
            textTheme: TextTheme(
              bodyText1: AppStyles.highlightedTextStyle,
              bodyText2: AppStyles.defaultTextStyle,
            ).apply(
              bodyColor: AppColors.defaultTextColor,
              displayColor: AppColors.highlightedTextColor,
            ),
          ),
          routes: {
            AppRoutes.home: (context) => const HomeScreen(),
            AppRoutes.details: (context) => const DetailsScreen(),
          },
          initialRoute: AppRoutes.home,
        );
      },
    );
  }
}
