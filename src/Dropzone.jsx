import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function getChartData(item) {
  switch (item) {
    case 'Item 1':
      return {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
          },
        ],
      };
    case 'Item 2':
      return {
        labels: ['Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [5, 2, 3],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1,
          },
        ],
      };
    case 'Item 3':
      return {
        labels: ['Red', 'Green', 'Blue'],
        datasets: [
          {
            label: '# of Votes',
            data: [8, 14, 7],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
          },
        ],
      };
    default:
      return null;
  }
}

const DropZone = ({ droppedItem, onDrop }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    const item = event.dataTransfer.getData('item');
    if (item) {
      onDrop(item);
    }
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const data = droppedItem ? getChartData(droppedItem) : null;

  return (
    <div className="dropzone" onDrop={handleDrop} onDragOver={allowDrop}>
      {droppedItem ? (
        <>
          <h3>{droppedItem}</h3>
          {data && <Bar data={data} />}
        </>
      ) : (
        <p>Drop items here</p>
      )}
    </div>
  );
};

export default DropZone;