import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:sizer/sizer.dart';
import 'package:world_weeb_web/api/api.dart';
import 'package:world_weeb_web/config/sizes.dart';
import 'package:world_weeb_web/config/styles.dart';
import 'package:world_weeb_web/model/anime.dart';
import 'package:world_weeb_web/ui/widgets/loader.dart';
import 'package:world_weeb_web/ui/widgets/scaffold.dart';
import 'package:world_weeb_web/ui/widgets/sort_by_chips.dart';

import '../../routes/routes.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  late Future<Response> fetchAnimeList;
  int current = 0;
  String sortBy = "popular";

  @override
  Widget build(BuildContext context) {
    List<Widget> chipList = [
      CustomChip(
        labelText: "Popular",
        isSelected: current == 0,
        onPressed: () {
          current = 0;
          sortBy = "popular";
          setState(() {});
        },
      ),
      const ChipGap(),
      CustomChip(
        labelText: "Trending",
        isSelected: current == 1,
        onPressed: () {
          current = 1;
          sortBy = "trending";
          setState(() {});
        },
      ),
      const ChipGap(),
      CustomChip(
        labelText: "Rating",
        isSelected: current == 2,
        onPressed: () {
          current = 2;
          sortBy = "rating";
          setState(() {});
        },
      ),
      const ChipGap(),
      CustomChip(
        labelText: "New",
        isSelected: current == 3,
        onPressed: () {
          current = 3;
          sortBy = "new";
          setState(() {});
        },
      ),
    ];

    fetchAnimeList = Api.fetchAnimeList(sortBy);

    return CustomScaffold(
      body: Column(
        children: [
          const RowGap(),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 4.w),
            child: const AppTitle(),
          ),
          const RowGap(),
          SortByChips(
            chipList: chipList,
          ),
          const RowGap(),
          Expanded(
            child: FutureBuilder(
              future: fetchAnimeList,
              builder: (context, snapshot) {
                if (!snapshot.hasError) {
                  if (snapshot.connectionState == ConnectionState.done) {
                    final List<dynamic> result =
                        jsonDecode((snapshot.data as Response).body);
                    final List<Anime> animeList = [];

                    for (Map<String, dynamic> map in result) {
                      animeList.add(Anime.fromMap(map));
                    }

                    return GridView.count(
                      crossAxisCount: 2,
                      children: List.generate(
                        animeList.length,
                        (index) => animeList[index].createAnimeTile(
                          onTap: () {
                            Navigator.pushNamed(context, AppRoutes.details,
                                arguments: {
                                  'id': animeList[index].id,
                                });
                          },
                        ),
                      ),
                    );
                  }

                  return const Loader();
                }

                return Text("Error: ${snapshot.error.toString()}");
              },
            ),
          ),
        ],
      ),
    );
  }
}

class AppTitle extends StatelessWidget {
  const AppTitle({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Text(
          'Anime',
          style: AppStyles.highlightedTextStyle
              .copyWith(fontSize: AppSizes.appTitleSize),
        ),
        Text(
          'Serials',
          style: AppStyles.defaultTextStyle
              .copyWith(fontSize: AppSizes.appTitleSize),
        ),
      ],
    );
  }
}

class RowGap extends StatelessWidget {
  const RowGap({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 2.h,
    );
  }
}
