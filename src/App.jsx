import './App.css';
import Table from './components/Table';

// const TEST_DATA = [
//   { id: 0, description: 'Content plan', rate: 50, hours: 4 },
//   { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
//   { id: 2, description: 'Website design', rate: 50, hours: 5 },
//   { id: 3, description: 'Website development', rate: 100, hours: 5 },
// ];

function App({initialData}) {
  return <Table initialInvoiceList={initialData}/>;
  // passing initialInvoiceList as a prop to Table 
}

export default App;
