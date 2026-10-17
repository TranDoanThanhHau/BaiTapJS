// Bài 1
const btnTinhluong = document.getElementById("btnTinhluong");
btnTinhluong.onclick = function () {
  const soNgayLam = document.getElementById("soNgayLam").value * 1;
  const pInfo = document.getElementById("pInfo");
  const result = soNgayLam * 100000;
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const ketQua = "Tổng tiền lương là: " + formatter.format(result);
  pInfo.innerHTML = ketQua;
  pInfo.style.backgroundColor = "red";
  pInfo.style.color = "white";
  pInfo.style.textAlign = "center";
  pInfo.style.fontSize = "25px";
};
// bài 2
const btnTinhGiaTriTrungBinh = document.getElementById(
  "btnTinhGiaTriTrungBinh",
);
btnTinhGiaTriTrungBinh.onclick = function () {
  const soThu1 = document.getElementById("soThu1").value * 1;
  const soThu2 = document.getElementById("soThu2").value * 1;
  const soThu3 = document.getElementById("soThu3").value * 1;
  const soThu4 = document.getElementById("soThu4").value * 1;
  const soThu5 = document.getElementById("soThu5").value * 1;
  const pInfo = document.getElementById("pInfo_1");
  const result = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  pInfo.innerHTML = `Giá trị trung bình là: ${result}`;
  pInfo.style.backgroundColor = "red";
  pInfo.style.color = "white";
  pInfo.style.textAlign = "center";
  pInfo.style.fontSize = "25px";
};
// bài 3
const btnQuyDoiTien = document.getElementById("btnQuyDoiTien");
btnQuyDoiTien.onclick = function () {
  const soTienMuonDoi = document.getElementById("soTienMuonDoi").value * 1;
  const pInfo = document.getElementById("pInfo_3");
  const result = soTienMuonDoi * 23500;
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const ketQua = "Tổng số tiền quy đổi là: " + formatter.format(result);
  pInfo.innerHTML = ketQua;
  pInfo.style.backgroundColor = "red";
  pInfo.style.color = "white";
  pInfo.style.textAlign = "center";
  pInfo.style.fontSize = "25px";
};
// bài 4
const btnTinhChuViDienTich = document.getElementById("btnTinhChuViDienTich");
btnTinhChuViDienTich.onclick = function () {
  const chieuDai = document.getElementById("chieuDai").value * 1;
  const chieuRong = document.getElementById("chieuRong").value * 1;
  const pInfo = document.getElementById("pInfo_4");
  const result_1 = chieuDai * chieuRong;
  const result_2 = (chieuDai + chieuRong) * 2;
  pInfo.innerHTML = `Diện tích hcn là: ${result_1}, chu vi hcn là: ${result_2}`;
  pInfo.style.backgroundColor = "red";
  pInfo.style.color = "white";
  pInfo.style.textAlign = "center";
  pInfo.style.fontSize = "25px";
};
// bài 5
const btnTinhTong2KySo = document.getElementById("btnTinhTong2KySo");
btnTinhTong2KySo.onclick = function () {
  const so_2 = document.getElementById("so_2").value * 1;
  const pInfo = document.getElementById("pInfo_5");
  const hangChuc = Math.floor(so_2 / 10);
  const donVi = so_2 % 10;
  const result = hangChuc + donVi;
  pInfo.innerHTML = `Tổng 2 ký số là: ${result}`;
  pInfo.style.backgroundColor = "red";
  pInfo.style.color = "white";
  pInfo.style.textAlign = "center";
  pInfo.style.fontSize = "25px";
};
