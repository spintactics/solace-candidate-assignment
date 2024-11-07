import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional Theme applied to the Data Grid

import { Advocate } from '../../types/advocates';
import ListTooltip from './ListTooltip';

interface AdvocateTableProps {
  filteredAdvocates: Advocate[];
}

export default function AdvocateTable({ filteredAdvocates }: AdvocateTableProps) {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const toggleRowExpand = (id: string) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const colDefs: ColDef<Advocate>[] = [
    { field: 'firstName', flex: 1 },
    { field: 'lastName', flex: 1 },
    { field: 'city', flex: 1 },
    { field: 'degree', maxWidth: 90, flex: 1 },
    {
      headerName: 'Specialties',
      field: 'specialties',
      flex: 2,
      autoHeight: true, // Ensure the row height adjusts based on content
      tooltipField: 'specialties',
      tooltipComponent: ListTooltip,
      cellRenderer: (params: ICellRendererParams<Advocate, string[] | null | undefined>) => {
        const nodeId = params.node.id!;
        const isExpanded = expandedRows[nodeId];

        return (
          <div style={{ position: 'relative' }} onClick={() => toggleRowExpand(nodeId)}>
            <div
              style={{ display: 'inline-block', cursor: 'pointer' }}
            >
              <span style={{ marginRight: '5px' }}>{isExpanded ? '▼' : '>'}</span> {/* Toggle icon */}
              {params.value ? params.value.slice(0, 2).join(', ') : 'No specialties'}
              {params.value && params.value.length > 2 && '...'}
            </div>

            {isExpanded && (
              <div
                style={{
                  marginBottom: '5px',
                  marginTop: '5px',
                  backgroundColor: '#f0f0f0',
                  padding: '5px',
                  border: '1px solid #ddd',
                  zIndex: 1, // Ensure visibility
                  position: 'relative',
                  whiteSpace: 'normal', // Allow text to wrap
                  overflow: 'visible', // Ensure full visibility of content
                  wordBreak: 'break-word', // Break long words to avoid overflow
                }}
              >
                {params.value?.map((specialty, index) => (
                  <div key={index}>{specialty}</div>
                ))}
              </div>
            )}
          </div>
        );
      },
    },
    { field: 'yearsOfExperience', flex: 1 },
    { field: 'phoneNumber', flex: 1 },
  ];

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: '60vh',
        maxHeight: '70vh',
        width: '100%',
      }}
    >
      <AgGridReact<Advocate>
        rowData={filteredAdvocates}
        columnDefs={colDefs}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 50]}
      />
    </div>
  );
}
