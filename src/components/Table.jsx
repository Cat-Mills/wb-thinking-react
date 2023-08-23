import './InvoiceTable.css';

import RowButtons from './RowButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import TableHeader from './TableHeader';
import TableAddButton from './TableAddButton';
import TableRow from './TableRows';

const Table = ({initialInvoiceList}) => {

    const rows = initialInvoiceList.map((invoiceItem) =>  {

        const {id, description, rate, hours} = invoiceItem
        return (
            <TableRow
            key={id}
            initialInvoiceData={{description: description, rate: rate, hours: hours}}
            initialIsEditing={false}
            />
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>
                <tbody>
                    {rows}
                </tbody>
                <tfoot>
                    <TableAddButton />
                </tfoot>
            </table>
        </div>
    )
}

export default Table