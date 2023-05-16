import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import '../assets/Grid.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { postalCodeLookup } from "../utils/postalCodeLookup";


const Grid = () => {
  const [rowData, setRowData] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [colDefs] = useState([
    { field: 'postcode', headerName: 'Postal Code', },
    { field: 'region' },
    { field: 'country' },
    { field: 'area' },
    { field: 'parliamentaryConstituency', headerName: 'Parliamentary Constituency', width: 250 },
    { field: 'adminDistrict' },
  ]);

  useEffect(() => {
    // console.log(searchQuery);
    if (searchQuery !== "") {
      postalCodeLookup(searchQuery).then((data) => {
        console.log(data);
        setRowData(data);
      });
    }
  }, [searchQuery]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // The API call will be made automatically in the useEffect hook when `searchQuery` changes
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className='gridWrapper'>
        <input
          type="text" placeholder="Please search postal code here"
          value={searchQuery} className='searchInput'
          onChange={(event) => setSearchQuery(event.target.value)}
        /> <br></br>

        <div className="ag-theme-material" style={{ height: 600, width: 1250 }}>
          <AgGridReact columnDefs={colDefs} rowData={rowData}
            defaultColDef={{ sortable: true, filter: true }}
            pagination={true}
            overlayNoRowsTemplate={'<div>No data to display</div>'}
          >
          </AgGridReact>
        </div>
      </div>
    </form>
  );
};

export default Grid;

