import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:world_weeb_web/config/colors.dart';

class Loader extends StatelessWidget {
  const Loader({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: CircularProgressIndicator(
        color: AppColors.highlightedTextColor,
      ),
    );
  }
}
