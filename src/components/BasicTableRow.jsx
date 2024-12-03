// CORRECT: onDelete={funct}. INCORRECT: onDelete={funct()}
const BasicTableRow = ({ id, file , fileType, onDelete }) => {
  return (
    <tr> 
      <td>{file}</td>
      <td>{fileType}</td>
      <td>
        <button onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default BasicTableRow;
