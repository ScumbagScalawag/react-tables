// CORRECT: onDelete={funct}. INCORRECT: onDelete={funct()}
const BasicTableRow = ({ id, file, onDelete, fileType }) => {
  return (
    <tr> 
      <td>{file}</td>
      <td>
        <button className="button-basic button-delete"onClick={() => onDelete(id)}>Delete</button>
      </td>
      <td>{fileType}</td>
    </tr>
  );
};

export default BasicTableRow;
