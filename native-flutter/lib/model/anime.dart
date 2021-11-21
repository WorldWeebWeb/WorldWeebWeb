import 'package:flutter/material.dart';
import 'package:sizer/sizer.dart';
import 'package:world_weeb_web/config/colors.dart';
import 'package:world_weeb_web/config/styles.dart';

class Anime {
  late final int id;
  late final String name;
  late final double rating;
  late final String imageUrl;

  Anime({
    required this.id,
    required this.name,
    required this.rating,
    required this.imageUrl,
  });

  factory Anime.fromMap(Map<String, dynamic> map) {
    return Anime(
        id: map['id'],
        name: map['name'],
        rating: map['score'],
        imageUrl: map['img']);
  }

  Widget createAnimeTile({void Function()? onTap}) {
    return InkWell(
      onTap: onTap,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Expanded(
            child: Image.network(
              imageUrl,
            ),
          ),
          SizedBox(
            height: 1.5.h,
          ),
          Text(
            name,
            style: AppStyles.defaultTextStyle,
            textAlign: TextAlign.center,
          ),
          Row(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              const Icon(
                Icons.star,
                color: AppColors.highlightedTextColor,
              ),
              Text(
                rating.toString(),
                style: AppStyles.defaultTextStyle,
              ),
            ],
          ),
          SizedBox(
            height: 3.h,
          )
        ],
      ),
    );
  }
}
