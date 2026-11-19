# Yapay Zekâ Kullanım Notları

## Kullanılan Promptlar

| No | Prompt Özeti | Kullanım Amacı |
|---|---|---|
| 1 | Üç sayfalı HTML iskeleti, ortak semantik menü ve beş edebiyat kartının oluşturulması istendi. | Sayfa yapısını, erişilebilir navigasyonu ve zorunlu eser içeriğini hazırlamak. |
| 2 | Sıcak kağıt tonu, bordo vurgu, 390 piksel mobil düzen ve klavye odak görünümü için ortak CSS tasarlanması istendi. | Tüm sayfalara tutarlı bir edebiyat estetiği ve responsive erişilebilirlik kazandırmak. |
| 3 | JavaScript ile yalnızca kitap başlıklarını filtreleyen, Türkçe karakter ve boşluk duyarlı arama kodu yazılması istendi. | Dinamik canlı arama, sonuç sayacı ve boş sonuç davranışını uygulamak. |
| 4 | README, AI notları ve test notları gibi zorunlu Markdown dosyalarının şablon olarak hazırlanması istendi. | Projeyi eğitim gereksinimleri ve teslim kriterleri açısından belgelendirmek. |

## Copilot Kod Önerisi Değerlendirmesi

Copilot tarafından önerilen temel arama mantığı kabul edildi çünkü `.trim()`, `toLocaleLowerCase("tr-TR")` ve `.includes()` yöntemleri başlık filtrelemesini Türkçe kullanıcı girdisine uygun ve doğrudan tarayıcı içinde gerçekleştirmektedir. Kart metinlerini seçerken yalnızca `.card-title` sorgusu kullanılacak şekilde öneri sınırlandırıldı; yazar, tür veya yorum metinlerinin sonuçlara dahil olması engellendi.

Öğeleri gizlemek için `.hidden` sınıfı kullanıldığının ve boşluk girdisinin tüm kartları görünür bırakmasının doğruluğuna da güvenildi. Temizle düğmesinde arama alanı sıfırlandıktan sonra `filterCards()` fonksiyonu çağrılmış ve kullanıcı odakının `searchInput.focus()` ile tekrar arama kutusuna alınması eklenmiştir.

## Event Listener ve Filtreleme Mantığının Açıklaması

`script.js` içindeki `input` event listener, kullanıcı arama kutusuna her karakter eklediğinde veya sildiğinde `filterCards()` fonksiyonunu çalıştırır. Böylece sayfa yenilenmeden kartlar anlık olarak başlık eşleşmesine göre yeniden düzenlenir.

Kullanıcının yazdığı metin önce `trim()` ile başındaki ve sonundaki boşluklardan arındırılır. Ardından `toLocaleLowerCase("tr-TR")` ile metin Türkçe küçük harf kurallarına göre normalize edilir. Kart başlığı da aynı işlemlerden geçirilir. `includes()` kullanılarak kullanıcı metninin başlık içinde geçip geçmediği denetlenir; eşleşme yoksa ilgili kart `.hidden` sınıfı aracılığıyla gizlenir.

Temizle düğmesindeki `click` event listener ise kutunun değerini boş string yapar, kartları yeniden filtreler, sonucu beş eser olarak günceller ve arama kutusuna odağı verir.
