import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import {useEffect, useState } from 'react';

// useEffect(() => {
  
// })


export function dummyData() {
  return [];
}

const [data , setData] = useState();
export const GradeTable = () => {
  const options = {
		method: 'GET',
		url: 'https://spark-se-assessment-api.azurewebsites.net/api/student/findByStatus/enrolled?buid=U14131622?',
		// params: { category: 'all', count: '2' },
		headers: {
			'buid' : 'U14131622',
    'x-functions-key' : 'SHSHFt8CN3CxKEUGRrPt0hQohqQ3YDWF0DNT0UaQqIALAzFuCzfNfw==',
		},
	};
	axios
		.request(options)
		.then(function ({ data }: { data: Response }) {
			console.log(data);

		})
		.catch(function (error: any) {
			console.error(error);
		});


  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Student ID', width: 70 },
    { field: 'Student Name', headerName: 'Student name', width: 130 },
    { field: 'id', headerName: 'Class ID', width: 130 },
    {
      field: 'Class Name',
      headerName: 'Class Name',
      type: 'number',
      sortable : true,
      width: 90,
    },
    {
      field: 'Semester',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'Final Grade',
      headerName: 'Final Grade',
      sortable: false,
      width: 90
    },
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  return <>
    <DataGrid
  rows={rows}
  columns={columns}
  // paginationModel={{ page: 0, pageSize: 5 }}
  checkboxSelection
/>
  </>;
};
