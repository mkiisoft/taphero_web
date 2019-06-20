import 'dart:html' as html;

import 'package:flutter_web/material.dart';
import 'package:tap_hero_web/button.dart';

import 'privacy.dart';
import 'route.dart';

class Download extends StatefulWidget {
  static Route<dynamic> routeAnim() {
    return FadeRoute(
      name: '/download',
      title: 'Download',
      builder: (_) => Download(),
    );
  }

  static Route<dynamic> route() {
    return SimpleRoute(
      name: '/download',
      title: 'Download',
      builder: (_) => Download(),
    );
  }

  @override
  _DownloadState createState() => _DownloadState();
}

class _DownloadState extends State<Download> {
  void _showDialog({String title}) {
    showDialog(
        context: context,
        builder: (context) {
          return Dialog(
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8),
            ),
            elevation: 0,
            child: Padding(
              padding: EdgeInsets.symmetric(
                horizontal: 20,
                vertical: 10,
              ),
              child: IntrinsicWidth(
                child: IntrinsicHeight(
                  child: Column(
                    children: <Widget>[
                      SizedBox(
                        height: 10,
                      ),
                      Text(
                        "COMING SOON",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontWeight: FontWeight.w700,
                          fontFamily: "Roboto",
                          fontSize: 18,
                        ),
                      ),
                      SizedBox(
                        height: 20,
                      ),
                      Text(
                        "App Store submission is under review.\nStay tune for updates!",
                        style: TextStyle(
                          fontFamily: "Roboto",
                          fontWeight: FontWeight.w400,
                          fontSize: 16,
                        ),
                      ),
                      SizedBox(
                        height: 30,
                      ),
                      Align(
                        alignment: Alignment.bottomRight,
                        child: FlatButton(
                          onPressed: () {
                            Navigator.of(context).pop();
                          },
                          child: Text("OK"),
                        ),
                      )
                    ],
                  ),
                ),
              ),
            ),
          );
        });
  }

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
                  padding: const EdgeInsets.symmetric(vertical: 40),
                  child: Column(
                    children: <Widget>[
                      ConstrainedBox(
                        constraints: BoxConstraints(maxWidth: 500),
                        child: Image.asset(
                          "elements/taptaphero.png",
                          fit: BoxFit.fill,
                        ),
                      ),
                      SizedBox(
                        height: 50,
                      ),
                      ConstrainedBox(
                        constraints: BoxConstraints(maxWidth: 250),
                        child: GestureDetector(
                          child: Image.asset(
                            "elements/android_apk.png",
                            fit: BoxFit.fill,
                          ),
                          onTap: () {
                            html.window.location.href = "https://firebasestorage.googleapis.com/v0/b/gametaphero.appspot.com/o/tap_hero.apk?alt=media&token=cec5aa97-849c-40df-83af-4ce46b5c6019";
//                            html.window.location.href =
//                                "https://play.google.com/store/apps/details?id=com.marianozorilla.tap_hero";
                          },
                        ),
                      ),
                      SizedBox(
                        height: 40,
                      ),
                      ConstrainedBox(
                        constraints: BoxConstraints(maxWidth: 250),
                        child: GestureDetector(
                          child: Image.asset(
                            "elements/iphone_store.png",
                            fit: BoxFit.fill,
                          ),
                          onTap: () {
                            _showDialog();
//                            html.window.location.href = "https://apps.apple.com/app/taphero/id463855590";
                          },
                        ),
                      ),
                      SizedBox(
                        height: 40,
                      ),
                      ConstrainedBox(
                        constraints: BoxConstraints(maxWidth: 250),
                        child: GestureDetector(
                          child: Image.asset(
                            "elements/mac_os.png",
                            fit: BoxFit.fill,
                          ),
                          onTap: () {
                            html.window.location.href = "https://firebasestorage.googleapis.com/v0/b/gametaphero.appspot.com/o/Tap%20Hero%20-%20MacOS.zip?alt=media&token=2b97e50b-86f7-47da-a184-2fbf4d4336f6";
                          },
                        ),
                      ),
                      SizedBox(
                        height: 60,
                      ),
                      ConstrainedBox(
                        constraints: BoxConstraints(minWidth: 250, minHeight: 30),
                        child: FancyButton(
                          onPressed: () {
                            Navigator.of(context).pushReplacement(Privacy.routeAnim());
                          },
                          child: Align(
                            alignment: Alignment.center,
                            child: Text(
                              "PRIVACY POLICY",
                              style: TextStyle(
                                color: Colors.white,
                                fontFamily: "Gameplay",
                              ),
                            ),
                          ),
                          size: 14,
                          color: Colors.red,
                        ),
                      ),
                      SizedBox(
                        height: 40,
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
