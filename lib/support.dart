import 'dart:html' as html;
import 'package:flutter_web/material.dart';
import 'route.dart';
import 'button.dart';
import 'flutter_html.dart';

class Support extends StatefulWidget {
  static Route<dynamic> routeAnim() {
    return FadeRoute(
      name: '/support',
      title: 'Support',
      builder: (_) => Support(),
    );
  }

  static Route<dynamic> route() {
    return SimpleRoute(
      name: '/support',
      title: 'Support',
      builder: (_) => Support(),
    );
  }

  @override
  _SupportState createState() => _SupportState();
}

class _SupportState extends State<Support> {
  @override
  Widget build(BuildContext context) {
    return Material(
      child: Container(
        child: Stack(
          fit: StackFit.expand,
          children: <Widget>[
            Image.asset(
              "background/sky.png",
              fit: BoxFit.cover,
            ),
            SingleChildScrollView(
              child: Center(
                child: Padding(
                  padding: const EdgeInsets.all(50),
                  child: Column(
                    children: <Widget>[
                      Text(
                        "SUPPORT",
                        style: TextStyle(
                          fontSize: 40,
                          fontFamily: "Gameplay",
                          color: Colors.white,
                        ),
                      ),
                      SizedBox(
                        height: 50,
                      ),
                      Html(
                        data: """
                        <center>Tap Hero is an Open Source game build with Flutter and a lot of ❤️ to the Flutter Community!
                        <br>If you want to support this project, please: Make a PR or Open an Issue <a href='https://github.com/mkiisoft/taphero'>https://github.com/mkiisoft/taphero</a>
                        <br>
                        <br>By Mariano Zorrilla
                        <br>
                        <br>- Made with Flutter Web 2019 -
                        </center>
                        """,
                        onLinkTap: (url) {
                          html.window.location.href = url;
                        },
                        defaultTextStyle: TextStyle(
                          color: Colors.white,
                          fontFamily: "Roboto",
                          fontSize: 18,
                        ),
                      ),
                      SizedBox(
                        height: 40,
                      ),
                      ConstrainedBox(
                        constraints: BoxConstraints(minWidth: 240),
                        child: FancyButton(
                          child: Align(
                            alignment: Alignment.center,
                            child: Text(
                              "Contact US",
                              style: TextStyle(
                                color: Colors.black54,
                                fontSize: 20,
                                fontFamily: "Gameplay",
                              ),
                            ),
                          ),
                          color: Color(0xFFEFF3ED),
                          size: 40,
                          onPressed: () {
                            html.window.location.href = "mailto:mkiisoft@gmail.com?subject=TapHero Support";
                          },
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
