import 'package:flutter_web/material.dart';

import 'download.dart';
import 'game.dart';
import 'welcome.dart';
import 'privacy.dart';
import 'support.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      onGenerateRoute: (settings) {
        switch(settings.name) {
          case "/": return Welcome.route();
          case "/game": return Game.route();
          case "/privacy": return Privacy.route();
          case "/support": return Support.route();
          case "/download": return Download.route();
          default: return Welcome.route();
        }
      },
      initialRoute: "/",
//      routes: {
//        '/': (_) => Welcome(),
//        '/game': (_) => Game(),
//        '/download': (_) => Download(),
//        '/privacy': (_) => Privacy(),
//      },
    );
  }
}