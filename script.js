// Arama kutusunu ve İçerikler sayfasındaki gerekli alanları seçer.
const searchInput = document.getElementById("search-input");
const clearButton = document.getElementById("clear-btn");
const resultCount = document.getElementById("result-count");
const noResults = document.getElementById("no-results");
const cards = Array.from(document.querySelectorAll(".card"));

// Boşlukları temizler ve metni Türkçe kurallarına göre küçük harfe çevirir.
function normalizeText(text) {
  return text.trim().toLocaleLowerCase("tr-TR");
}

// Başlık metinlerine göre kartları filtreler ve sayaç ile boş sonuç durumunu günceller.
function filterCards() {
  if (!searchInput || !resultCount || !noResults) {
    return;
  }

  const searchText = normalizeText(searchInput.value);
  let visibleCount = 0;

  cards.forEach((card) => {
    const titleElement = card.querySelector(".card-title");
    const cardTitle = titleElement
      ? normalizeText(titleElement.textContent)
      : "";
    const matches = searchText === "" || cardTitle.includes(searchText);

    card.classList.toggle("hidden", !matches);

    if (matches) {
      visibleCount += 1;
    }
  });

  resultCount.textContent =
    `${visibleCount} eserden ${visibleCount} tanesi gösteriliyor`;

  noResults.classList.toggle("hidden", visibleCount !== 0);
  noResults.hidden = visibleCount !== 0;
}

// Sayfa ilk açıldığında toplam eser sayısını doğru biçimde gösterir.
if (searchInput && resultCount) {
  const totalCards = cards.length;
  resultCount.textContent =
    `${totalCards} eserden ${totalCards} tanesi gösteriliyor`;
}

// Kullanıcı yazdıkça yalnızca kart başlıklarına göre anlık filtreleme yapar.
if (searchInput) {
  searchInput.addEventListener("input", filterCards);
}

// Temizle düğmesi arama değerini sıfırlar ve odağı arama kutusuna verir.
if (clearButton && searchInput) {
  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    filterCards();
    searchInput.focus();
  });
}
