import 'package:flutter/material.dart';
import 'package:sizer/sizer.dart';
import 'package:world_weeb_web/config/colors.dart';
import 'package:world_weeb_web/config/styles.dart';
import 'package:world_weeb_web/ui/screens/home_screen.dart';

class AnimeDetails {
  late final String title;
  late final String synopsis;
  late final String imageUrl;
  late final double rating;
  late final int rank;
  late final int episodeCount;

  AnimeDetails({
    required this.title,
    required this.synopsis,
    required this.imageUrl,
    required this.rating,
    required this.rank,
    required this.episodeCount,
  });

  factory AnimeDetails.fromMap(Map<String, dynamic> map) {
    return AnimeDetails(
      title: map['title'],
      synopsis: map['synopsis'],
      imageUrl: map['image_url'],
      rating: map['score'],
      rank: map['rank'],
      episodeCount: map['episodes'],
    );
  }

  Widget createAnimeDetails() {
    return SingleChildScrollView(
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 4.w),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: AppStyles.highlightedTextStyle.copyWith(fontSize: 27.sp),
              textAlign: TextAlign.start,
            ),
            const RowGap(),
            Row(
              mainAxisSize: MainAxisSize.min,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                const Icon(
                  Icons.tag,
                  color: Colors.redAccent,
                ),
                Text(
                  rank.toString(),
                  style: AppStyles.defaultTextStyle,
                ),
                const SmallGap(),
                const Icon(
                  Icons.star,
                  color: AppColors.highlightedTextColor,
                ),
                Text(
                  rating.toString(),
                  style: AppStyles.defaultTextStyle,
                ),
                const SmallGap(),
                Text(
                  'Episodes: ' + episodeCount.toString(),
                  style: AppStyles.defaultTextStyle,
                ),
              ],
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const RowGap(),
                const RowGap(),
                ClipRRect(
                  child: Image.network(
                    imageUrl,
                    fit: BoxFit.fill,
                  ),
                  borderRadius: BorderRadius.circular(4.w),
                ),
                const RowGap(),
                const RowGap(),
                Text(
                  'Synopsis',
                  style: AppStyles.highlightedTextStyle.copyWith(
                    fontSize: 18.sp,
                    color: Colors.white,
                  ),
                ),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 4.w, vertical: 1.h),
                  child: Text(
                    synopsis,
                    style: AppStyles.defaultTextStyle.copyWith(fontSize: 16.sp),
                  ),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}

class SmallGap extends StatelessWidget {
  const SmallGap({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 4.w,
    );
  }
}
