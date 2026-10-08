/* Yue extension: extra languages (Urdu script, Arabic, Hindi, Spanish, French) and extra topics
   (order, delivery, refund, discount, free items, gifts, free chapters).
   Loaded before the inline Yue widget on every page. All answers are based on the site's FAQ,
   refund policy, bundles and gift pages. To teach Yue more, add words to the lists below. */
(function () {
  var B = "https://theplannerhup-sketch.github.io/the-planner-hup/";
  var WA = "<bdi>+92 343 4457596</bdi>";
  var EM = "<bdi>theplannerhup@gmail.com</bdi>";
  var RTL = { urd: 1, ar: 1 };

  function a(file, label) { return "<a href='" + B + file + "' target='_blank'>" + label + "</a>"; }

  /* ---------- New topics, in every language ---------- */
  var X = {
    en: {
      order: "Ordering is easy! 💗 Pick a product on our site, then message us on WhatsApp " + WA + " with the product name. We'll confirm your order and share payment options there, and send your PDF once payment is confirmed. More in our " + a("faq.html", "FAQ") + ".",
      delivery: "Our planners, books and novels are digital PDFs, so nothing is shipped. Once payment is confirmed we send the file to you on WhatsApp or by email. You can print it or import it into an app like GoodNotes. See our " + a("how-to-use.html", "how-to-use guide") + ".",
      refund: "Because everything we sell is a digital file delivered instantly, we generally don't offer refunds once a file has been sent. But if your file is missing, damaged, wrong, or you were charged twice, email " + EM + " within 7 days and we'll fix or replace it for free. Details: " + a("refund-and-return-policy.html", "Refund Policy") + ".",
      bundle: "Yes! 🎁 Buy any 2 planners or books together and mention code <b>BUNDLE10</b> when you order on WhatsApp to get 10% off. We also have a Student Starter Kit and a Korean Language Bundle: " + a("bundles.html", "see bundles") + ".",
      free: "Yes, we have free things! 🎀 The Free Weekly Planner, plus free tools like a habit tracker, GPA calculator and Hangul practice sheets. See " + a("freebies.html", "Free Resources") + " and " + a("tools.html", "Free Tools") + ".",
      gift: "What a lovely idea! 🎁 You can gift any planner, book or novel. Message us on WhatsApp " + WA + ", tell us it's a gift, and we'll arrange it. No shipping needed. Ideas: " + a("gift-a-planner.html", "Gift a Planner") + ".",
      preview: "Yes! 📖 The first 3 chapters of <b>A Dream For You</b> are free to read on its page: " + a("novel-a-dream-for-you.html", "read the free chapters") + ". You can also see a preview of " + a("novel-bheriya-ki-rooh.html", "Bheriya Ki Rooh") + "."
    },
    ur: {
      order: "Order karna bohat aasan hai! 💗 Hamari website par product chunein, phir WhatsApp " + WA + " par product ka naam bhej dein. Hum wahin order confirm karke payment ke options bata dengi, aur payment confirm hote hi aap ko PDF bhej di jayegi. Mazeed " + a("faq.html", "FAQ") + " mein hai.",
      delivery: "Hamare planners, books aur novels digital PDF hain, is liye kuch ship nahi hota. Payment confirm hone ke baad file aap ko WhatsApp ya email par bheji jati hai. Aap usay print kar sakte hain ya GoodNotes jaisi app mein import kar sakte hain. Dekhein " + a("how-to-use.html", "how-to-use guide") + ".",
      refund: "Hamari har cheez digital file hai jo foran bheji jati hai, is liye file bhejne ke baad aam tor par refund nahi hota. Lekin agar file nahi mili, kharab hai, ghalat hai, ya do baar paise kat gaye, to 7 din ke andar " + EM + " par email karein, hum free theek ya replace kar dengi. Tafseel: " + a("refund-and-return-policy.html", "Refund Policy") + ".",
      bundle: "Ji haan! 🎁 Koi bhi 2 planners ya books ek sath lein aur WhatsApp par order karte waqt code <b>BUNDLE10</b> likh dein, 10% discount mil jayega. Student Starter Kit aur Korean Language Bundle bhi hain: " + a("bundles.html", "bundles dekhein") + ".",
      free: "Ji haan, free cheezein hain! 🎀 Free Weekly Planner, aur free tools jaise habit tracker, GPA calculator aur Hangul practice sheets. Dekhein " + a("freebies.html", "Free Resources") + " aur " + a("tools.html", "Free Tools") + ".",
      gift: "Kya khoobsurat khayal hai! 🎁 Aap koi bhi planner, book ya novel gift kar sakte hain. WhatsApp " + WA + " par batayein ke gift hai, hum arrange kar dengi. Shipping ki zaroorat nahi. Idea: " + a("gift-a-planner.html", "Gift a Planner") + ".",
      preview: "Ji haan! 📖 <b>A Dream For You</b> ke pehle 3 baab uske page par free parhe ja sakte hain: " + a("novel-a-dream-for-you.html", "free chapters parhein") + ". " + a("novel-bheriya-ki-rooh.html", "Bheriya Ki Rooh") + " ka preview bhi dekh sakte hain."
    },
    id: {
      order: "Memesan itu mudah! 💗 Pilih produk di website kami, lalu kirim pesan ke WhatsApp " + WA + " dengan nama produknya. Kami akan mengonfirmasi pesanan dan membagikan opsi pembayaran di sana, lalu mengirim PDF setelah pembayaran dikonfirmasi. Info lengkap di " + a("faq.html", "FAQ") + ".",
      delivery: "Planner, buku, dan novel kami berupa PDF digital, jadi tidak ada pengiriman fisik. Setelah pembayaran dikonfirmasi, file dikirim lewat WhatsApp atau email. Kamu bisa mencetaknya atau mengimpornya ke aplikasi seperti GoodNotes. Lihat " + a("how-to-use.html", "panduan penggunaan") + ".",
      refund: "Karena semua produk kami berupa file digital yang dikirim langsung, kami umumnya tidak memberikan pengembalian dana setelah file dikirim. Tetapi jika file tidak sampai, rusak, salah, atau kamu terbebani dua kali, email " + EM + " dalam 7 hari dan kami akan memperbaiki atau menggantinya gratis. Detail: " + a("refund-and-return-policy.html", "Kebijakan Pengembalian") + ".",
      bundle: "Ada! 🎁 Beli 2 planner atau buku sekaligus dan sebutkan kode <b>BUNDLE10</b> saat memesan lewat WhatsApp untuk diskon 10%. Ada juga Student Starter Kit dan Korean Language Bundle: " + a("bundles.html", "lihat bundel") + ".",
      free: "Ya, ada yang gratis! 🎀 Free Weekly Planner, plus alat gratis seperti habit tracker, kalkulator GPA, dan lembar latihan Hangul. Lihat " + a("freebies.html", "Sumber Gratis") + " dan " + a("tools.html", "Alat Gratis") + ".",
      gift: "Ide yang manis! 🎁 Kamu bisa menghadiahkan planner, buku, atau novel apa pun. Kirim pesan ke WhatsApp " + WA + ", beri tahu bahwa itu untuk hadiah, dan kami akan mengaturnya. Tanpa pengiriman fisik. Ide: " + a("gift-a-planner.html", "Gift a Planner") + ".",
      preview: "Bisa! 📖 3 bab pertama <b>A Dream For You</b> gratis dibaca di halamannya: " + a("novel-a-dream-for-you.html", "baca bab gratis") + ". Kamu juga bisa melihat pratinjau " + a("novel-bheriya-ki-rooh.html", "Bheriya Ki Rooh") + "."
    },
    ko: {
      order: "주문은 아주 쉬워요! 💗 웹사이트에서 상품을 고른 뒤 WhatsApp " + WA + "으로 상품 이름을 보내주세요. 그곳에서 주문을 확인하고 결제 방법을 안내해 드리며, 결제가 확인되면 PDF를 보내드려요. 자세한 내용은 " + a("faq.html", "FAQ") + "에서 확인하세요.",
      delivery: "저희 플래너, 도서, 소설은 디지털 PDF라서 배송이 없어요. 결제가 확인되면 WhatsApp 또는 이메일로 파일을 보내드립니다. 인쇄하거나 GoodNotes 같은 앱으로 가져와 사용할 수 있어요. " + a("how-to-use.html", "사용 방법 안내") + "를 확인해 보세요.",
      refund: "모든 상품이 즉시 전달되는 디지털 파일이라서, 파일을 보낸 후에는 일반적으로 환불이 어렵습니다. 다만 파일이 도착하지 않았거나 손상되었거나 잘못 받으셨거나 이중 결제가 되었다면, 7일 이내에 " + EM + "으로 메일 주시면 무료로 수정하거나 교체해 드려요. 자세한 내용: " + a("refund-and-return-policy.html", "환불 정책") + ".",
      bundle: "네! 🎁 플래너나 도서를 2개 함께 구매하시고 WhatsApp으로 주문할 때 코드 <b>BUNDLE10</b>을 말씀해 주시면 10% 할인돼요. 학생 스타터 키트와 한국어 학습 번들도 있어요: " + a("bundles.html", "번들 보기") + ".",
      free: "네, 무료 자료가 있어요! 🎀 무료 주간 플래너와 습관 트래커, GPA 계산기, 한글 연습 시트 같은 무료 도구가 있어요. " + a("freebies.html", "무료 자료") + "와 " + a("tools.html", "무료 도구") + "를 확인해 보세요.",
      gift: "정말 좋은 생각이에요! 🎁 플래너, 도서, 소설 무엇이든 선물할 수 있어요. WhatsApp " + WA + "으로 선물이라고 알려주시면 준비해 드려요. 배송은 필요 없어요. 아이디어: " + a("gift-a-planner.html", "선물하기") + ".",
      preview: "네! 📖 <b>A Dream For You</b>의 첫 3개 챕터는 상품 페이지에서 무료로 읽을 수 있어요: " + a("novel-a-dream-for-you.html", "무료 챕터 읽기") + ". " + a("novel-bheriya-ki-rooh.html", "Bheriya Ki Rooh") + " 미리보기도 있어요."
    },
    urd: {
      greeting: "السلام علیکم! میں Yue ہوں 💗 آج آپ پلان، سیکھنے، پڑھنے یا غور و فکر میں سے کس چیز کی تلاش میں ہیں؟",
      hello: "وعلیکم السلام! میں کیسے مدد کر سکتی ہوں؟ پلانرز، اسلامی کتابیں، کورین سیکھنے کا مواد یا ناول، کچھ بھی پوچھیں۔",
      recommend: "ہمارے پاس یہ کیٹیگریز ہیں: 📅 پلانرز (اسٹوڈنٹ، لائف یا ہفتہ وار)، 📖 اسلامی اور کورین سیکھنے کی کتابیں، 📔 بک ریڈنگ جرنل، اور 📚 اردو ناول۔ بتائیں آپ کو کیا چاہیے، یا بس 'پلانر'، 'کتاب'، 'کورین' یا 'ناول' لکھ دیں۔",
      who: "یہ ویب سائٹ <b>ثانیہ انتظار (Sania Intazar)</b> نے بنائی ہے، جو The Planner Hup کی بانی اور اردو مصنفہ ہیں۔ 💗",
      nameStory: "میرا نام <b>Yue</b> ہے۔ یہ پیارا سا نام ثانیہ نے خود رکھا ہے۔ 💗",
      bought: "آپ کی خریداری کا بہت بہت شکریہ! 🥰 اگر پسند آئے تو براہِ کرم ہماری ویب سائٹ اپنی سہیلیوں کے ساتھ شیئر کریں: ",
      thanks: "آپ کا بھی شکریہ! 💗 کسی اور چیز میں مدد چاہیے ہو تو ضرور پوچھیں۔",
      contact: "آپ ہم سے واٹس ایپ پر " + WA + " یا ای میل " + EM + " پر رابطہ کر سکتے ہیں۔",
      price: "ہمارے پلانرز اور کتابیں 2.99 ڈالر سے 8 ڈالر تک ہیں، اور کچھ (جیسے Free Weekly Planner) بالکل مفت ہیں۔ کس پروڈکٹ کی قیمت جاننی ہے؟",
      fallback: "مجھے اس کا پکا جواب معلوم نہیں، لیکن آپ ہمارا " + a("faq.html", "FAQ صفحہ") + " دیکھ سکتے ہیں، یا واٹس ایپ " + WA + " پر پوچھ لیں۔",
      view: "یہاں دیکھیں &larr;",
      placeholder: "پلانرز، کتابوں کے بارے میں پوچھیں...",
      order: "آرڈر کرنا بہت آسان ہے! 💗 ہماری ویب سائٹ پر پروڈکٹ منتخب کریں، پھر واٹس ایپ " + WA + " پر پروڈکٹ کا نام بھیج دیں۔ ہم وہیں آرڈر کنفرم کر کے ادائیگی کے طریقے بتائیں گے، اور ادائیگی کنفرم ہوتے ہی آپ کو PDF بھیج دی جائے گی۔ مزید " + a("faq.html", "FAQ") + " میں ہے۔",
      delivery: "ہمارے پلانرز، کتابیں اور ناول ڈیجیٹل PDF ہیں، اس لیے کچھ شپ نہیں ہوتا۔ ادائیگی کنفرم ہونے کے بعد فائل واٹس ایپ یا ای میل پر بھیجی جاتی ہے۔ آپ اسے پرنٹ کر سکتے ہیں یا GoodNotes جیسی ایپ میں امپورٹ کر سکتے ہیں۔ دیکھیں " + a("how-to-use.html", "استعمال کی گائیڈ") + "۔",
      refund: "ہماری ہر چیز ڈیجیٹل فائل ہے جو فوراً بھیجی جاتی ہے، اس لیے فائل بھیجنے کے بعد عام طور پر رقم واپس نہیں ہوتی۔ لیکن اگر فائل نہ ملے، خراب ہو، غلط ہو، یا دو بار پیسے کٹ جائیں تو 7 دن کے اندر " + EM + " پر ای میل کریں، ہم مفت درست یا تبدیل کر دیں گے۔ تفصیل: " + a("refund-and-return-policy.html", "ریفنڈ پالیسی") + "۔",
      bundle: "جی ہاں! 🎁 کوئی بھی 2 پلانرز یا کتابیں ایک ساتھ لیں اور واٹس ایپ پر آرڈر کرتے وقت کوڈ <b>BUNDLE10</b> لکھ دیں، 10٪ رعایت مل جائے گی۔ اسٹوڈنٹ اسٹارٹر کٹ اور کورین لینگویج بنڈل بھی ہیں: " + a("bundles.html", "بنڈلز دیکھیں") + "۔",
      free: "جی ہاں، مفت چیزیں بھی ہیں! 🎀 Free Weekly Planner، اور مفت ٹولز جیسے ہیبٹ ٹریکر، GPA کیلکولیٹر اور ہانگل پریکٹس شیٹس۔ دیکھیں " + a("freebies.html", "مفت وسائل") + " اور " + a("tools.html", "مفت ٹولز") + "۔",
      gift: "کیا خوبصورت خیال ہے! 🎁 آپ کوئی بھی پلانر، کتاب یا ناول تحفے میں دے سکتے ہیں۔ واٹس ایپ " + WA + " پر بتائیں کہ تحفہ ہے، ہم انتظام کر دیں گے۔ شپنگ کی ضرورت نہیں۔ آئیڈیاز: " + a("gift-a-planner.html", "Gift a Planner") + "۔",
      preview: "جی ہاں! 📖 <b>A Dream For You</b> کے پہلے 3 ابواب اس کے صفحے پر مفت پڑھے جا سکتے ہیں: " + a("novel-a-dream-for-you.html", "مفت ابواب پڑھیں") + "۔ " + a("novel-bheriya-ki-rooh.html", "بھیڑیے کی روح") + " کا پری ویو بھی دیکھ سکتے ہیں۔"
    },
    ar: {
      greeting: "السلام عليكم! أنا Yue 💗 مساعدة The Planner Hup. هل تبحث اليوم عن التخطيط أم التعلّم أم القراءة أم التأمل؟",
      hello: "وعليكم السلام! كيف يمكنني مساعدتك؟ اسأل عن المخططات أو الكتب الإسلامية أو تعلّم الكورية أو الرواية.",
      recommend: "لدينا هذه الأقسام: 📅 مخططات (للطلاب، للحياة، أسبوعية)، 📖 كتب إسلامية وكتب لتعلّم الكورية، 📔 دفتر القراءة، و 📚 رواية باللغة الأردية. أخبرني عمّا تبحث عنه، أو اكتب «مخطط» أو «كتاب» أو «كوري» أو «رواية».",
      who: "هذا الموقع من تصميم <b>Sania Intazar</b>، مؤسسة The Planner Hup وكاتبة باللغة الأردية. 💗",
      nameStory: "اسمي <b>Yue</b>، وقد اختارته لي Sania بنفسها. 💗",
      bought: "شكرًا جزيلًا على شرائك! 🥰 إذا أعجبك المنتج، شارك موقعنا مع أصدقائك: ",
      thanks: "عفوًا! 💗 إذا احتجت أي مساعدة أخرى فاسأل في أي وقت.",
      contact: "يمكنك التواصل معنا عبر واتساب " + WA + " أو البريد الإلكتروني " + EM + ".",
      price: "تتراوح أسعار مخططاتنا وكتبنا بين 2.99 و 8 دولارات، وبعضها (مثل Free Weekly Planner) مجاني تمامًا. سعر أي منتج تريد معرفته؟",
      fallback: "لست متأكدة من الجواب، لكن يمكنك زيارة " + a("faq.html", "صفحة الأسئلة الشائعة") + " أو السؤال عبر واتساب " + WA + ".",
      view: "اعرض التفاصيل &larr;",
      placeholder: "اسأل عن المخططات والكتب...",
      order: "الطلب سهل! 💗 اختر منتجًا من موقعنا ثم راسلنا على واتساب " + WA + " مع اسم المنتج. سنؤكد طلبك ونشارك خيارات الدفع هناك، ونرسل لك ملف PDF بعد تأكيد الدفع. المزيد في " + a("faq.html", "الأسئلة الشائعة") + ".",
      delivery: "مخططاتنا وكتبنا وروايتنا ملفات PDF رقمية، لذلك لا يوجد شحن. بعد تأكيد الدفع نرسل لك الملف عبر واتساب أو البريد الإلكتروني. يمكنك طباعته أو استيراده إلى تطبيق مثل GoodNotes. راجع " + a("how-to-use.html", "دليل الاستخدام") + ".",
      refund: "بما أن كل ما نبيعه ملفات رقمية تُسلَّم فورًا، فلا نقدّم عادةً استرداد المبلغ بعد إرسال الملف. لكن إذا لم يصلك الملف أو كان تالفًا أو خاطئًا أو تم الخصم مرتين، فراسلنا على " + EM + " خلال 7 أيام وسنصلحه أو نستبدله مجانًا. التفاصيل: " + a("refund-and-return-policy.html", "سياسة الاسترداد") + ".",
      bundle: "نعم! 🎁 اشترِ أي مخططين أو كتابين معًا واذكر الرمز <b>BUNDLE10</b> عند الطلب عبر واتساب لتحصل على خصم 10%. لدينا أيضًا حزمة للطلاب وحزمة لتعلّم الكورية: " + a("bundles.html", "عرض الحزم") + ".",
      free: "نعم، لدينا أشياء مجانية! 🎀 المخطط الأسبوعي المجاني، وأدوات مجانية مثل متتبّع العادات وحاسبة المعدل GPA وأوراق تدريب الهانغول. شاهد " + a("freebies.html", "الموارد المجانية") + " و" + a("tools.html", "الأدوات المجانية") + ".",
      gift: "فكرة جميلة! 🎁 يمكنك إهداء أي مخطط أو كتاب أو رواية. راسلنا على واتساب " + WA + " وأخبرنا أنها هدية وسنرتّب ذلك. لا حاجة للشحن. أفكار: " + a("gift-a-planner.html", "إهداء مخطط") + ".",
      preview: "نعم! 📖 أول 3 فصول من <b>A Dream For You</b> متاحة للقراءة مجانًا في صفحتها: " + a("novel-a-dream-for-you.html", "اقرأ الفصول المجانية") + ". ويمكنك أيضًا مشاهدة معاينة " + a("novel-bheriya-ki-rooh.html", "Bheriya Ki Rooh") + "."
    },
    hi: {
      greeting: "नमस्ते! मैं Yue हूँ 💗 The Planner Hup की चैट असिस्टेंट। आज आप प्लान करना, सीखना, पढ़ना या सोचना, किस चीज़ की तलाश में हैं?",
      hello: "नमस्ते! मैं कैसे मदद कर सकती हूँ? प्लानर, इस्लामी किताबें, कोरियाई सीखने की सामग्री या उपन्यास के बारे में पूछिए।",
      recommend: "हमारे पास ये श्रेणियाँ हैं: 📅 प्लानर (स्टूडेंट, लाइफ या साप्ताहिक), 📖 इस्लामी और कोरियाई सीखने की किताबें, 📔 बुक रीडिंग जर्नल, और 📚 एक उर्दू उपन्यास। बताइए आपको क्या चाहिए, या बस 'प्लानर', 'किताब', 'कोरियाई' या 'उपन्यास' लिख दीजिए।",
      who: "यह वेबसाइट <b>Sania Intazar</b> ने बनाई है, जो The Planner Hup की संस्थापक और उर्दू लेखिका हैं। 💗",
      nameStory: "मेरा नाम <b>Yue</b> है, और यह नाम Sania ने खुद रखा है। 💗",
      bought: "आपकी खरीदारी के लिए बहुत धन्यवाद! 🥰 पसंद आए तो कृपया हमारी वेबसाइट अपने दोस्तों के साथ साझा करें: ",
      thanks: "आपका भी धन्यवाद! 💗 और कुछ चाहिए तो ज़रूर पूछिए।",
      contact: "आप हमसे व्हाट्सएप " + WA + " या ईमेल " + EM + " पर संपर्क कर सकते हैं।",
      price: "हमारे प्लानर और किताबें 2.99 डॉलर से 8 डॉलर तक हैं, और कुछ (जैसे Free Weekly Planner) बिल्कुल मुफ़्त हैं। किस प्रोडक्ट की कीमत जाननी है?",
      fallback: "मुझे इसका पक्का जवाब नहीं पता, लेकिन आप हमारा " + a("faq.html", "FAQ पेज") + " देख सकते हैं, या व्हाट्सएप " + WA + " पर पूछ सकते हैं।",
      view: "यहाँ देखें &rarr;",
      placeholder: "प्लानर, किताबों के बारे में पूछें...",
      order: "ऑर्डर करना आसान है! 💗 हमारी वेबसाइट पर प्रोडक्ट चुनें, फिर व्हाट्सएप " + WA + " पर प्रोडक्ट का नाम भेजें। हम वहीं ऑर्डर कन्फर्म करके भुगतान के विकल्प बताएँगे, और भुगतान कन्फर्म होते ही आपको PDF भेज दी जाएगी। ज़्यादा जानकारी " + a("faq.html", "FAQ") + " में है।",
      delivery: "हमारे प्लानर, किताबें और उपन्यास डिजिटल PDF हैं, इसलिए कुछ शिप नहीं होता। भुगतान कन्फर्म होने के बाद फ़ाइल व्हाट्सएप या ईमेल पर भेजी जाती है। आप उसे प्रिंट कर सकते हैं या GoodNotes जैसे ऐप में इम्पोर्ट कर सकते हैं। देखें " + a("how-to-use.html", "उपयोग गाइड") + "।",
      refund: "हमारी हर चीज़ डिजिटल फ़ाइल है जो तुरंत भेजी जाती है, इसलिए फ़ाइल भेजने के बाद आम तौर पर रिफंड नहीं होता। लेकिन अगर फ़ाइल नहीं मिली, खराब है, गलत है, या दो बार पैसे कट गए, तो 7 दिनों के भीतर " + EM + " पर ईमेल करें, हम मुफ़्त में ठीक या बदल देंगे। विवरण: " + a("refund-and-return-policy.html", "रिफंड पॉलिसी") + "।",
      bundle: "हाँ! 🎁 कोई भी 2 प्लानर या किताबें साथ में लें और व्हाट्सएप पर ऑर्डर करते समय कोड <b>BUNDLE10</b> बताएँ, 10% छूट मिलेगी। स्टूडेंट स्टार्टर किट और कोरियन लैंग्वेज बंडल भी हैं: " + a("bundles.html", "बंडल देखें") + "।",
      free: "हाँ, कुछ चीज़ें मुफ़्त हैं! 🎀 Free Weekly Planner, और मुफ़्त टूल जैसे हैबिट ट्रैकर, GPA कैलकुलेटर और हंगुल प्रैक्टिस शीट। देखें " + a("freebies.html", "मुफ़्त संसाधन") + " और " + a("tools.html", "मुफ़्त टूल") + "।",
      gift: "बहुत प्यारा विचार! 🎁 आप कोई भी प्लानर, किताब या उपन्यास गिफ्ट कर सकते हैं। व्हाट्सएप " + WA + " पर बताइए कि यह गिफ्ट है, हम व्यवस्था कर देंगे। शिपिंग की ज़रूरत नहीं। आइडिया: " + a("gift-a-planner.html", "Gift a Planner") + "।",
      preview: "हाँ! 📖 <b>A Dream For You</b> के पहले 3 अध्याय उसके पेज पर मुफ़्त पढ़े जा सकते हैं: " + a("novel-a-dream-for-you.html", "मुफ़्त अध्याय पढ़ें") + "। " + a("novel-bheriya-ki-rooh.html", "Bheriya Ki Rooh") + " का प्रीव्यू भी देख सकते हैं।"
    },
    es: {
      greeting: "¡Hola! Soy Yue 💗 la asistente de The Planner Hup. ¿Hoy buscas planificar, aprender, leer o reflexionar?",
      hello: "¡Hola! ¿En qué puedo ayudarte? Pregúntame por planificadores, libros islámicos, aprendizaje de coreano o la novela.",
      recommend: "Tenemos estas categorías: 📅 Planificadores (de estudiante, de vida o semanales), 📖 libros islámicos y para aprender coreano, 📔 un diario de lectura y 📚 una novela en urdu. Cuéntame qué buscas, o escribe 'planificador', 'libro', 'coreano' o 'novela'.",
      who: "Este sitio web fue creado por <b>Sania Intazar</b>, fundadora de The Planner Hup y autora en lengua urdu. 💗",
      nameStory: "Me llamo <b>Yue</b>, y Sania me puso ese nombre ella misma. 💗",
      bought: "¡Muchas gracias por tu compra! 🥰 Si te gustó, comparte nuestro sitio con tus amigos: ",
      thanks: "¡De nada! 💗 Si necesitas algo más, solo pregunta.",
      contact: "Puedes contactarnos por WhatsApp al " + WA + " o por correo en " + EM + ".",
      price: "Nuestros planificadores y libros cuestan entre $2.99 y $8, y algunos (como el Free Weekly Planner) son totalmente gratis. ¿El precio de qué producto quieres saber?",
      fallback: "No estoy segura de eso. Puedes consultar nuestra " + a("faq.html", "página de preguntas frecuentes") + " o escribirnos por WhatsApp al " + WA + ".",
      view: "Ver aquí &rarr;",
      placeholder: "Pregunta por planificadores, libros...",
      order: "¡Pedir es fácil! 💗 Elige un producto en nuestro sitio y escríbenos por WhatsApp al " + WA + " con el nombre del producto. Confirmaremos tu pedido, te daremos las opciones de pago allí y te enviaremos el PDF cuando se confirme el pago. Más info en las " + a("faq.html", "preguntas frecuentes") + ".",
      delivery: "Nuestros planificadores, libros y novelas son PDF digitales, así que no hay envío físico. Cuando se confirma el pago te enviamos el archivo por WhatsApp o correo. Puedes imprimirlo o importarlo a una app como GoodNotes. Mira la " + a("how-to-use.html", "guía de uso") + ".",
      refund: "Como todo lo que vendemos son archivos digitales entregados al instante, normalmente no hacemos reembolsos una vez enviado el archivo. Pero si no te llegó, está dañado, es el incorrecto o te cobraron dos veces, escribe a " + EM + " en un plazo de 7 días y lo arreglamos o reemplazamos gratis. Detalles: " + a("refund-and-return-policy.html", "Política de reembolso") + ".",
      bundle: "¡Sí! 🎁 Compra 2 planificadores o libros juntos y menciona el código <b>BUNDLE10</b> al pedir por WhatsApp para obtener 10% de descuento. También tenemos un Student Starter Kit y un Korean Language Bundle: " + a("bundles.html", "ver paquetes") + ".",
      free: "¡Sí, tenemos cosas gratis! 🎀 El Free Weekly Planner y herramientas gratuitas como un seguimiento de hábitos, calculadora de GPA y hojas de práctica de Hangul. Mira " + a("freebies.html", "Recursos gratis") + " y " + a("tools.html", "Herramientas gratis") + ".",
      gift: "¡Qué buena idea! 🎁 Puedes regalar cualquier planificador, libro o novela. Escríbenos por WhatsApp al " + WA + ", dinos que es un regalo y lo organizamos. No hace falta envío. Ideas: " + a("gift-a-planner.html", "Gift a Planner") + ".",
      preview: "¡Sí! 📖 Los primeros 3 capítulos de <b>A Dream For You</b> se pueden leer gratis en su página: " + a("novel-a-dream-for-you.html", "leer los capítulos gratis") + ". También puedes ver un adelanto de " + a("novel-bheriya-ki-rooh.html", "Bheriya Ki Rooh") + "."
    },
    fr: {
      greeting: "Bonjour ! Je suis Yue 💗 l'assistante de The Planner Hup. Aujourd'hui, vous cherchez à planifier, apprendre, lire ou réfléchir ?",
      hello: "Bonjour ! Comment puis-je vous aider ? Posez-moi vos questions sur les planificateurs, les livres islamiques, l'apprentissage du coréen ou le roman.",
      recommend: "Nous avons ces catégories : 📅 Planificateurs (étudiant, de vie ou hebdomadaires), 📖 livres islamiques et pour apprendre le coréen, 📔 un carnet de lecture et 📚 un roman en ourdou. Dites-moi ce que vous cherchez, ou écrivez « planificateur », « livre », « coréen » ou « roman ».",
      who: "Ce site a été créé par <b>Sania Intazar</b>, fondatrice de The Planner Hup et autrice en langue ourdoue. 💗",
      nameStory: "Je m'appelle <b>Yue</b>, et c'est Sania qui m'a donné ce nom. 💗",
      bought: "Merci beaucoup pour votre achat ! 🥰 Si cela vous a plu, partagez notre site avec vos amis : ",
      thanks: "Avec plaisir ! 💗 Si vous avez besoin d'autre chose, n'hésitez pas.",
      contact: "Vous pouvez nous joindre sur WhatsApp au " + WA + " ou par e-mail à " + EM + ".",
      price: "Nos planificateurs et livres coûtent entre 2,99 $ et 8 $, et certains (comme le Free Weekly Planner) sont entièrement gratuits. Le prix de quel produit voulez-vous connaître ?",
      fallback: "Je ne suis pas sûre de la réponse. Consultez notre " + a("faq.html", "page FAQ") + " ou écrivez-nous sur WhatsApp au " + WA + ".",
      view: "Voir ici &rarr;",
      placeholder: "Posez une question sur les planificateurs, les livres...",
      order: "Commander est simple ! 💗 Choisissez un produit sur notre site, puis écrivez-nous sur WhatsApp au " + WA + " avec le nom du produit. Nous confirmerons votre commande, partagerons les options de paiement là-bas et enverrons le PDF une fois le paiement confirmé. Plus d'infos dans la " + a("faq.html", "FAQ") + ".",
      delivery: "Nos planificateurs, livres et romans sont des PDF numériques, il n'y a donc aucune expédition. Une fois le paiement confirmé, nous envoyons le fichier par WhatsApp ou par e-mail. Vous pouvez l'imprimer ou l'importer dans une application comme GoodNotes. Voir le " + a("how-to-use.html", "guide d'utilisation") + ".",
      refund: "Comme tout ce que nous vendons est un fichier numérique livré immédiatement, nous ne remboursons généralement pas une fois le fichier envoyé. Mais si votre fichier manque, est endommagé, incorrect, ou si vous avez été débité deux fois, écrivez à " + EM + " dans les 7 jours et nous le corrigerons ou le remplacerons gratuitement. Détails : " + a("refund-and-return-policy.html", "Politique de remboursement") + ".",
      bundle: "Oui ! 🎁 Achetez 2 planificateurs ou livres ensemble et mentionnez le code <b>BUNDLE10</b> en commandant sur WhatsApp pour obtenir 10 % de réduction. Nous avons aussi un Student Starter Kit et un Korean Language Bundle : " + a("bundles.html", "voir les packs") + ".",
      free: "Oui, nous avons des ressources gratuites ! 🎀 Le Free Weekly Planner et des outils gratuits comme un suivi d'habitudes, un calculateur de GPA et des fiches d'écriture du Hangul. Voir " + a("freebies.html", "Ressources gratuites") + " et " + a("tools.html", "Outils gratuits") + ".",
      gift: "Quelle jolie idée ! 🎁 Vous pouvez offrir n'importe quel planificateur, livre ou roman. Écrivez-nous sur WhatsApp au " + WA + ", dites-nous que c'est un cadeau et nous nous en occupons. Aucune expédition nécessaire. Idées : " + a("gift-a-planner.html", "Gift a Planner") + ".",
      preview: "Oui ! 📖 Les 3 premiers chapitres de <b>A Dream For You</b> se lisent gratuitement sur sa page : " + a("novel-a-dream-for-you.html", "lire les chapitres gratuits") + ". Vous pouvez aussi voir un aperçu de " + a("novel-bheriya-ki-rooh.html", "Bheriya Ki Rooh") + "."
    }
  };

  /* ---------- Words Yue recognises (all languages together) ---------- */
  var R = {
    paid: /(kar di\b|kardi\b|kar diya|bhej di|bhej diya|sudah (bayar|transfer)|already (paid|bought)|i('| ha)ve (paid|bought)|i paid|i bought|j'ai (pay|ach)|ya (pag|compr)|ادائیگی کر دی|پیمنٹ کر دی|دفعت)/,
    refund: /(refund|money back|return policy|rembours|reembols|devoluci|paise? wapas|paisa wapas|pengembalian dana|uang kembali|환불|반품|ریفنڈ|رقم واپس|پیسے واپس|استرجاع|استرداد|ريفند|رد المبلغ|रिफंड|पैसे वापस)/,
    preview: /(((free|first|sample|read).{0,15}chapters?)|(chapters?.{0,12}(free|gratis))|(novel.{0,15}(preview|sample))|((preview|sample).{0,15}novel)|(free (baab|sample))|(pehla baab|pehle baab)|(bab (gratis|pertama))|(미리보기|샘플)|(مفت (باب|ابواب))|(پہلا باب|پری ویو)|(الفصل الأول|فصل مجاني|معاينة)|(पहला अध्याय|मुफ्त अध्याय|प्रीव्यू)|(cap[ií]tulo gratis|primer cap[ií]tulo|muestra de la novela)|(chapitre gratuit|premier chapitre|extrait))/,
    bundle: /(discount|bundle|coupon|promo|bundle10|special offer|diskon|bundel|potongan|할인|번들|쿠폰|ڈسکاؤنٹ|رعایت|بنڈل|آفر|کوپن|خصم|تخفيض|كوبون|حزمة|باقة|छूट|डिस्काउंट|बंडल|ऑफर|कूपन|descuento|paquete|cup[oó]n|r[eé]duction|remise|code promo|sasta|sasti)/,
    gift: /(\bgift|present for|eidi|tohfa|tohfay|tuhfa|hadiah|kado|선물|تحفہ|تحفے|گفٹ|عیدی|هدية|هديه|إهداء|اهداء|عيدية|उपहार|गिफ्ट|तोहफ|regalo|regalar|cadeau|offrir)/,
    order: /(how (do|can|to|should) (i |we )?(order|buy|purchase|pay)|place (an )?order|payment (method|option)s?|how to pay|(order|kharid|khareed|buy|payment) (kaise|kese|krna|karna)|kaise (order|kharid|khareed|buy|payment|pay|le|lun)|kese (order|kharid|buy|lena)|cara (pesan|memesan|beli|membeli|bayar|order)|metode pembayaran|pembayaran|주문 ?방법|구매 ?방법|결제|어떻게 (사|구매|주문)|کیسے (آرڈر|خرید|لوں|منگوا)|آرڈر کیسے|ادائیگی|خریدنے کا طریقہ|كيف (اطلب|أطلب|اشتري|أشتري|ادفع|أدفع)|طريقة (الطلب|الشراء|الدفع)|الدفع|कैसे (ऑर्डर|खरीद|मंगा|भुगतान)|ऑर्डर कैसे|भुगतान|पेमेंट|c[oó]mo (compro|comprar|pedir|pago|pagar)|forma de pago|m[eé]todos? de pago|hacer (un )?pedido|comment (acheter|commander|payer)|mode de paiement|moyens? de paiement|passer commande)/,
    delivery: /(deliver|shipping|do you ship|ship it|physical|hard ?copy|goodnotes|ipad|download link|file format|which format|can i print|how (to|do i) print|how (do|can) i (receive|get) (it|my|the)|kaise (milega|milegi|milti|milay|mile|milta)|kab (milega|milegi)|print kar|pengiriman|dikirim|cara (menerima|mendapat)|fisik|cetak|배송|배달|어떻게 받|인쇄|ڈیلیوری|ملے گی|ملے گا|ہارڈ کاپی|پرنٹ|شپنگ|التوصيل|الشحن|كيف (استلم|أستلم|احصل|أحصل)|نسخة ورقية|طباعة|डिलीवरी|कैसे (मिलेगा|मिलेगी|मिलती)|हार्ड कॉपी|प्रिंट|शिपिंग|env[ií]o|entrega|c[oó]mo (recibo|llega)|imprimir|f[ií]sico|livraison|exp[eé]dition|comment (recevoir|je re[cç]ois)|imprimer|physique)/,
    free: /(freebies?|free (stuff|things|resources|tools|printables|downloads|goodies|cheez|cheezen)|anything free|any free|something free|koi free|kuch free|mufat|muft|gratisan|yang gratis|ada.{0,8}gratis|무료 ?(자료|도구|다운)|공짜|مفت|فری|مجاني|مجانا|مجانية|मुफ्त|मुफ़्त|फ्री|निःशुल्क|gratis|gratuito|gratuita|gratuit)/,
    thanks: /(gracias|merci|شكرا|شكراً|جزاك الله|بارك الله|धन्यवाद|शुक्रिया|شکریہ|جزاک اللہ|شکریه)/,
    hello: /(hola|buenas|buenos d[ií]as|bonjour|salut|bonsoir|السلام عليكم|السلام علیکم|مرحبا|اهلا|أهلاً|هلا|नमस्ते|हेलो|हैलो|सलाम|अस्सलाम|سلام|ہیلو)/,
    who: /(qui[eé]n (hizo|cre[oó]|dise[nñ][oó])|creador|qui a (cr[eé]+|fait|con[cç]u)|cr[eé]ateur|من (صنع|أنشأ|انشأ|صمم)|مؤسس|किसने (बनाया|बनाई)|संस्थापक|कौन ने|کس نے (بنایا|بنائی)|مالک|بانی)/,
    name: /(c[oó]mo te llamas|tu nombre|comment tu t'appelles|ton nom|comment vous appelez|ما اسمك|اسمك|तुम्हारा नाम|आपका नाम|آپ کا نام|تمہارا نام)/,
    bought: /(ya compr[eé]|he comprado|compr[eé]|j'ai (achet[eé]|command[eé])|اشتريت|طلبت|खरीद लिया|खरीदा|पेमेंट कर दी|भुगतान कर दिया|خرید لیا|خریدا|منگوا لیا)/,
    contact: /(contacto|correo|tel[eé]fono|n[uú]mero|whatsapp|e-?mail|num[eé]ro|t[eé]l[eé]phone|تواصل|واتساب|واتس اب|بريد|رقم|संपर्क|व्हाट्सएप|व्हाट्सऐप|ईमेल|नंबर|नम्बर|رابطہ|واٹس ایپ|واٹس اپ|ای میل|نمبر)/,
    price: /(precio|cu[aá]nto (cuesta|vale)|costo|prix|combien|co[uû]te|tarif|سعر|اسعار|أسعار|ثمن|بكم|कीमत|दाम|कितने का|कितना|मूल्य|प्राइस|قیمت|کتنے کا|کتنی|ریٹ|پرائس)/,
    recommend: /(recomiend|sugier|recommand|conseill|libro|libros|livre|livres|planificador|planificateur|agenda|cuaderno|carnet|ترشح|انصح|أنصح|كتاب|كتب|مخطط|مخططات|مفكرة|सुझाव|सलाह|किताब|किताबें|पुस्तक|प्लानर|کتاب|کتابیں|پلانر|مشورہ|تجویز)/
  };

  /* Extra words that help the existing product matcher understand other languages */
  var AUG = [
    [/(رواية|روايات|novela|roman\b|उपन्यास|ناول|novel)/, " novel urdu novel"],
    [/(قرآن|القرآن|coran|corán|कुरान|क़ुरआन|قرآن)/, " quran islamic"],
    [/(إسلام|اسلامي|إسلامي|islamique|isl[aá]mico|इस्लाम|اسلام)/, " islamic"],
    [/(كوري|الكورية|coreano|corée|cor[eé]en|कोरियाई|कोरियन|کورین|کوریائی)/, " korean"],
    [/(مخطط|planificador|planificateur|प्लानर|پلانر|agenda)/, " planner"],
    [/(دفتر القراءة|diario de lectura|carnet de lecture|रीडिंग जर्नल|ریڈنگ جرنل)/, " reading journal"]
  ];

  var NEW_LANGS = { urd: 1, ar: 1, hi: 1, es: 1, fr: 1 };

  function extend(T) {
    Object.keys(X).forEach(function (lang) {
      if (!T[lang]) T[lang] = {};
      Object.keys(X[lang]).forEach(function (k) { T[lang][k] = X[lang][k]; });
    });
  }

  var ES = ["hola","gracias","precio","cuanto","cu\u00e1nto","quiero","comprar","libro","libros","necesito","tienen","tiene","quien","qui\u00e9n","buenas","novela","planificador","regalo","descuento","pedido","env\u00edo"];
  var FR = ["bonjour","merci","prix","combien","veux","acheter","livre","livres","besoin","vous","avez","salut","bonsoir","roman","planificateur","cadeau","commande","livraison","je"];

  function score(words, list) {
    var s = 0;
    words.forEach(function (w) { if (list.indexOf(w) !== -1) s += 2; });
    return s;
  }

  function detect(text, cur) {
    if (/[\u0900-\u097F]/.test(text)) return "hi";
    if (/[\u0600-\u06FF]/.test(text)) {
      if (/[\u0679\u0688\u0691\u06BA\u06BE\u06C1\u06C3\u06CC\u06D2\u06A9\u06AF\u067E\u0686\u0698]/.test(text)) return "urd";
      if (/[\u0643\u064A\u0629\u0649\u0623\u0625]/.test(text)) return "ar";
      return (cur === "ar" || cur === "urd") ? cur : "urd";
    }
    if (/[\uAC00-\uD7AF]/.test(text)) return null;
    var t = text.toLowerCase();
    var words = t.match(/[a-z\u00e0-\u00ff']+/g) || [];
    var es = score(words, ES) + (/[\u00f1\u00bf\u00a1]/.test(t) ? 3 : 0);
    var fr = score(words, FR);
    if (es >= 2 && es > fr) return "es";
    if (fr >= 2 && fr > es) return "fr";
    return null;
  }

  function wrap(lang, html) {
    return RTL[lang] ? "<div dir='rtl' style='text-align:right'>" + html + "</div>" : html;
  }

  function respond(text, lang, T, ctx) {
    var t = text.toLowerCase();
    var L = T[lang];
    if (!L) return null;
    var isNew = !!NEW_LANGS[lang];

    if (R.paid.test(t)) { if (!isNew) return null; }

    var topics = ["refund", "preview", "bundle", "gift", "order", "delivery"];
    for (var i = 0; i < topics.length; i++) {
      var k = topics[i];
      if (R[k].test(t) && L[k] && !(R.paid.test(t) && k === "order")) return wrap(lang, L[k]);
    }

    var aug = t;
    AUG.forEach(function (p) { if (p[0].test(t)) aug += p[1]; });
    var matches = ctx.findProducts(aug);

    if (R.free.test(t) && L.free && (!matches.length || !/(weekly|planner|mingguan|hebdo|semanal|\u0633\u0627\u0628\u0646\u0627\u0645\u0647)/.test(t))) return wrap(lang, L.free);

    if (!isNew) return null;

    if (R.thanks.test(t)) return wrap(lang, L.thanks);
    if (R.name.test(t)) return wrap(lang, L.nameStory);
    if (R.who.test(t)) return wrap(lang, L.who);
    if (R.bought.test(t) || R.paid.test(t)) return wrap(lang, L.bought + "<a href='" + ctx.BASE + "index.html' target='_blank'>" + ctx.BASE + "index.html</a>");
    if (R.contact.test(t)) return wrap(lang, L.contact);
    if (R.price.test(t)) return wrap(lang, L.price);
    if (matches.length) {
      return wrap(lang, matches.map(function (p) {
        var priceTxt = p.price ? (" \u2014 " + p.price) : "";
        var blurb = (p.blurb[lang]) || p.blurb.en;
        return "<b>" + p.name + "</b>" + priceTxt + "<br>" + blurb + "<br><a href='" + ctx.BASE + p.url + "' target='_blank'>" + L.view + "</a>";
      }).join("<br><br>"));
    }
    if (R.recommend.test(t)) return wrap(lang, L.recommend);
    if (R.hello.test(t) && t.length < 30) return wrap(lang, L.hello);
    return wrap(lang, L.fallback);
  }

  window.YueExt = { extend: extend, detect: detect, respond: respond };
})();
