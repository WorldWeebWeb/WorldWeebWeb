import 'package:flutter/material.dart';
import 'package:world_weeb_web/config/colors.dart';

class CustomScaffold extends StatelessWidget {
  const CustomScaffold({
    Key? key,
    required this.body,
    this.onBack,
  }) : super(key: key);

  final Widget body;
  final void Function()? onBack;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      appBar: AppBar(
        leading: InkWell(
          onTap: onBack,
          child: const Center(
            child: Icon(Icons.arrow_back_ios),
          ),
        ),
        actions: [IconButton(onPressed: () {}, icon: const Icon(Icons.menu))],
        elevation: 0,
        backgroundColor: AppColors.backgroundAppBar,
      ),
      body: body,
    );
  }
}
