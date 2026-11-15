# Araştırma Defteri — ilk sürüm
Adnan Gürkan İlkehan · Bahçeşehir Üniversitesi Sosyoloji

Dört statik sayfa; ortak style.css ve script.js; harici bağımlılık yok. index.html dosyasını açın veya `python3 -m http.server 8765` ile yerel sunucu başlatın.

Tema seçimi, mobil menü (Escape ile kapanır), proje filtresi ve örnek form doğrulaması bulunur. Form mesaj göndermez; ağ servisi yoktur. Tema tercihi localStorage içinde tutulabilir.

Mevcut Python projesi: https://github.com/agi1505/sosyoloji-nitel-kodlama-defteri
Üç mini uygulama bu sürümde oluşturulmuştur; tarayıcı doğrulaması beklenmektedir. Kişisel öğrenme notları ve YZ görüşü beklenmektedir.
Canlı GitHub Pages bağlantısı: Henüz yayınlanmadı.

Bu ilk sürüm nihai teslim değildir. Gerçek cihaz ekran görüntüleri, ayrıntılı erişilebilirlik ve form testleri, Word raporu sonraki aşamalardadır.

## Mini uygulamalar — Prompt 3
projeler/tema.html, anket.html, orneklem.html oluşturuldu ve kartlara bağlandı. Bu yeni uygulamalar geçmiş ders ödevleri değildir. Tema Sayacı NFC ve Türkçe küçük harf dönüşümüyle aynı alıntıdaki yinelenen temaları birleştirir. Anket Atölyesi dört kurgusal soru içerir. Örneklem aracı aynı evrenden tekrarsız örnekleme varsayar; yüzde puan farkı hesaplar. Hiçbiri ağ isteği veya kalıcı veri kaydı yapmaz.

Prompt 4 erişilebilirlik/güvenlik incelemesi ve 14 gerçek VM form testi: TESTLER.md. Statik inceleme ve tarayıcıda henüz yapılmayan kontroller ayrı belirtilmiştir.
