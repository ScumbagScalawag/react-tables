const BasicTableRow = ({ file , fileType }) => {

  return (
    <tr> 
      <td>{file}</td>
      <td>{fileType}</td>
    </tr>
  );
};

export default BasicTableRow;
