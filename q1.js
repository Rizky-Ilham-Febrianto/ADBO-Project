// Kelas induk
class Karyawan {
  constructor(nama, gaji) {
    this.nama = nama;
    this.gaji = gaji;
  }

  hitungBonus() {
    // Akan dioverride oleh kelas turunan
    return 0;
  }
}

// Kelas turunan: Karyawan Tetap
class KaryawanTetap extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.10; // Bonus 10%
  }
}

// Kelas turunan: Karyawan Kontrak
class KaryawanKontrak extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.05; // Bonus 5%
  }
}

// Membuat objek karyawan
const budi = new KaryawanTetap("Budi", 8000000);
const sita = new KaryawanKontrak("Sita", 6000000);

// Menyimpan dalam array
const daftarKaryawan = [budi, sita];

// Menghitung total bonus
let totalBonus = 0;

daftarKaryawan.forEach(karyawan => {
  const bonus = karyawan.hitungBonus();
  console.log(`${karyawan.nama} mendapatkan bonus sebesar Rp${bonus.toLocaleString("id-ID")}`);
  totalBonus += bonus;
});

console.log(`\nTotal bonus seluruh karyawan: Rp${totalBonus.toLocaleString("id-ID")}`);