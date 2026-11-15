# Gerçek çalışma günlüğü
Tarih: 14.11.2026. Bu dosya ilk sürüme aittir; altı takip promptu henüz tamamlanmamıştır.

## Doğrulanmış bilgiler ve kararlar
- Adnan Gürkan İlkehan, Bahçeşehir Üniversitesi Sosyoloji; GitHub: agi1505.
- Kullanıcı A / Araştırma Defteri tasarımını seçti.
- Kullanıcı üç mini uygulama fikrini ve hedef kitle/tasarım gerekçesi taslağını A yanıtıyla onayladı.
- Hedef kitle: öğretim elemanları, staj veren kurumlar, gelecekteki yüksek lisans değerlendirme ekipleri.
- Onaylı gerekçe: okunaklı ve düzenli sunum; kırık beyaz zemin/lacivert metin, bağlantı ve etkileşimlerde turkuaz, amacı ve araçları görünür kılan sade kartlar.
- Mini uygulamalar mevcut ders ödevi olarak gösterilmedi. Kişisel öğrenme notları ve YZ görüşleri henüz alınmadı.

## Takip promptu 1 — tam metin
> Araştırma Defteri tasarımını sosyoloji portfolyoma uyarla. Ana sayfa, Hakkımda, Projeler ve İletişim sayfalarının içerik planını çıkar. İncelediğin Nitel Görüşme Kodlama Defteri projemi doğru özellikleriyle tanıt; bu süreçte geliştirilecek üç özgün sosyoloji mini uygulaması öner ve bunları önceki ders ödevlerimden açıkça ayır. Hedef kitle ve tasarım gerekçesi için onaylayabileceğim kısa bir taslak sun.

Gerçek işlem/yanıt: Dört sayfanın içerik planı çıkarıldı. Tema Sayacı, Anket Sorusu Atölyesi, Örneklem Karşılaştırıcısı önerildi. Kullanıcı önerileri ve gerekçe taslağını onayladı. Kod üretilmedi veya test çalıştırılmadı.

## Takip promptu 2 — tam metin
> Onayladığım Araştırma Defteri tasarımının dört sayfalı ilk çalışan sürümünü oluştur. Ortak CSS ve JavaScript, özgün SVG avatar ve proje görselleri kullan. Açık/koyu tema, erişilebilir mobil menü ve proje filtreleme işlevlerini ekle. Mevcut Python projemi gerçek GitHub bağlantısıyla göster; henüz tamamlanmayan mini uygulamaları hazırmış gibi sunma. İletişim formunun mesaj göndermeyen bir örnek olduğunu açıkça belirt. Yaptığın işlemleri ve gerçekten gerçekleştirdiğin kontrolleri PROMPTLAR.md dosyasına kaydet. Hakkımda metnini tamamlamak için sosyolojide kodlama ve yapay zekâ hakkındaki görüşümü kısa bir A/B/C sorusuyla öğren.

Gerçek işlem: index.html, hakkimda.html, projeler.html, iletisim.html, ortak style.css/script.js, beş özgün SVG ve README üretildi. Açık/koyu tema, mobil menü/Escape, filtreleme ve örnek form doğrulaması kodlandı. Mini uygulamalar geliştirme planı olarak işaretlendi. Form veri göndermez veya kaydetmez; yalnızca tema tercihi localStorage kullanır.

Kontroller:
- Python HTMLParser ile dört HTML dosyası ve 36 yerel dosya başvurusu incelendi; eksik hedef bulunmadı.
- Dört sayfada header/nav/main/footer ve Türkçe dil bildirimi bulundu.
- Statik kod incelemesi: iki @media kuralı, label/alan eşleşmeleri, odak stilleri, skip link, aria-current, menü aria-expanded ve filtre aria-pressed durumları var. Bunlar tam erişilebilirlik denetimi değildir.
- Kullanıcı girdisi innerHTML ile sayfaya aktarılmıyor; geri bildirim textContent kullanıyor. Harici betik/izleyici yok.
- Yerel HTTP sunucusu başlatma denemesi işletim ortamı tarafından engellendi (port açma izni yok).
- Tarayıcıda file: önizleme güvenlik politikası nedeniyle engellendi. Gerçek tarayıcı etkileşim testi ve cihaz ekran görüntüsü yapılmadı.
- Node komutu bulunamadığından JavaScript sözdizimi kontrolü bu yöntemle çalıştırılamadı.
- Bu sürümde testle tespit edilmiş bir erişilebilirlik/güvenlik hatası ve doğrulanmış düzeltme henüz yoktur; böyle bir bulgu uydurulmadı.

Bekleyenler: Kullanıcının kodlama/YZ görüşü, çalışan üç mini uygulama, gerçek tarayıcı kontrolleri, üç boyutta ekran görüntüsü, ayrıntılı test kaydı, en az altı gerçek takip promptu, yansıtma ve Word raporu, GitHub Pages yayını. İlk sürüm nihai teslim değildir.

## Prompt 2 sonrası gerçek kullanıcı kararı
Kullanıcı C seçeneğini seçti: “Kullanımlarını öğrenmek istiyorum ama hataları ve gizlilik riskleri konusunda temkinliyim.” Hakkımda paragrafı bu yaklaşımı yansıtacak şekilde güncellendi. Bu seçim yeni bir takip promptu olarak sayılmadı. Statik kontrol: eski bekleyen görüş notu kaldırıldı; yeni paragraf dosyada doğrulandı.

## Takip promptu 3 — tam metin
> Portfolyomdaki Tema Sayacı, Anket Sorusu Atölyesi ve Örneklem Karşılaştırıcısı mini uygulamalarını oluştur. Yalnızca kurgusal veri kullan; hiçbir girdiyi sunucuya gönderme veya kalıcı kaydetme. Her uygulamada kısa kullanım açıklaması, örnek veri ve sıfırlama düğmesi olsun. Tema Sayacı Türkçe harfleri ve yinelenen temaları doğru ele alsın. Örneklem karşılaştırması, oran benzerliğinin tek başına temsil gücünü kanıtlamadığını açıklasın. Tamamladığın uygulamaları proje kartlarına bağla ve gerçekten yaptığın kontrolleri günlüğe kaydet.

Gerçek işlem: Üç HTML mini uygulama ve ortak uygulamalar.js üretildi. Kartlar uygulamalara bağlandı; yeni üretim etiketi korundu. Her uygulamaya kullanım bilgisi, kurgusal örnek yükleme ve sıfırlama eklendi. Uygulamalar veri göndermez; yalnızca açık sayfanın belleğini kullanır. Python deposunun bağlantısı korundu. Kişisel öğrenme notları onay bekliyor.

Gerçek JavaScript testleri (Node.js VM, tarayıcı/DOM testi değildir): 13/13 başarılı.
1. Eğitim/EĞİTİM birleştirme ve aynı alıntıdaki yinelemeyi kaldırma.
2. Türkçe I/ı eşleştirme.
3. Birleşik/ayrışık Unicode NFC eşleştirme.
4. Boş tema parçalarını atma.
5. İç boşlukları ve Türkçe harfleri normalleştirme.
6. [500,300,200] ve [30,50,20] için ilk grubun farkı −20 yüzde puan.
7. Orantılı örneklemde fark sıfır.
8–13. Sıfır toplam, negatif, kesir, boş alan (NaN), evren grubundan fazla örneklem ve üst sınırı aşan girdiler reddedildi.
Ortak script.js ayrıca Node.js VM ile sözdizimi bakımından başarıyla derlendi. Önceki aşamadaki terminal Node eksikliği, bu aşamada farklı JavaScript çalışma ortamı kullanılarak aşıldı.

Statik güvenlik incelemesi: Uygulamalar DOM metinlerini textContent ile üretir; eval/innerHTML/fetch veya kalıcı depolama kullanmaz. Formların submit olayları preventDefault ile durdurulur. Gerçek tarayıcı etkileşimi, ekran görüntüsü ve tam erişilebilirlik testi hâlâ bekliyor. Testte ortaya çıkarılmış bir güvenlik/erişilebilirlik hatası henüz yoktur; sahte bulgu eklenmedi.

Statik dosya doğrulaması: 7 HTML sayfasındaki 54 yerel dosya başvurusunda eksik hedef bulunmadı. ZIP açılarak bütünlüğü ve kökte index.html bulunduğu doğrulandı.

## Takip promptu 4 — tam metin
> Portfolyomu ve üç mini uygulamayı erişilebilirlik, güvenlik ve gizlilik açısından eleştirel incele. Klavye kullanımı, form hata mesajları, ekran okuyucu bildirimleri, renk kontrastı ve güvenli kullanıcı girdisini kontrol et. Gerçek bulguları düzelt ve yeniden doğrula; sahte hata üretme. Tarayıcı testleriyle statik incelemeyi ayrı kaydet. İletişim formu için en az on test senaryosu hazırla ve yapabildiklerini gerçekten çalıştır.

Gerçek işlem: Tema Sayacı hata ilişkileri, aria-invalid ve odak eksikleri düzeltildi. Masaüstü menü düğmesi gizlendi. Trim açıklaması ve form gizlilik ifadesi düzeltildi. Konu seçenekleri izin listesiyle denetlendi; mini uygulamalara noscript eklendi.
Gerçek doğrulama: İletişim formunun mevcut script.js submit işleyicisi Node.js VM + basit DOM taklidi ile 14/14 senaryoda beklenen sonucu verdi; preventDefault ve hata odak çağrıları doğrulandı. Sekiz CSS renk çifti hesaplamada 4.5:1 üzerinde bulundu. Uygulama JS sözdizimi derlendi. Yedi HTML dosyasının etiketleri, ID/aria referansları, alt metin ve yerel hedefleri statik kontrolden geçti. Ayrıntılı giriş/beklenen/gözlenen/yöntem/sonuç ve gerçek bulgular TESTLER.md içinde.
Tarayıcı/ekran okuyucu testi yapılmadı. Daha önce belgelenmiş önizleme engeli sürüyor; ekran görüntüsü üretilmedi. Öğrenci adına yeni bir karar veya test deneyimi uydurulmadı.
