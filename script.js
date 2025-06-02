
function calculatePrice() {
  const sectionCount = parseInt(document.getElementById("sections").value);
  let basePrice = sectionCount * 20;

  const features = document.querySelectorAll(".feature:checked");
  features.forEach(feature => {
    basePrice += parseFloat(feature.dataset.price);
  });

  const pvn = basePrice * 0.21;
  const totalPrice = basePrice + pvn;

  document.getElementById("result").innerHTML = `
    <p>Kopējā cena (bez PVN): ${basePrice.toFixed(2)} EUR</p>
    <p>PVN (21%): ${pvn.toFixed(2)} EUR</p>
    <p><strong>Kopējā cena ar PVN: ${totalPrice.toFixed(2)} EUR</strong></p>
  `;
}
