// Contoh program JavaScript dengan if-else, nested if, switch case, for, while, do while, dan function

// Contoh penggunaan if-else
let nilai = 90;

if (nilai >= 80) {
  console.log("Nilai Anda A");
} else if (nilai >= 70) {
  console.log("Nilai Anda B");
} else {
  console.log("Nilai Anda C");
}

// Contoh penggunaan nested if
let umur = 18;
let izinOrangTua = true;

if (umur >= 17) {
  if (izinOrangTua) {
    console.log("Anda boleh berkendara.");
  } else {
    console.log("Anda perlu izin orang tua.");
  }
} else {
  console.log("Anda belum cukup umur.");
}

// Contoh penggunaan switch case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari Senin.");
    break;
  case "Selasa":
    console.log("Hari ini adalah hari Selasa.");
    break;
  default:
    console.log("Hari ini adalah hari lain.");
}

// Contoh penggunaan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}

// Contoh penggunaan while
let angka = 1;

while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}

// Contoh penggunaan do while
let angka2 = 1;

do {
  console.log("Angka 2: " + angka2);
  angka2++;
} while (angka2 <= 5);

// Contoh penggunaan function
function tambah(a, b) {
  return a + b;
}

let hasilTambah = tambah(19, 2);
console.log("Hasil penjumlahan: " + hasilTambah);
