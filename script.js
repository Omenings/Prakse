function calculatePrice() {
  // Iegūst sadaļu skaitu no ievades lauka
  const sectionInput = document.getElementById("sections");
  const sectionCount = parseInt(sectionInput.value);

  // Cena par vienu sadaļu
  const sectionPrice = 20;

  // PVN likme
  const pvnRate = 0.21;

  // Mainīgais rezultāta HTML saturam
  let output = "<h3>Detalizēts rēķins:</h3><ul>";
  let subtotal = 0;

  // ⚠️ Ja sadaļu skaits pārsniedz 100, parādām brīdinājumu
  if (sectionCount > 100) {
    output += `<p style="color:red;"><strong>⚠️ Uzmanību:</strong> Mājaslapa ar vairāk nekā 100 sadaļām var prasīt būtisku izstrādes laiku!</p>`;
  }

  // Aprēķinām cenu par sadaļām
  const sectionTotal = sectionCount * sectionPrice;
  const sectionPVN = sectionTotal * pvnRate;
  output += `<li>${sectionCount} sadaļa(s) x 20 EUR = ${sectionTotal.toFixed(2)} EUR + PVN (${sectionPVN.toFixed(2)} EUR)</li>`;
  subtotal += sectionTotal;

  // Aprēķinām katras atzīmētās funkcionalitātes cenu
  const features = document.querySelectorAll(".feature:checked");
  features.forEach(feature => {
    const name = feature.dataset.name;
    const price = parseFloat(feature.dataset.price);
    const pvn = price * pvnRate;

    output += `<li>${name} = ${price.toFixed(2)} EUR + PVN (${pvn.toFixed(2)} EUR)</li>`;
    subtotal += price;
  });

  // PVN un kopējās cenas aprēķins
  const totalPVN = subtotal * pvnRate;
  const totalWithPVN = subtotal + totalPVN;

  // Pievienojam kopsavilkumu rezultātā
  output += "</ul><hr>";
  output += `<p>Summa bez PVN: <strong>${subtotal.toFixed(2)} EUR</strong></p>`;
  output += `<p>PVN (21%): <strong>${totalPVN.toFixed(2)} EUR</strong></p>`;
  output += `<p>Kopējā cena ar PVN: <strong>${totalWithPVN.toFixed(2)} EUR</strong></p>`;

  // Parādām rezultātu lietotājam
  document.getElementById("result").innerHTML = output;
}
