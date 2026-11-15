# Prompt 4 — gerçek kontroller

## İletişim formu
Yöntem: Gerçek script.js submit işleyicisi Node.js VM içinde basit DOM taklidiyle çalıştırıldı. Tarayıcı, gerçek DOM, ekran okuyucu veya ağ izleme testi değildir. 501 karakter gibi tarayıcı maxlength sınırını aşan girdiler programatik olarak sınandı.

| Senaryo | Girdi | Beklenen | Gözlenen | Sonuç |
|---|---|---|---|---|
|Boş alanlar| / |Ret|Ret|Geçti|
|Yalnız boşluk|Proje hakkında /            |Ret|Ret|Geçti|
|Konu eksik| / Yeterince uzun mesaj|Ret|Ret|Geçti|
|Mesaj eksik|Proje hakkında / |Ret|Ret|Geçti|
|9 karakter|Proje hakkında / aaaaaaaaa|Ret|Ret|Geçti|
|10 karakter|Proje hakkında / aaaaaaaaaa|Kabul|Kabul|Geçti|
|500 karakter|Proje hakkında / aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa|Kabul|Kabul|Geçti|
|501 karakter|Proje hakkında / aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa|Ret|Ret|Geçti|
|Türkçe karakterler|Genel geri bildirim / İstanbul, eğitim ve eşitsizlik.|Kabul|Kabul|Geçti|
|Özel karakterler|Proje hakkında / &lt;&gt;& " örnek içerik|Kabul|Kabul|Geçti|
|Script metni|Proje hakkında / &lt;script&gt;alert(1)&lt;/script&gt;|Kabul|Kabul|Geçti|
|Kenar boşluklar|Proje hakkında /   abcdefghij  |Kabul|Kabul|Geçti|
|Kenar boşluk kısa|Proje hakkında /   abcdefghi  |Ret|Ret|Geçti|
|Geçersiz konu|uydurma / abcdefghij|Ret|Ret|Geçti|

Tüm testlerde preventDefault ve ilk hatalı alana focus çağrısı da doğrulandı. Script girdisi veri olarak kabul edilir; kullanıcı metni HTML olarak basılmaz. Bu sonuç, gerçek tarayıcıda XSS veya ağ testi yapıldığı anlamına gelmez. E-posta alanı yoktur; e-posta testi uygulanamaz.

## Hesaplanan renk kontrastları
| Renk çifti | Oran |
|---|---|
|Açık ana metin|12.77:1|
|Açık ikincil metin|5.96:1|
|Açık vurgu|5.78:1|
|Açık hata|7.18:1|
|Koyu ana metin|14.89:1|
|Koyu ikincil|10.06:1|
|Koyu vurgu|10.19:1|
|Koyu hata|8.44:1|

Seçili CSS renk çiftleri hesaplamada 4.5:1 üzerinde. Bu, render edilmiş tüm durumların kontrast denetimi değildir.

## Statik erişilebilirlik, güvenlik ve gizlilik incelemesi
| Bulgu | Yapılan düzeltme | Yeniden doğrulama |
|---|---|---|
| Tema Sayacı hata metni textarea/input ile ilişkili değildi; aria-invalid ve ilk hatalı alana odak yoktu. | İki alana aria-describedby, dinamik aria-invalid ve hata durumunda focus eklendi. Sıfırlamada hata durumları kaldırılıyor. | HTML/JS kaynak incelemesi; gerçek ekran okuyucu testi bekliyor. |
| Mobil menü düğmesi masaüstünde de gösteriliyordu; masaüstü gezinme görünürken aç/kapa durumu yanıltıcıydı. | 651 px ve üzerinde düğme CSS ile gizlendi. | Media kuralı kaynakta doğrulandı; render testi bekliyor. |
| İletişim formu hata açıklaması tüm boşlukların çıkarıldığını söylüyordu; kod yalnız kenarları trim ediyordu. | Metin, baştaki ve sondaki boşlukların çıkarıldığını söyleyecek şekilde düzeltildi. | Kenar boşluklu 9 ve 10 karakter senaryoları gerçek işleyiciyle geçti. |
| Konu doğrulaması yalnızca doluluğu denetliyordu. | Yalnızca iki tanımlı seçenek kabul ediliyor. | Geçersiz konu testi reddedildi. |
| Form verisinin yenilemede kesin silindiği söyleniyordu; tarayıcı form geri yükleyebilir. | İfade düzeltildi; autocomplete off eklendi. Bu bir tarayıcı garantisi değildir. | Kaynak incelemesi. |
| Mini uygulamalarda JavaScript kapalıyken açıklayıcı bilgi yoktu. | Üç sayfaya noscript bilgisi eklendi. | HTML incelemesi. |

Klavye: Yerel button, select, textarea ve input öğeleri kullanılıyor; pozitif tabindex yok. Ana sayfalarda menü Escape ile kapanacak şekilde yazılmış. Görünür odak CSS kuralları ve içeriğe atla bağlantısı var. Gerçek Tab sırası/odak görünümü ve üç genişlikte taşma tarayıcıda sınanmadı.

Ekran okuyucu: Dinamik sonuçlar role=status, Tema Sayacı hatası role=alert kullanıyor. İletişim hata metinleri aria-describedby ile alanlara bağlı; ilk hatalı alan odaklanıyor. Tablolarda caption ve scope var. Bunlar statik bulgulardır; gerçek sesli çıktı doğrulanmadı.

Güvenlik: Kullanıcı metni textContent ile aktarılıyor. Kullanıcı girdisiyle innerHTML, eval veya dinamik betik üretilmiyor. Mini uygulama kodunda fetch, XMLHttpRequest, WebSocket, localStorage veya sessionStorage bulunmuyor. Ana script yalnızca tema tercihini localStorage içinde tutuyor; depolama hatası yakalanıyor. Harici script, font veya izleyici yok. CSP eklenmedi; böyle bir koruma sağlandığı iddia edilmiyor. GitHub bağlantısına kullanıcı tıklarsa GitHub'a normal gezinme gerçekleşir.

## Gerçek tarayıcı testleri — yapılmadı
Önceki aşamada yerel sunucu için port açma izni verilmedi; file: önizleme de tarayıcı politikası tarafından engellendi. Bu aşamada bu engeller aşılmaya çalışılmadı. Telefon/tablet/masaüstü ekran görüntüleri, gerçek klavye ve ekran okuyucu denemesi, render edilmiş tüm renk durumları, tarayıcı konsolu ve ağ kaydı bekliyor. VM/DOM taklidi sonuçları bu kontrollerin yerine geçmez.
