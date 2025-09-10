import { useState, useEffect } from "react";
import PrediksiTable from "../../components/PrediksiTable";
import HistoricalTable from "../../components/HistoricalTable";

export default function Home() {
  const [prediksi, setPrediksi] = useState([]);
  const [historical, setHistorical] = useState([]);

  const fetchPrediksi = async () => {
    const res = await fetch("/api/generatePrediksi");
    const data = await res.json();
    setPrediksi(data);
  };

  const fetchHistorical = async () => {
    const res = await fetch("/data/historical.json");
    const data = await res.json();
    setHistorical(data);
  };

  useEffect(() => {
    fetchPrediksi();
    fetchHistorical();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sistem Prediksi Togel</h1>
      <h2 className="text-xl font-semibold mt-4">Prediksi Hari Berikutnya</h2>
      <PrediksiTable data={prediksi} />
      <h2 className="text-xl font-semibold mt-8">Data Historis</h2>
      <HistoricalTable data={historical} />
    </div>
  );
    }
