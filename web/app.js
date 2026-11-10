const danhSachSan = [
  { ma: "DV03-01", ten: "Phòng tiêu chuẩn", gia: 850000 },
  { ma: "DV03-02", ten: "Phòng hướng vườn", gia: 1100000 },
  { ma: "DV03-03", ten: "Phòng ban công", gia: 1350000 },
  { ma: "DV03-04", ten: "Phòng gia đình", gia: 1800000 },
];

function renderCatalog() {
  const bang = document.getElementById("bang-gia");
  for (const item of danhSachSan) {
    const row = bang.insertRow();
    row.insertCell().textContent = item.ma;
    row.insertCell().textContent = item.ten;
    row.insertCell().textContent = item.gia.toLocaleString("vi-VN");
  }
}

renderCatalog();
