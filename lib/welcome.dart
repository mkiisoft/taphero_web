import 'dart:html' as html;

import 'package:flutter_web/material.dart';

import 'route.dart';

import 'game.dart';

import 'button.dart';

class Platform {
  var _iOS = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];

  bool isIOS() {
    var matches = false;
    _iOS.forEach((name) {
      if (html.window.navigator.platform.contains(name) || html.window.navigator.userAgent.contains(name)) {
        matches = true;
      }
    });
    return matches;
  }

  bool isAndroid() =>
      html.window.navigator.platform == "Android" || html.window.navigator.userAgent.contains("Android");

  bool isMobile() => isAndroid() || isIOS();

  String name() {
    var name = "";
    if (isAndroid()) {
      name = "Android";
    } else if (isIOS()) {
      name = "iOS";
    }
    return name;
  }

  void openStore() {
    if (isAndroid()) {
      html.window.location.href = "https://play.google.com/store/apps/details?id=com.marianozorilla.tap_hero";
    } else {
      html.window.location.href = "https://apps.apple.com/app/taphero/id463855590";
    }
  }
}

class Welcome extends StatefulWidget {
  static Route<dynamic> routeAnim() {
    return FadeRoute(
      name: '/',
      title: 'Tap Hero',
      builder: (_) => Welcome(),
    );
  }
  static Route<dynamic> route() {
    return SimpleRoute(
      name: '/',
      title: 'Tap Hero',
      builder: (_) => Welcome(),
    );
  }
  @override
  _WelcomeState createState() => _WelcomeState();
}

class _WelcomeState extends State<Welcome> with WidgetsBindingObserver, TickerProviderStateMixin {
  static var musicPlaying = false;

  static String skyAsset() => "background/sky.png";

  static String logoAsset() => "elements/taptaphero.png";

  static String heroAsset() => "elements/hero.png";

  static String bossAsset() => "elements/boss.png";

  var heroYAxis = 0.0;
  var bossYAxis = 1.0;

  AnimationController _controller;
  Animation _animationHero;
  Animation _animationBoss;

  var tapToPlay = false;
  var tapAlpha = 0.0;

  AnimationController _tapController;
  Animation _tapAnimation;

  AnimationController _fadeController;
  Animation _fadeAnimation;

  var fade = Colors.transparent;

  html.AudioElement audio;

  final platform = Platform();

  void initGame() {
    if (tapToPlay) _fadeController.forward();
  }

  void initAnimation() {
    _controller = AnimationController(vsync: this, duration: const Duration(seconds: 3));
    _animationHero = Tween(begin: 0.0, end: 0.6).animate(CurvedAnimation(parent: _controller, curve: Curves.decelerate))
      ..addStatusListener((state) {
        if (state == AnimationStatus.completed) {
          setState(() {
            tapToPlay = true;
          });
          _tapController.forward();
        }
      })
      ..addListener(() {
        setState(() {
          heroYAxis = _animationHero.value;
        });
      });

    _animationBoss = Tween(begin: 1.0, end: 0.6).animate(CurvedAnimation(parent: _controller, curve: Curves.decelerate))
      ..addListener(() {
        setState(() {
          bossYAxis = _animationBoss.value;
        });
      });

    _controller.forward();
  }

  void initTapAnimation() {
    _tapController = AnimationController(vsync: this, duration: const Duration(seconds: 1));
    _tapAnimation =
        Tween(begin: 0.0, end: 1.0).animate(CurvedAnimation(parent: _tapController, curve: Curves.decelerate))
          ..addStatusListener((status) {
            if (status == AnimationStatus.completed) {
              _tapController.reverse();
            } else if (status == AnimationStatus.dismissed) {
              _tapController.forward();
            }
          })
          ..addListener(() {
            setState(() {
              tapAlpha = _tapAnimation.value;
            });
          });

    _fadeController = AnimationController(vsync: this, duration: const Duration(milliseconds: 500));
    _fadeAnimation = ColorTween(begin: Colors.transparent, end: Colors.black)
        .animate(CurvedAnimation(parent: _fadeController, curve: Curves.decelerate))
          ..addStatusListener(
            (status) {
              if (status == AnimationStatus.completed) {
                Navigator.of(context).pushReplacement(Game.routeAnim());
              }
            },
          )
          ..addListener(
            () {
              fade = _fadeAnimation.value;
            },
          );
  }

  void disposeAnimations() {
    _controller.dispose();
    _tapController.dispose();
    _fadeController.dispose();
  }

  @override
  void initState() {
    super.initState();
    initTapAnimation();
    initAnimation();
    initAudio();
    WidgetsBinding.instance.addObserver(this);
  }

  void initAudio() {
    musicPlaying = true;
    audio = html.AudioElement("assets/audio/welcome.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.onLoadedData.first.then((e) {
      if (mounted) {
        audio.play();
      }
    });
    html.document.onLoad.first.then((e) {
      html.document.head.append(audio);
      audio.load();
    });
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
  }

  @override
  void deactivate() {
    if (audio != null) {
      audio.pause();
      audio.remove();
      musicPlaying = false;
    }
    super.deactivate();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    super.didChangeAppLifecycleState(state);
  }

  void switchMusic({bool remove}) {
    if (musicPlaying) {
      if (audio != null) {
        audio.pause();
        if (remove) {
          audio.remove();
        }
      }
      musicPlaying = false;
    } else {
      if (audio != null) {
        audio.pause();
        audio.remove();
        musicPlaying = false;
      }
      initAudio();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LayoutBuilder(builder: (context, constraints) {
        final size = constraints.biggest.longestSide;
        return Stack(
          children: <Widget>[
            SizedBox.expand(
              child: Image.asset(
                skyAsset(),
                fit: BoxFit.cover,
              ),
            ),
            Align(
              alignment: Alignment.center,
              child: Align(
                alignment: Alignment(0.0, -1.0),
                heightFactor: bossYAxis,
                child: Image.asset(
                  bossAsset(),
                  width: size,
                  height: size,
                  fit: BoxFit.cover,
                ),
              ),
            ),
            Align(
              alignment: Alignment.bottomCenter,
              child: Align(
                alignment: Alignment.topCenter,
                heightFactor: heroYAxis,
                child: Image.asset(
                  heroAsset(),
                  width: size / 1.5,
                  height: size / 1.5,
                  fit: BoxFit.cover,
                ),
              ),
            ),
            SafeArea(
              bottom: false,
              child: Container(
                alignment: Alignment.topCenter,
                padding: EdgeInsets.only(top: constraints.maxHeight * 0.04, left: 15.0, right: 15.0),
                child: Image.asset(
                  logoAsset(),
                  height: 150.0,
                  fit: BoxFit.contain,
                ),
              ),
            ),
            SafeArea(
              child: Opacity(
                opacity: tapAlpha,
                child: Container(
                  alignment: Alignment.bottomCenter,
                  padding: EdgeInsets.only(bottom: constraints.maxHeight * 0.12),
                  child: Image.asset(
                    "elements/taptostart.png",
                    height: 55.0,
                  ),
                ),
              ),
            ),
            AnimatedContainer(
              duration: Duration(seconds: 2),
              child: GestureDetector(
                onTap: initGame,
                child: Container(
                  color: fade,
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(vertical: 20, horizontal: 15),
              child: FancyButton(
                child: Icon(
                  Icons.music_note,
                  size: 20,
                  color: musicPlaying ? Colors.white : Colors.black54,
                ),
                size: 25,
                color: Color(0xFF67AC5B),
                onPressed: () {
                  switchMusic(remove: false);
                },
              ),
            ),
            platform.isMobile()
                ? Center(
                    child: Align(
                      alignment: Alignment.bottomCenter,
                      child: Padding(
                        padding: const EdgeInsets.only(bottom: 20),
                        child: FancyButton(
                          onPressed: () {
                            platform.openStore();
                          },
                          child: Text(
                            "Download the app for ${platform.name()}",
                            style: TextStyle(fontSize: 12, color: Colors.white, fontFamily: "Gameplay"),
                          ),
                          size: 30,
                          color: Color(0xFF67AC5B),
                        ),
                      ),
                    ),
                  )
                : Container(),
          ],
        );
      }),
    );
  }
}
