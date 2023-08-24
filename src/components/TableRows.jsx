import './InvoiceTable.css';
import RowButtons from './RowButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import formatCurrency from '../utils/formatCurrency';
import { useState } from 'react';
import axios from 'axios';


const TableRow = ({initialInvoiceData, initialIsEditing, deleteRow, id}) => {

    const [isEditing, setIsEditing] = useState(initialIsEditing)
    const [description, setDescription] = useState(initialInvoiceData.description)
    const [rate, setRate] = useState(initialInvoiceData.rate)
    const [hours, setHours] = useState(initialInvoiceData.hours)

    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = async () => {

        let bodyObj = {
            description,
            rate,
            hours
        }

        const {data} = await axios.put(`/editInvoice/${id}`, bodyObj)
        if(!data.error){
            setIsEditing(false)
            // setDescription(data.description)
            // setRate(data.rate)
            // setHours(data.hours)
        } else {
            alert('Something broke! Try again!')
        }
        
    }

    return (
        <tr>
            <RowButtons 
                isEditing={isEditing} 
                editClick={changeEditMode} 
                saveClick={changeNormalMode}
                clickDelete={deleteRow}
            />
            <DescriptionCell 
                isEditing={isEditing} 
                value={description} 
                onValueChange={setDescription} />
            <RateCell 
                isEditing={isEditing} 
                value={rate} 
                onValueChange={setRate}/>
            <HoursCell 
                isEditing={isEditing} 
                value={hours} 
                onValueChange={setHours} />
            <td>{formatCurrency(rate * hours)}</td>
        </tr>
    )
}

export default TableRow