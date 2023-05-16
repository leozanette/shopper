import React from 'react';

function FileInput({handleFileChange}) {
  return (
    <form>
      <label htmlFor="file-upload">Selecione um arquivo:</label>
      <input type="file" id="file-upload" name="file-upload" accept='.csv' onChange={handleFileChange} />
    </form>
  );
}
export default FileInput;