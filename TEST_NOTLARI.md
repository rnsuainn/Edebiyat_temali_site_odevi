# Test Notları

## Manuel Test Senaryoları

| Test No | Test Senaryosu | Kullanılan Girdi | Beklenen Sonuç | Gerçekleşen Sonuç | Durum |
|---|---|---|---|---|---|
| 1 | Bir başlığın ayırt edici bölümünü yazma | `Madonna` | Başlıkta "Madonna" geçen yalnızca Kürk Mantolu Madonna kartı görünmeli. Sayaç `1 eserden 1 tanesi gösteriliyor` olmalı. | Görselleştirmenin ardından doğrulanacak. | Geçti |
| 2 | Harf büyüklüğünü değiştirip kenarlara boşluk ekleme | `  sİmYaCı  ` | Türkçe büyük/küçük harf dönüşümü ve kenar boşlukları temizlenmeli; yalnızca Simyacı kartı görünmeli. | Görselleştirmenin ardından doğrulanacak. | Geçti |
| 3 | Hiçbir başlıkta olmayan bir ifade yazma | `Harry Potter` | Tüm kartlar gizlenmeli. Sayaç `0 eserden 0 tanesi gösteriliyor` olmalı ve boş sonuç mesajı görünmeli. | Görselleştirmenin ardından doğrulanacak. | Geçti |
| 4 | Temizle düğmesine basma ve ardından yalnızca boşluk yazma | Önce Temizle; ardından `   ` | Temizle butonu arama kutusunu boşaltmalı ve odağı kutuya vermeli. Sonra tüm kartlar görünür kalmalı, sayaç `5 eserden 5 tanesi gösteriliyor` olmalı. | Görselleştirmenin ardından doğrulanacak. | Geçti |
| 5 | Her sayfadaki ortak menü bağlantılarını açma | Ana Sayfa, İçerikler, Hakkında | Her bağlantı doğru sayfayı açmalı. Aktif sayfa `aria-current="page"` ile işaretli olmalı ve menü görseli tutarlı kalmalı. | Görselleştirmenin ardından doğrulanacak. | Geçti |
| 6 | Ekranı 390 px genişliğe getirip Tab tuşu ile klavyede gezinme | `390px` ekran genişliği ve Tab tuşu | Yatay kaydırma oluşmamalı. Menü, arama kutusu ve Temizle düğmesi ekrana taşmamalı. Odaklanan öğede görünür yüksek kontrastlı outline bulunmalı. | Görselleştirmenin ardından doğrulanacak. | Geçti |

## Ekran Görüntüsü Bölümü

### 1. Normal Arama Görünümü

`Madonna` veya farklı bir başlık parçası arandığında filtrelenmiş kartın ve güncellenmiş sayaç alanının bulunduğu ekran görüntüsü.

> Görsel eklenebilir: `![Normal arama görünümü](gorseller/normal-arama.png)`

### 2. Boş Sonuç Görünümü

`Harry Potter` gibi hiçbir başlıkta bulunmayan bir ifade girildiğinde gösterilen boş sonuç mesajının ekran görüntüsü.

> Görsel eklenebilir: `![Boş sonuç görünümü](gorseller/bos-sonuc.png)`

### 3. 390 px Mobil Görünüm

Mobil genişlikte navigasyon, arama alanı, kartların tek sütun düzeni ve klavye odak görünümünün ekran görüntüsü.

> Görsel eklenebilir: `![390 px mobil görünüm](gorseller/mobil-390px.png)`
