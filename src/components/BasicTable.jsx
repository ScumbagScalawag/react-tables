import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import BasicTableRow from "./BasicTableRow";

const BasicTable = () => {

  const [tableData, setTableData] = useState([
    { id: uuidv4(), file: "face.png", fileType: "jpeg" },
    { id: uuidv4(), file: "arms.png", fileType: "jpeg" },
    { id: uuidv4(), file: "hands.png", fileType: "jpeg" },
    { id: uuidv4(), file: "fingers.png", fileType: "jpeg" },
  ]);

  const renderTableRows = () => {
    return tableData.map(row => (
      <BasicTableRow
        key={row.id}
        file={row.file}
        fileType={row.fileType}
      />
    ));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>File</th>
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
