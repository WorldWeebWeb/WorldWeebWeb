import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:world_weeb_web/api/api.dart';
import 'package:world_weeb_web/model/anime_details.dart';
import 'package:world_weeb_web/ui/widgets/loader.dart';
import 'package:world_weeb_web/ui/widgets/scaffold.dart';

class DetailsScreen extends StatelessWidget {
  const DetailsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments as Map;
    final fetchAnimeDetails = Api.fetchAnimeDetails(args['id']);

    return CustomScaffold(
      onBack: () {
        Navigator.pop(context);
      },
      body: FutureBuilder(
        future: fetchAnimeDetails,
        builder: (context, snapshot) {
          if (!snapshot.hasError) {
            if (snapshot.connectionState == ConnectionState.done) {
              final Map<String, dynamic> result =
                  jsonDecode((snapshot.data as Response).body);

              final animeDetails = AnimeDetails.fromMap(result);

              return animeDetails.createAnimeDetails();
            }

            return const Loader();
          }

          return Text("Error: ${snapshot.error.toString()}");
        },
      ),
    );
  }
}
