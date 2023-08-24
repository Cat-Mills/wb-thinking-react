import React from 'react'

export default function TableAddButton({addClick}) {
    return (
        <tr>
            <td></td>
            <td colSpan='4'>
                <button onClick={addClick} >Add</button>
            </td>
        </tr>
    )
}
