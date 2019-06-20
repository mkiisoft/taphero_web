import 'dart:html' as html;
import 'dart:async';

import 'package:flutter_web/material.dart';

import 'powerups.dart';
import 'scroll.dart';
import 'utils.dart';
import 'button.dart';
import 'route.dart';
import 'welcome.dart';

class Game extends StatefulWidget {

  static Route<dynamic> routeAnim() {
    return FadeRoute(
      name: '/game',
      title: 'Game On!',
      builder: (_) => Game(),
    );
  }

  static Route<dynamic> route() {
    return SimpleRoute(
      name: '/game',
      title: 'Game On!',
      builder: (_) => Game(),
    );
  }

  @override
  _GameState createState() => _GameState();
}

class _GameState extends State<Game> with WidgetsBindingObserver, TickerProviderStateMixin {
  AnimationController controller;
  int duration = 1000 * 30;
  int durationBackup;

  static String skyAsset() => "background/sky.png";

  static String stageAsset() => "background/front.png";

  static var multiplier = 1.0;
  static var damageDefault = 980.0;
  static var damageBar = damageDefault;
  static var damageUser = 30.0;
  static var addedDuration = 1000 * 10;

  var list = Utils.getPowerUps();
  var coins = 0;

  var bosses = Utils.getBosses();
  var bossIndex = 0;

  var level = 1;

  var tap = false;

  var xAxis = 0.0;
  var yAxis = 0.0;

  var earnedCoin = false;

  var threshold = false;

  var musicPlaying = false;

  html.AudioElement audio;

  VoidCallback onEarnTime;

  var gameOver = false;

  Color clockColor = Color(0xFF67AC5B);

  String textEnd = "";

  String get timerString {
    Duration duration = controller.duration * controller.value;
    return '${(duration.inMinutes).toString().padLeft(2, '0')}:${(duration.inSeconds % 60).toString().padLeft(2, '0')}';
  }

  void damage(TapDownDetails details) {
    setState(() {
      xAxis = details.globalPosition.dx - 40.0;
      yAxis = details.globalPosition.dy - 80.0;
      tap = true;

      if (damageBar - damageUser <= 0) {
        damageBar = damageBar - damageUser;
        coins = coins + 20;
        multiplier = (bossIndex + 1 >= bosses.length) ? multiplier * 1.25 : multiplier;
        level = (bossIndex + 1 >= bosses.length) ? ++level : level;
        addedDuration = (bossIndex + 1 >= bosses.length) ? 1000 * 20 : 1000 * 10;
        bossIndex = (bossIndex + 1 >= bosses.length) ? 0 : ++bossIndex;
        damageBar = bosses[bossIndex].life.toDouble() * multiplier;
        earnedCoin = true;
        onEarnTime?.call();
        Future.delayed(const Duration(seconds: 1), () {
          setState(() {
            earnedCoin = false;
          });
        });
      } else {
        damageBar = damageBar - damageUser;
      }
    });
  }

  void hide(TapUpDetails details) {
    setState(() {
      tap = false;
    });
  }

  double width(BuildContext context) {
    return MediaQuery.of(context).size.width;
  }

  double height(BuildContext context) {
    return MediaQuery.of(context).size.height;
  }

  double listHeight(BuildContext context) {
    return width(context) >= 700 ? height(context) : height(context) / 2.8;
  }

  void buyPowerUp(int index) {
    setState(() {
      if (coins >= list[index].coins) {
        coins = coins - list[index].coins;
        list[index].bought = true;
        damageUser = damageUser * list[index].multiplier;
      }
    });
  }

  Widget coinVisibility(bool bought) {
    if (bought) {
      return Container();
    } else {
      return Padding(
        padding: const EdgeInsets.only(right: 4.0),
        child: Image.asset(
          "elements/coin.png",
          width: 13,
          height: 13,
        ),
      );
    }
  }

  Widget earnedCoins() {
    if (earnedCoin) {
      return Padding(
        padding: const EdgeInsets.only(left: 5.0),
        child: Text(
          "+20",
          style: Utils.textStyle(10.0, color: Colors.yellow),
        ),
      );
    } else {
      return Container(
        width: 0.0,
        height: 0.0,
      );
    }
  }

  Widget hitBox() {
    if (tap) {
      return Positioned(
        top: yAxis,
        left: xAxis,
        child: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.only(bottom: 20.0),
              child: StrokeText(
                "-${damageUser.toInt().toString()}",
                fontSize: 14.0,
                fontFamily: "Gameplay",
                color: Colors.red,
                strokeColor: Colors.black,
                strokeWidth: 1.0,
              ),
            ),
            Image.asset(
              "elements/hit.png",
              fit: BoxFit.fill,
              height: 80.0,
              width: 80.0,
            ),
          ],
        ),
      );
    } else {
      return Container(
        width: 0.0,
        height: 0.0,
      );
    }
  }

  String hero() {
    return tap ? "character/attack.png" : "character/idle.png";
  }

  void share() {
    var shareMap = Map<String, String>();
    shareMap['title'] = 'Tap Hero';
    shareMap['text'] = 'Tap Hero: I survive until ${bosses[bossIndex].name} LV$level! Now is your turn!';
    html.window.navigator.share(shareMap);
  }

  Widget gameEngine(BuildContext context) {
    return width(context) >= 700
        ? Row(
            children: <Widget>[
              gamePanel(),
              sidePanel(),
            ],
          )
        : Column(
            children: <Widget>[
              gamePanel(),
              sidePanel(),
            ],
          );
  }

  Widget gamePanel() {
    return Align(
      // Stage panel
      alignment: Alignment.topCenter,
      child: Container(
        color: Colors.transparent,
        height: width(context) >= 700 ? height(context) : height(context) - listHeight(context),
        width: width(context) >= 700
            ? width(context) >= 700 && width(context) <= 900 ? 400 : width(context) - 400
            : width(context),
        child: Stack(
          children: <Widget>[
            SizedBox.expand(
              // Background
              child: Image.asset(
                skyAsset(),
                fit: BoxFit.cover,
              ),
            ),
            Align(
              child: Image.asset(
                stageAsset(),
                alignment: Alignment.bottomCenter,
                fit: BoxFit.cover,
              ),
              alignment: Alignment.bottomCenter,
            ),
            Align(
              child: Padding(
                padding: const EdgeInsets.only(bottom: 80.0),
                child: Opacity(
                  opacity: tap ? 0.4 : 1.0,
                  child: Image.asset(
                    bosses[bossIndex].asset,
                    height: width(context) / 2.5 < 380 ? width(context) / 2.5 : 380,
                    fit: BoxFit.fill,
                  ),
                ),
              ),
              alignment: Alignment.bottomCenter,
            ),
            Align(
              child: Padding(
                padding: EdgeInsets.only(bottom: 50.0),
                child: Image.asset(
                  hero(),
                  height: width(context) / 6 < 160 ? width(context) / 6 : 160,
                  fit: BoxFit.fill,
                  alignment: Alignment.bottomCenter,
                ),
              ),
              alignment: Alignment.bottomCenter,
            ),
            Container(
              margin: EdgeInsets.symmetric(vertical: 10.0),
              child: SafeArea(
                child: Align(
                  alignment: Alignment.topCenter,
                  child: Column(
                    children: <Widget>[
                      Align(
                        alignment: Alignment.topRight,
                        child: Padding(
                          padding: const EdgeInsets.only(top: 10, bottom: 20, right: 15),
                          child: Stack(children: <Widget>[
                            FancyButton(
                              child: Text(
                                "      $timerString",
                                style: TextStyle(
                                  fontSize: 20,
                                  color: Colors.black87,
                                  fontFamily: "Gameplay",
                                ),
                              ),
                              size: 20,
                              color: Color(0xFFEFF3ED),
                            ),
                            FancyButton(
                              child: Icon(
                                Icons.watch_later,
                                color: Colors.black54,
                                size: 20,
                              ),
                              size: 20,
                              color: clockColor,
                            ),
                          ]),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(bottom: 8.0),
                        child: Text(
                          bosses[bossIndex].name + "  LV" + level.toString(),
                          style: Utils.textStyle(15.0),
                        ),
                      ),
                      FancyButton(
                        child: Text(
                          "LIFE:  ${damageBar.toInt().toString()}",
                          style: Utils.textStyle(18.0),
                        ),
                        size: 18,
                        color: Color(0xFFCA3034),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            Text(
                              "COINS: ",
                              style: Utils.textStyle(10.0),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(left: 5.0),
                              child: Text(
                                coins.toString(),
                                style: Utils.textStyle(10.0),
                              ),
                            ),
                            Image.asset(
                              "elements/coin.png",
                              height: 12.2,
                            ),
                            earnedCoins(),
                          ],
                        ),
                      )
                    ],
                  ),
                ),
              ),
            ),
            GestureDetector(
              onTapDown: (TapDownDetails details) => damage(details),
              onTapUp: (TapUpDetails details) => hide(null),
              onTapCancel: () => hide(null),
            ),
            hitBox(),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 15),
              child: Row(
                children: <Widget>[
                  FancyButton(
                    child: Text(
                      "X",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 18,
                        fontFamily: 'Gameplay',
                      ),
                    ),
                    size: 25,
                    color: Color(0xFFCA3034),
                    onPressed: () {
                      Navigator.of(context).pushReplacement(Welcome.route());
                    },
                  ),
                  Padding(
                    padding: EdgeInsets.only(left: 10),
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
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget sidePanel() {
    return Container(
      color: Colors.black,
      height: listHeight(context),
      width: width(context) >= 700
          ? width(context) >= 700 && width(context) <= 900 ? width(context) - 700 + 300 : 400
          : width(context),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Row(
            children: <Widget>[
              Expanded(
                child: Align(
                  alignment: Alignment.centerLeft,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(vertical: 20.0, horizontal: 15.0),
                    child: Text(
                      "Power-Ups",
                      style: Utils.textStyle(12.0),
                    ),
                  ),
                ),
              ),
              Align(
                alignment: Alignment.centerRight,
                child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: 20.0, horizontal: 15.0),
                  child: FancyButton(
                    size: 20,
                    color: Color(0xFF67AC5B),
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text(
                        "SHARE SCORE",
                        style: Utils.textStyle(12.0),
                      ),
                    ),
                    onPressed: share,
                  ),
                ),
              )
            ],
          ),
          Expanded(
            child: ScrollConfiguration(
              behavior: GlowBehavior(),
              child: ListView.builder(
                padding: EdgeInsets.only(bottom: 20.0, left: 10.0, right: 10.0),
                itemCount: list.length,
                itemBuilder: (context, position) {
                  PowerUps powerUp = list[position];
                  int bgColor = !powerUp.bought && coins >= powerUp.coins
                      ? 0xFF808080
                      : !powerUp.bought ? 0xFF505050 : 0xFF202020;

                  return Padding(
                    padding: const EdgeInsets.symmetric(
                      vertical: 5.0,
                    ),
                    child: Container(
                      height: 70,
                      child: Card(
                        color: Color(bgColor),
                        child: Row(
                          children: <Widget>[
                            Expanded(
                              child: Padding(
                                padding: const EdgeInsets.symmetric(horizontal: 20.0),
                                child: Text(
                                  powerUp.name,
                                  style: Utils.textStyle(11.0),
                                ),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 20.0),
                              child: FancyButton(
                                size: 20,
                                child: Row(
                                  children: <Widget>[
                                    Padding(
                                      padding: const EdgeInsets.only(left: 10.0, bottom: 2, top: 2),
                                      child: Text(
                                        !powerUp.bought ? "BUY" : "BOUGHT",
                                        style:
                                        Utils.textStyle(13.0, color: !powerUp.bought ? Colors.white : Colors.grey),
                                      ),
                                    ),
                                    Padding(
                                      padding: EdgeInsets.only(left: 8.0, right: !powerUp.bought ? 2.0 : 0.0),
                                      child: Text(
                                        !powerUp.bought ? powerUp.coins.toString() : "",
                                        style: Utils.textStyle(13.0),
                                      ),
                                    ),
                                    coinVisibility(powerUp.bought),
                                  ],
                                ),
                                color: !powerUp.bought && coins >= powerUp.coins
                                    ? Colors.deepPurpleAccent
                                    : Colors.deepPurple,
                                onPressed:
                                !powerUp.bought && coins >= powerUp.coins ? () => buyPowerUp(position) : null,
                              ),
                            )
                          ],
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
          ),
        ],
      ),
    );
  }

  void initAudio() {
    audio = html.AudioElement("assets/audio/bgmusic.mp3");
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.5;
    html.document.body.append(audio);
    musicPlaying = true;
  }

  void initAudioGameOver() {
    audio = html.AudioElement("assets/audio/game_over.mp3");
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.5;
    html.document.body.append(audio);
    musicPlaying = true;
  }

  void initClock({int add}) {
    if (controller == null) {
      durationBackup = duration;
    } else {
      Duration currentDuration = controller.duration * controller.value;
      durationBackup = currentDuration.inMilliseconds;
      controller.stop();
    }

    controller = null;
    controller = AnimationController(vsync: this, duration: Duration(milliseconds: durationBackup + add));
    controller.reverse(from: controller.value == 0.0 ? 1.0 : controller.value);
    controller.addListener(() {
      setState(() {
        timerString;

        Duration duration = controller.duration * controller.value;

        if ((duration.inMinutes >= 0) && (duration.inSeconds % 60) > 20) {
          clockColor = Color(0xFF67AC5B);
        }

        if ((duration.inMinutes == 0) && (duration.inSeconds % 60) < 20) {
          clockColor = Color(0xFFED6337);
        }

        if ((duration.inMinutes == 0) && (duration.inSeconds % 60) < 10) {
          clockColor = Color(0xFFCA3034);
        }
      });
    });
    controller.addStatusListener((status) {
      if (status == AnimationStatus.dismissed) {
        setState(() {
          gameOver = true;
        });
      }
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
  void initState() {
    super.initState();
    initClock(add: 0);
    onEarnTime = () {
      initClock(add: addedDuration);
    };
    damageBar = bosses[bossIndex].life.toDouble() * multiplier;
    initAudio();
    WidgetsBinding.instance.addObserver(this);
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
      audio.pause();
      if (remove) {
        audio.remove();
      }
      musicPlaying = false;
    } else {
      audio.play();
      musicPlaying = true;
    }
  }

  Widget showGameOver() {
    if (gameOver) {
      if (musicPlaying) {
        musicPlaying = false;
        audio.pause();
      }

      if (!musicPlaying) {
        musicPlaying = true;
        initAudioGameOver();
      }

      return Stack(
        children: <Widget>[
          Container(
            color: Color(0xEE000000),
          ),
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  FancyButton(
                    child: Text(
                      "GAME OVER",
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: width(context) / 12,
                        fontFamily: 'Gameplay',
                      ),
                    ),
                    size: width(context) / 10,
                    color: Color(0xFFCA3034),
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 30),
                    child: FancyButton(
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 5),
                        child: Text(
                          "SHARE SCORE",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: width(context) / 25,
                            fontFamily: 'Gameplay',
                          ),
                        ),
                      ),
                      size: width(context) / 20,
                      color: Color(0xFF67AC5B),
                      onPressed: share,
                    ),
                  )
                ],
              ),
            ),
          ),
        ],
      );
    } else {
      return Container();
    }
  }

  Future<bool> _backHome() async {
    return await Navigator.pop(context, true);
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: _backHome,
      child: LayoutBuilder(builder: (context, constraints) {
        return Material(
          child: Stack(
            children: <Widget>[
              gameEngine(context),
              showGameOver(),
              Text(textEnd, style: TextStyle(fontSize: 100),)
            ],
          ),
        );
      }),
    );
  }
}
