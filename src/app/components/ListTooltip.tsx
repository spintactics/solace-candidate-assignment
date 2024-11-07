import { ITooltipParams } from 'ag-grid-community';

/**
 * 
 * This is a custom component for styling and displaying a list of items
 * 
 * This was made for the specialties list, so that users can see the full list of specialties
 *  upon hovering, while maintaining a clean and consistent look & row height for the table
 */
export default function ListTooltip({ value }: ITooltipParams) {
  if (!value || !Array.isArray(value)) {
    return <div style={{ padding: '5px', backgroundColor: 'white', border: '1px solid #ccc' }}>No specialties</div>;
  }

  return (
    <div
      style={{
        padding: '10px 20px 10px 5px',
        backgroundColor: 'white', // Add a solid background color
        border: '1px solid #ccc', // Add a border for better visibility
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', // Optional shadow for a subtle effect
        borderRadius: '4px', // Rounded corners for a cleaner look
      }}
    >
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        {value.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
