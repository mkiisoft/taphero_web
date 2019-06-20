import 'package:flutter_web/material.dart';
import 'flutter_html.dart';
import 'route.dart';

class Privacy extends StatefulWidget {
  static Route<dynamic> routeAnim() {
    return FadeRoute(
      name: '/privacy',
      title: 'Privacy',
      builder: (_) => Privacy(),
    );
  }
  static Route<dynamic> route() {
    return SimpleRoute(
      name: '/privacy',
      title: 'Privacy',
      builder: (_) => Privacy(),
    );
  }
  @override
  _PrivacyState createState() => _PrivacyState();
}

class _PrivacyState extends State<Privacy> {
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
                  child: Html(
                    defaultTextStyle: TextStyle(color: Colors.white, fontFamily: "Roboto"),
                    data: """
                    <H1><center>PRIVACY POLICY MODEL FOR TAP HERO MOBILE APPLICATION</center></H1>
<p>
<br>
<br>
</p>
<br>This privacy policy governs your use of the software applications of <b>Tap Hero</b> for mobile devices <b>(Android - Play Store | iOS - App Store)</b>
<br>
<br><b>Official Developer / Development for Android and Play Store</b>
<br>
<br>The person and/or company in charge of the official Android Development of <b>"Tap Hero"</b> app to be uploaded to the Play Store is: <b>MkiiSoft</b> over the same account with the email <a href="mailto:mkiisoft@gmail.com">mkiisoft@gmail.com</a> and the physical address:
<br>
<br>Buenos Aires
<br>X1431BFD
<br>Argentina
<br>
<br><b>Android:</b> Over the mobile apk package address: <b>"com.marianozorilla.tap_hero"</b> would have all the updates and binary data for <a href="http://gametaphero.web.com/">http://gametaphero.web.com/</a> content.
<br>
<br><b>iOS:</b> Over the mobile app bundle identifier: <b>"com.marianozorilla.tapHero"</b> would have all the updates and binary data for <a href="http://gametaphero.web.com/">http://gametaphero.web.com/</a> content.
<br>
<br><b>MkiiSoft</b> have all the rights to develop <b>"Tap Hero"</b> mobile app and upload to Google Play Store <a href="mailto:mkiisoft@gmail.com">mkiisoft@gmail.com</a> account.
<br>What information does the Application obtain and how is it used?
<br>
<br><b>Mariano Zorrilla</b> have all the rights to develop <b>"Tap Hero"</b> mobile app and upload to App Store <a href="mailto:mago123@gmail.com">mago123@gmail.com</a> account.
<br>
<br>What information does the Application obtain and how is it used?
<br>
<br><b>User Provided Information</b>
<br>
<br>The Application obtains the information you provide when you download and register the Application. Registration with us is optional. However, please keep in mind that you may not be able to use some of the features offered by the Application unless you register with us.
<br>
<br>When you register with us and use the Application, you generally provide (a) your name, email address, age, user name, password and other registration information; (b) transaction-related information, such as when you make purchases, respond to any offers, or download or use applications from us; (c) information you provide us when you contact us for help; (d) credit card information for purchase and use of the Application, and; (e) information you enter into our system when using the Application, such as contact information and project management information.
<br>
<br>We may also use the information you provided us to contact your from time to time to provide you with important information, required notices and marketing promotions.
<br>
<br><b>Automatically Collected Information</b>
<br>
<br>In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.
<br>
<br>Does the Application collect precise real time location information of the device?
<br>This Application does not collect precise information about the location of your mobile device.
<br>
<br>Do third parties see and/or have access to information obtained by the Application?
<br>Only aggregated, anonymized data is periodically transmitted to external services to help us improve the Application and our service. We will share your information with third parties only in the ways that are described in this privacy statement.
<br>
<br><b>We may disclose User Provided and Automatically Collected Information:</b>
<br>
<br>as required by law, such as to comply with a subpoena, or similar legal process; when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request; with our trusted services providers who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement. if Shall Network is involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email and/or a prominent notice on our Web site of any change in ownership or uses of this information, as well as any choices you may have regarding this information.
<br>
<br><b>What are my opt-out rights?</b>
<br>
<br>You can stop all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network. You can also request to opt-out via email, at <a href="mailto:mkiisoft@gmail.com">mkiisoft@gmail.com</a>
<br>
<br><b>Service Providers</b>
<br>
<br>I may employ third-party companies and individuals due to the following reasons:
<br>
<ul>
  <li>To facilitate our Service;</li>
  <li>To provide the Service on our behalf;</li>
  <li>To perform Service-related services; or</li>
  <li>To assist us in analyzing how our Service is used.</li>
</ul>
<p>
<br>I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
<br>
<br><b>Data Retention Policy, Managing Your Information</b>
<br>
<br>We will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. We will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate. If you’d like us to delete User Provided Data that you have provided via the Application, please contact us at <a href="mailto:mkiisoft@gmail.com">mkiisoft@gmail.com</a> and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly.
<br>
<br><b>Cookies</b>
<br>
<br>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
<br>
<br>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
<br>
<br><b>Links to Other Sites</b>
<br>
<br>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
<br>
<br><b>Children’s Privacy</b>
<br>
<br>These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.
<br>
<br><b>Security</b>
<br>
<br>We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve our Application. Please be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.
<br>
<br><b>Changes to This Privacy Policy</b>
<br>
<br>This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy <a href="https://gametapgero.game.com/privacy">https://gametapgero.game.com/privacy</a> and informing you via email. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes. You can check the history of this policy by <a href="https://gametapgero.game.com/privacy">https://gametapgero.game.com/privacy</a>
<br>
<br><b>Your Consent</b>
<br>
<br>By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. “Processing,” means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information, all of which activities will take place in the Argentina. If you reside outside the Argentina your information will be transferred, processed and stored there under Argentina privacy standards.
<br>
<br><b>Contact us</b>
<br>
<br>If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at <a href="mailto:mkiisoft@gmail.com">mkiisoft@gmail.com</a></p>
                    """,
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
