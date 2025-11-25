import React, { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/all-data");
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Database Viewer</h1>

      {Object.keys(data).length === 0 ? (
        <p>No data found.</p>
      ) : (
        Object.keys(data).map((table) => (
          <div key={table} style={{ marginBottom: "40px" }}>
            <h2>{table}</h2>

            {/* If table is empty */}
            {data[table].length === 0 ? (
              <p>Empty table</p>
            ) : (
              <table
                border="1"
                cellPadding="10"
                style={{ borderCollapse: "collapse", width: "100%" }}
              >
                <thead>
                  <tr>
                    {Object.keys(data[table][0]).map((col) => (
                      <th key={col}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data[table].map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, i) => (
                        <td key={i}>{String(value)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Data;
