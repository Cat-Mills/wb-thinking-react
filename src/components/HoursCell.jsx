import React from 'react'

export default function HoursCell({isEditing, value, onValueChange}) {
    //Are we in edit mode? If so, make an input box for new data. If not, display current data.
    return isEditing ? (
        <td>
            <input 
                type='text' 
                value={value} 
                onChange={(e) => onValueChange(e.target.value)}
            ></input>
        </td>
    ) : (
        <td>{value}</td>
    )
}