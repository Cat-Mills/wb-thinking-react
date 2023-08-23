import React from 'react'

export default function DescriptionCell({isEditing, value}) {
    //Are we in edit mode? If so, make an input box for new data. If not, display current data.
    return isEditing ? (
        <td>
            <input type='text' value={value}></input>
        </td>
    ) : (
        <td>{value}</td>
    )
}
