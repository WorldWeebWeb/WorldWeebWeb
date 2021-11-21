import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:sizer/sizer.dart';
import 'colors.dart';

class AppStyles {
  static TextStyle defaultTextStyle = GoogleFonts.quicksand(
    fontSize: 14.sp,
    fontWeight: FontWeight.w400,
  );

  static TextStyle highlightedTextStyle = GoogleFonts.quicksand(
    fontSize: 14.sp,
    fontWeight: FontWeight.w800,
    color: AppColors.highlightedTextColor,
  );
}
