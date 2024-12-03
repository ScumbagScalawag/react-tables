import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

import BasicTableRow from "./BasicTableRow";

import "./BasicTable.css";

const BasicTable = () => {

  // TODO: Remove this Test Data
  const initialTestData = [
    { id: uuidv4(), file: "face.png", fileType: "jpeg" },
    { id: uuidv4(), file: "arms.png", fileType: "jpeg" },
    { id: uuidv4(), file: "hands.png", fileType: "jpeg" },
    { id: uuidv4(), file: "fingers.png", fileType: "jpeg" },
  ];

  const [tableData, setTableData] = useState([]);

  // TODO: Remove this Test Effect
  // Reset the table data on every load
  useEffect(() => {
    setTableData(initialTestData);
  }, []); // Empty dependency array ensures this runs once

  const handleDeleteRow = (id) => {
    setTableData((prevData) => prevData.filter(row => row.id !== id));
  };

  const renderTableRows = () => {
    return tableData.map(row => (
      <BasicTableRow
        key={row.id}
        id={row.id}
        file={row.file}
        onDelete={handleDeleteRow} // NOTE: not `handleDeleteRow()`
        fileType={row.fileType}
      />
    ));
  };

  const deleteAllTableRows = () => {
    setTableData([]);
  };

  return (
    <div id="basic-table-container">
      <button className="button-basic button-delete" onClick={() => deleteAllTableRows()}>Delete All</button>
      <table id="basic-table">
        <thead>
          <tr>
            <th>File</th>
            <th>Delete</th>
            <th>fileType</th>
          </tr>
        </thead>

        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
