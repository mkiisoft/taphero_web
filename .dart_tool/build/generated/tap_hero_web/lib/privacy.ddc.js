define(['dart_sdk', 'packages/tap_hero_web/route', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/tap_hero_web/flutter_html'], function(dart_sdk, route, animation, material, animation$, flutter_html) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const route$ = route.route;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__stack = animation.src__rendering__stack;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__material__material = material.src__material__material;
  const src__material__colors = material.src__material__colors;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const src__painting__text_style = animation$.src__painting__text_style;
  const flutter_html$ = flutter_html.flutter_html;
  const privacy = Object.create(dart.library);
  let BuildContextToPrivacy = () => (BuildContextToPrivacy = dart.constFn(dart.fnType(privacy.Privacy, [src__widgets__framework.BuildContext])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  privacy.Privacy = class Privacy extends src__widgets__framework.StatefulWidget {
    static routeAnim() {
      return new route$.FadeRoute.new({name: "/privacy", title: "Privacy", builder: dart.fn(_ => new privacy.Privacy.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/privacy.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToPrivacy())});
    }
    static route() {
      return new route$.SimpleRoute.new({name: "/privacy", title: "Privacy", builder: dart.fn(_ => new privacy.Privacy.new({$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/privacy.dart", parameterLocations: const$1 || (const$1 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToPrivacy())});
    }
    createState() {
      return new privacy._PrivacyState.new();
    }
  };
  (privacy.Privacy.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    privacy.Privacy.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = privacy.Privacy.prototype;
  dart.addTypeTests(privacy.Privacy);
  dart.setMethodSignature(privacy.Privacy, () => ({
    __proto__: dart.getMethods(privacy.Privacy.__proto__),
    createState: dart.fnType(privacy._PrivacyState, [])
  }));
  dart.setLibraryUri(privacy.Privacy, "package:tap_hero_web/privacy.dart");
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  privacy._PrivacyState = class _PrivacyState extends src__widgets__framework.State$(privacy.Privacy) {
    build(context) {
      return new src__material__material.Material.new({child: new src__widgets__container.Container.new({child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: JSArrayOfWidget().of([new src__widgets__image.Image.asset("background/sky.png", {fit: src__painting__box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 19, file: "org-dartlang-app:///packages/tap_hero_web/privacy.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 15, name: "name"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 15, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__basic.Center.new({child: new src__widgets__basic.Padding.new({padding: const$7 || (const$7 = dart.const(new src__painting__edge_insets.EdgeInsets.all(50.0))), child: new flutter_html$.Html.new({defaultTextStyle: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontFamily: "Roboto"}), data: "                    <H1><center>PRIVACY POLICY MODEL FOR TAP HERO MOBILE APPLICATION</center></H1>\n<p>\n<br>\n<br>\n</p>\n<br>This privacy policy governs your use of the software applications of <b>Tap Hero</b> for mobile devices <b>(Android - Play Store | iOS - App Store)</b>\n<br>\n<br><b>Official Developer / Development for Android and Play Store</b>\n<br>\n<br>The person and/or company in charge of the official Android Development of <b>\"Tap Hero\"</b> app to be uploaded to the Play Store is: <b>MkiiSoft</b> over the same account with the email <a href=\"mailto:mkiisoft@gmail.com\">mkiisoft@gmail.com</a> and the physical address:\n<br>\n<br>Buenos Aires\n<br>X1431BFD\n<br>Argentina\n<br>\n<br><b>Android:</b> Over the mobile apk package address: <b>\"com.marianozorilla.tap_hero\"</b> would have all the updates and binary data for <a href=\"http://gametaphero.web.com/\">http://gametaphero.web.com/</a> content.\n<br>\n<br><b>iOS:</b> Over the mobile app bundle identifier: <b>\"com.marianozorilla.tapHero\"</b> would have all the updates and binary data for <a href=\"http://gametaphero.web.com/\">http://gametaphero.web.com/</a> content.\n<br>\n<br><b>MkiiSoft</b> have all the rights to develop <b>\"Tap Hero\"</b> mobile app and upload to Google Play Store <a href=\"mailto:mkiisoft@gmail.com\">mkiisoft@gmail.com</a> account.\n<br>What information does the Application obtain and how is it used?\n<br>\n<br><b>Mariano Zorrilla</b> have all the rights to develop <b>\"Tap Hero\"</b> mobile app and upload to App Store <a href=\"mailto:mago123@gmail.com\">mago123@gmail.com</a> account.\n<br>\n<br>What information does the Application obtain and how is it used?\n<br>\n<br><b>User Provided Information</b>\n<br>\n<br>The Application obtains the information you provide when you download and register the Application. Registration with us is optional. However, please keep in mind that you may not be able to use some of the features offered by the Application unless you register with us.\n<br>\n<br>When you register with us and use the Application, you generally provide (a) your name, email address, age, user name, password and other registration information; (b) transaction-related information, such as when you make purchases, respond to any offers, or download or use applications from us; (c) information you provide us when you contact us for help; (d) credit card information for purchase and use of the Application, and; (e) information you enter into our system when using the Application, such as contact information and project management information.\n<br>\n<br>We may also use the information you provided us to contact your from time to time to provide you with important information, required notices and marketing promotions.\n<br>\n<br><b>Automatically Collected Information</b>\n<br>\n<br>In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.\n<br>\n<br>Does the Application collect precise real time location information of the device?\n<br>This Application does not collect precise information about the location of your mobile device.\n<br>\n<br>Do third parties see and/or have access to information obtained by the Application?\n<br>Only aggregated, anonymized data is periodically transmitted to external services to help us improve the Application and our service. We will share your information with third parties only in the ways that are described in this privacy statement.\n<br>\n<br><b>We may disclose User Provided and Automatically Collected Information:</b>\n<br>\n<br>as required by law, such as to comply with a subpoena, or similar legal process; when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request; with our trusted services providers who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement. if Shall Network is involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email and/or a prominent notice on our Web site of any change in ownership or uses of this information, as well as any choices you may have regarding this information.\n<br>\n<br><b>What are my opt-out rights?</b>\n<br>\n<br>You can stop all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network. You can also request to opt-out via email, at <a href=\"mailto:mkiisoft@gmail.com\">mkiisoft@gmail.com</a>\n<br>\n<br><b>Service Providers</b>\n<br>\n<br>I may employ third-party companies and individuals due to the following reasons:\n<br>\n<ul>\n  <li>To facilitate our Service;</li>\n  <li>To provide the Service on our behalf;</li>\n  <li>To perform Service-related services; or</li>\n  <li>To assist us in analyzing how our Service is used.</li>\n</ul>\n<p>\n<br>I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.\n<br>\n<br><b>Data Retention Policy, Managing Your Information</b>\n<br>\n<br>We will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. We will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate. If you’d like us to delete User Provided Data that you have provided via the Application, please contact us at <a href=\"mailto:mkiisoft@gmail.com\">mkiisoft@gmail.com</a> and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly.\n<br>\n<br><b>Cookies</b>\n<br>\n<br>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.\n<br>\n<br>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.\n<br>\n<br><b>Links to Other Sites</b>\n<br>\n<br>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.\n<br>\n<br><b>Children’s Privacy</b>\n<br>\n<br>These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.\n<br>\n<br><b>Security</b>\n<br>\n<br>We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve our Application. Please be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.\n<br>\n<br><b>Changes to This Privacy Policy</b>\n<br>\n<br>This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy <a href=\"https://gametapgero.game.com/privacy\">https://gametapgero.game.com/privacy</a> and informing you via email. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes. You can check the history of this policy by <a href=\"https://gametapgero.game.com/privacy\">https://gametapgero.game.com/privacy</a>\n<br>\n<br><b>Your Consent</b>\n<br>\n<br>By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. “Processing,” means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information, all of which activities will take place in the Argentina. If you reside outside the Argentina your information will be transferred, processed and stored there under Argentina privacy standards.\n<br>\n<br><b>Contact us</b>\n<br>\n<br>If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at <a href=\"mailto:mkiisoft@gmail.com\">mkiisoft@gmail.com</a></p>\n                    ", $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 26, file: "org-dartlang-app:///packages/tap_hero_web/privacy.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 21, name: "defaultTextStyle"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 21, name: "data"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/privacy.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 19, name: "padding"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/privacy.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/privacy.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/privacy.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 11, name: "fit"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/privacy.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/privacy.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (privacy._PrivacyState.new = function() {
    privacy._PrivacyState.__proto__.new.call(this);
    ;
  }).prototype = privacy._PrivacyState.prototype;
  dart.addTypeTests(privacy._PrivacyState);
  dart.setMethodSignature(privacy._PrivacyState, () => ({
    __proto__: dart.getMethods(privacy._PrivacyState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(privacy._PrivacyState, "package:tap_hero_web/privacy.dart");
  dart.trackLibraries("packages/tap_hero_web/privacy", {
    "package:tap_hero_web/privacy.dart": privacy
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/privacy.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMI,YAAO,iCACC,mBACC,oBACE,QAAC,KAAM;IAEpB;;AAEE,YAAO,mCACC,mBACC,oBACE,QAAC,KAAM;IAEpB;;AAE+B;IAAe;;;;;;EAChD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,kDACE,kDACE,wCACS,iDACI,sBACV,oCACJ,4BACY,wlBAEd,6EACS,2CACE,8CACU,+EAAe,gBACvB,8CACa,oDAAwB,gDAAmB,kBACvD;IA4GxB;;;;;EACF","file":"privacy.ddc.js"}');
  // Exports:
  return {
    privacy: privacy
  };
});

//# sourceMappingURL=privacy.ddc.js.map
