import './InvoiceTable.css';

import RowButtons from './RowButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import TableHeader from './TableHeader';
import TableAddButton from './TableAddButton';
import TableRow from './TableRows';
import { useState } from 'react';
import axios from 'axios';

// let globalId = 5

const Table = ({initialInvoiceList}) => {

    const [currentList, setCurrentList] = useState(initialInvoiceList)

    const addRow = async () => {

        let {data} = await axios.post('/addInvoice', {description: 'Description goes here'})

        setCurrentList([...currentList, data])
        // //get a copy of currentList
        // const newInvoiceList = [...currentList]
        // //create a new 'blank' object for new row
        // const newRow = {
        //     id: globalId,
        //     description: 'description',
        //     rate: '',
        //     hours: ''
        // }
        // //push new object into my copied list
        // newInvoiceList.push(newRow)
        // //update list state with the new version of the list
        // //make it so there will be no duplicate ids.
        // globalId++
    }

    const deleteClick = async (id) => {

        let {data} = await axios.delete(`/removeInvoice/${id}`)

        if(!data.error){
            const filteredList = currentList.filter(el => el.id !== id)
            setCurrentList(filteredList)
        }
    }

    const rows = currentList.map((invoiceItem) =>  {

        const {id, description, rate, hours} = invoiceItem
        return (
            <TableRow
            key={id}
            id={id}
            initialInvoiceData={{description: description, rate: rate, hours: hours}}
            initialIsEditing={false}
            deleteRow={() => deleteClick(id)}
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
                    <TableAddButton addClick={addRow} />
                </tfoot>
            </table>
        </div>
    )
}

export default Table