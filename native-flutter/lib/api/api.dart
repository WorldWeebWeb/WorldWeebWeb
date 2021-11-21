import 'dart:convert';
import 'package:http/http.dart';

class Api {
  static const String baseUrl =
      "https://animeapi1.netlify.app/.netlify/functions";
  static const String animeList = "/getanimelist";
  static const String animeDetails = "/animedetails";

  static Future<Response> fetchAnimeList(String sortBy) {
    return put(Uri.parse(baseUrl + animeList),
        headers: {
          'content-type': 'application/json',
        },
        body: jsonEncode({
          'case': sortBy,
        }));
  }

  static Future<Response> fetchAnimeDetails(int id) {
    return put(Uri.parse(baseUrl + animeDetails),
        headers: {
          'content-type': 'application/json',
        },
        body: jsonEncode({
          'id': id,
        }));
  }
}
