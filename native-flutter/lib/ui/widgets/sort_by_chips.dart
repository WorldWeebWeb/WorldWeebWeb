import 'package:flutter/material.dart';
import 'package:sizer/sizer.dart';
import 'package:world_weeb_web/config/colors.dart';

class SortByChips extends StatelessWidget {
  const SortByChips({
    Key? key,
    required this.chipList,
  }) : super(key: key);

  final List<Widget> chipList;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 5.h,
      child: ListView(
        padding: EdgeInsets.only(left: 4.w),
        // This next line does the trick.
        scrollDirection: Axis.horizontal,
        children: chipList,
      ),
    );
  }
}

class CustomChip extends StatelessWidget {
  const CustomChip(
      {Key? key,
      required this.labelText,
      required this.onPressed,
      this.isSelected = false})
      : super(key: key);

  final String labelText;
  final void Function() onPressed;
  final bool isSelected;

  @override
  Widget build(BuildContext context) {
    return ActionChip(
      onPressed: onPressed,
      padding: EdgeInsets.symmetric(horizontal: 2.w, vertical: 0.5.h),
      label: SizedBox(
        width: 20.w,
        child: Text(
          labelText,
          style: TextStyle(
            color: isSelected ? Colors.white : Colors.white.withAlpha(100),
            fontSize: 12.sp,
          ),
          textAlign: TextAlign.center,
        ),
      ),
      backgroundColor: isSelected
          ? AppColors.highlightedTextColor
          : Colors.black.withAlpha(200),
    );
  }
}

class ChipGap extends StatelessWidget {
  const ChipGap({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 4.w,
    );
  }
}
