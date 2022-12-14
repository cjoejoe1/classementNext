import React from 'react'

function FilterGreaterThan(rows, id, filterValue) {

  return rows.filter(row => {
    
    const rowValue = row.values[id]
    // console.log('what', rowValue *amo)
    return rowValue >= filterValue
  })
}

export default FilterGreaterThan
