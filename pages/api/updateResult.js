import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { tanggal, jam, angka } = req.body;
    const filePath = path.join(process.cwd(), "data/historical.json");
    let data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    data.push({ tanggal, jam, angka });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return res.status(200).json({ message: "Result berhasil ditambahkan!" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
                                }
