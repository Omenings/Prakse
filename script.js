
function calculatePrice() {
  const sectionInput = document.getElementById("sections");
  const sectionCount = parseInt(sectionInput.value);
  const sectionPrice = 20;
  const pvnRate = 0.21;

  let output = "<h3>Detalizēts rēķins:</h3><ul>";
  let subtotal = 0;

  // Brīdinājums, ja vairāk nekā 35 sadaļas
  if (sectionCount > 35) {
    output += `<p style="color:red;"><strong>⚠️ Uzmanību:</strong> Mājaslapa ar vairāk nekā 35 sadaļām var prasīt būtisku izstrādes laiku!</p>`;
  }

  // Aprēķins par sadaļām
  const sectionTotal = sectionCount * sectionPrice;
  const sectionPVN = sectionTotal * pvnRate;
  output += `<li>${sectionCount} sadaļa(s) x 20 EUR = ${sectionTotal.toFixed(2)} EUR + PVN (${sectionPVN.toFixed(2)} EUR)</li>`;
  subtotal += sectionTotal;

  // Funkcionalitāšu aprēķins
  const features = document.querySelectorAll(".feature:checked");
  features.forEach(feature => {
    const name = feature.dataset.name;
    const price = parseFloat(feature.dataset.price);
    const pvn = price * pvnRate;
    output += `<li>${name} = ${price.toFixed(2)} EUR + PVN (${pvn.toFixed(2)} EUR)</li>`;
    subtotal += price;
  });

  // Kopējā summa
  const totalPVN = subtotal * pvnRate;
  const totalWithPVN = subtotal + totalPVN;

  output += "</ul><hr>";
  output += `<p>Summa bez PVN: <strong>${subtotal.toFixed(2)} EUR</strong></p>`;
  output += `<p>PVN (21%): <strong>${totalPVN.toFixed(2)} EUR</strong></p>`;
  output += `<p>Kopējā cena ar PVN: <strong>${totalWithPVN.toFixed(2)} EUR</strong></p>`;

  document.getElementById("result").innerHTML = output;
}
