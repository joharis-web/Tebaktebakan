import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const historicalPath = path.join(process.cwd(), "data/historical.json");
  const historicalData = JSON.parse(fs.readFileSync(historicalPath, "utf8"));

  let digitCount2D = {};
  let digitCount3D = {};

  historicalData.forEach(item => {
    const angka = item.angka;
    if (angka.length >= 2) {
      const d2 = angka.slice(-2);
      digitCount2D[d2] = (digitCount2D[d2] || 0) + 1;
    }
    if (angka.length >= 3) {
      const d3 = angka.slice(-3);
      digitCount3D[d3] = (digitCount3D[d3] || 0) + 1;
    }
  });

  const sortByCount = obj => Object.keys(obj).sort((a,b) => obj[b]-obj[a]);
  const prediksi2D = sortByCount(digitCount2D).slice(0,9);
  const prediksi3D = sortByCount(digitCount3D).slice(0,6);
  const jamRekomendasi = ["00:00","16:00","19:00"];

  const today = new Date();
  const prediksiHariIni = [{
    tanggal: today.toLocaleDateString(),
    prediksi2D,
    prediksi3D,
    jamRekomendasi
  }];

  res.status(200).json(prediksiHariIni);
    }
