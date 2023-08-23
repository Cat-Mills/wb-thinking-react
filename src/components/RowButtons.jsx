import React from 'react'

export default function RowButtons({isEditing}) {
// cb is destructuring props

//Ternary isEditing = condition(if) ?= true result := false result 
    return isEditing ? (
        <td>
            <button>Save</button>
        </td>
    ) : (
        <td>
            <button>Delete</button>
            <button>Edit</button>
        </td>
    )
}
