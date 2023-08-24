import React from 'react'

export default function RowButtons({isEditing, editClick, saveClick, clickDelete}) {
// cb is destructuring props

//Ternary isEditing = condition(if) ?= true result := false result 
    return isEditing ? (
        <td>
            <button onClick={saveClick}>Save</button>
        </td>
    ) : (
        <td>
            <button onClick={clickDelete}>Delete</button>
            <button onClick={editClick}>Edit</button>
        </td>
    )
}
