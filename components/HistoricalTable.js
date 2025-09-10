export default function HistoricalTable({ data }) {
  return (
    <table className="table-auto border-collapse border border-gray-300 w-full mt-2">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-2 py-1">Tanggal</th>
          <th className="border px-2 py-1">Jam</th>
          <th className="border px-2 py-1">Angka Result</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td className="border px-2 py-1">{row.tanggal}</td>
            <td className="border px-2 py-1">{row.jam}</td>
            <td className="border px-2 py-1">{row.angka}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
          }
