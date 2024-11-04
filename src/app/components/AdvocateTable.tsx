import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { ColDef } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import { Advocate } from "../../types/advocates"

interface AdvocateTableProps {
  filteredAdvocates: Advocate[]
}

export default function AdvocateTable({ filteredAdvocates }: AdvocateTableProps) {

  const colDefs: ColDef<Advocate>[] = [
    { field: 'firstName' },
    { field: 'lastName' },
    { field: 'city'  },
    { field: 'degree' },
    { field: 'specialties' },
    { field: 'yearsOfExperience' },
    { field: 'phoneNumber' }
  ];

  // TO DO - there should be loading state

  // TO DO - give each row it's own unique key

  // TO DO - the table needs CSS and borders for the rows
  // TO DO - the top specialty should be horizontally aligned with the rest of the row

  return (
    <div
      className="ag-theme-alpine-dark"
      style={{ 
        height: '50vh',
        maxHeight: '70vh',
        width: '100%' }}
    >
      <AgGridReact
          rowData={filteredAdvocates}
          columnDefs={colDefs}
      />
    </div>
      // <table>
      //   <thead>
      //     <tr>
      //       <th>First Name</th>
      //       <th>Last Name</th>
      //       <th>City</th>
      //       <th>Degree</th>
      //       <th>Specialties</th>
      //       <th>Years of Experience</th>
      //       <th>Phone Number</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {filteredAdvocates.map((advocate) => {
      //       return (
      //         <tr>
      //           <td>{advocate.firstName}</td>
      //           <td>{advocate.lastName}</td>
      //           <td>{advocate.city}</td>
      //           <td>{advocate.degree}</td>
      //           <td>
      //             {advocate.specialties.map((s) => (
      //               <div>{s}</div>
      //             ))}
      //           </td>
      //           <td>{advocate.yearsOfExperience}</td>
      //           <td>{advocate.phoneNumber}</td>
      //         </tr>
      //       );
      //     })}
      //   </tbody>
      // </table>
  );
}
