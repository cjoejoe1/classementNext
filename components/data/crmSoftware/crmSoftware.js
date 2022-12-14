import React, {useMemo} from 'react'
import { useTable, useSortBy, useBlockLayout } from 'react-table'
import { useSticky } from 'react-table-sticky'
import theData from './crmSoftware.json'
import Columns from './crmSoftware-columns'
import { FaSortDown, FaSortUp, FaSort} from 'react-icons/fa'
import "bootstrap/dist/css/bootstrap-grid.css"
import * as Bs from "react-bootstrap"
import { Styles } from './TableStyles'



function HebergementPodcast(props) {


  const columns = useMemo(() => Columns({numMonth: props.numMonth}), [props.numMonth])
  const data = useMemo(() => theData, [])


  // console.log('theData', theData.find(o => o.id === 2))

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
    columns: columns,
    data: data,
    initialState: {
      sortBy: [
          {
              id: 'PriceFRYearly',
              desc: false
          }
      ]
  }
  }, 
  useSortBy,
  useBlockLayout,
  useSticky)


  return (
    <>


    <Bs.Container style={{marginTop: 10, maxWidth: 1280, marginLeft: -10, marginRight: -10}}>

    <Styles id='dataTableDesktop'>
      <div {...getTableProps()} className="table sticky" >
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div 
                {...column.getHeaderProps(column.getSortByToggleProps())}
                
                {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
                  <span style={{cursor: 'pointer'}}>
                  {column.isSorted ? (column.isSortedDesc ?  <FaSortDown style={{marginLeft: 10}}/>: <FaSortUp style={{marginLeft: 10}}/>): <FaSort style={{marginLeft: 10}}/> }
                </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div {...getTableBodyProps()} className="body" style={{fontSize: 18, color: 'black'}}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr" 
              >
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        
      </div>
    </Styles>
    </Bs.Container>
    </>
  )
}

export default HebergementPodcast
