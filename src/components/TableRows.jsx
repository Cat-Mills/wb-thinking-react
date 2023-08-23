import './InvoiceTable.css';
import RowButtons from './RowButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import formatCurrency from '../utils/formatCurrency';

const TableRow = ({initialInvoiceData, initialIsEditing}) => {

    const {description, rate, hours} = initialInvoiceData

    return (
        <tr>
            <RowButtons isEditing={initialIsEditing}/>
            <DescriptionCell isEditing={initialIsEditing} value={description}/>
            <RateCell isEditing={initialIsEditing} value={rate}/>
            <HoursCell isEditing={initialIsEditing} value={hours}/>
            <td>{formatCurrency(rate * hours)}</td>
        </tr>
    )
}

export default TableRow