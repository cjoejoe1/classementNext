import React, {useEffect, useMemo} from 'react'
import { useTable, useSortBy, useBlockLayout, useFilters } from 'react-table'
import { useSticky } from 'react-table-sticky'
import theData from './hebergementPodcast.json'
import Columns from './hebergementPodcast-columns'
import { FaSortDown, FaSortUp, FaSort} from 'react-icons/fa'
import "bootstrap/dist/css/bootstrap-grid.css"
import * as Bs from "react-bootstrap"
import { Styles } from './TableStyles'



function TableT ({priceOutside, storageOutside, multiplierOutside}){

  const columns = useMemo(() => Columns({numMonth: multiplierOutside}), [multiplierOutside])
  const data = useMemo(() => theData, [])



  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter} = useTable({
    columns: columns,
    data: data,
    initialState: {
      sortBy: [
          {
              id: 'PriceFR',
              desc: false
          }
      ]
    }
  },
  useFilters,
  useSortBy,
  useBlockLayout,
  useSticky)

  useEffect(() => {
    setFilter("PriceFR", priceOutside);
  }, [priceOutside]);

  useEffect(() => {
    setFilter("Storage", storageOutside);
  }, [storageOutside]);



  console.log('multiplier', multiplierOutside)

  return (
    <>
 {/* <Input style={{height: 50, padding: 10, marginLeft: 6, marginTop:20}} placeholder="Stockage"
 onChange={(e) => setFilter("Storage", e.target.value)}/> */}

    <Bs.Container style={{marginTop: 10, maxWidth: 1280, marginLeft: -10, marginRight: -10}}>

   
<Styles>
     

      <div {...getTableProps()} className="table sticky" >
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div key={1} {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div key={2} 
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
              <div key={3} {...row.getRowProps()} className="tr" 
              >
                {row.cells.map((cell) => (
                  <div key={4} {...cell.getCellProps()} className="td">
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


// function HebergementPodcast(props) {
//   // <Columns/>

//   // const columns = Columns(props.numMonth, props.cat)
//   // const thing = Columns({
//   //   numMonth: props.numMonth,
//   // })
//   // const columns = Columns(props.numMonth)
//   const columns = useMemo(() => COLUMNS, [])
//   const data = useMemo(() => theData, [])
//   const [age, setAge] = useState(0);

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter} = useTable({
//     columns: columns,
//     data: data,
//     ageOutside: PriceFR,
//     initialState: {
//       sortBy: [
//           {
//               id: 'PriceFR',
//               desc: false
//           }
//       ]
//     }
//   },
//   useFilters,
//   useSortBy,
//   useBlockLayout,
//   useSticky)

// useEffect(()=> {
//   setFilter('PriceFR', ageOutside);
// }, [ageOutside])

// // Use a custom filter function
// const customFilterFunction = (rows, id, filterValue) =>
//   rows.filter((row) => row.original.age >= filterValue);

//   return (
//     <>
//  <Input style={{height: 50, padding: 10, marginLeft: 6, marginTop:20}}
//         placeholder="Stockage"
//         onChange={(e) => setFilter("Storage", e.target.value)}
//       />
// <p>Min age is {age}</p>
//       <input
//         type="range"
//         value={PriceFR}
//         onChange={(e) => {
//           setAge(e.target.value);
//         }}
//       />
//     <Bs.Container style={{marginTop: 10, maxWidth: 1280, marginLeft: -10, marginRight: -10}}>

   
// <Styles>
     

//       <div {...getTableProps()} className="table sticky" >
//         <div className="header">
//           {headerGroups.map((headerGroup) => (
//             <div {...headerGroup.getHeaderGroupProps()} className="tr">
//               {headerGroup.headers.map((column) => (
//                 <div 
//                 {...column.getHeaderProps(column.getSortByToggleProps())}
                
//                 {...column.getHeaderProps()} className="th">
//                   {column.render('Header')}
//                   <span style={{cursor: 'pointer'}}>
//                   {column.isSorted ? (column.isSortedDesc ?  <FontAwesomeIcon icon={faSortDown} style={{marginLeft: 10}}/>: <FontAwesomeIcon icon={faSortUp} style={{marginLeft: 10}}/>): <FontAwesomeIcon icon={faSort} style={{marginLeft: 10}}/> }
//                 </span>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         <div {...getTableBodyProps()} className="body" style={{fontSize: 18, color: 'black'}}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <div {...row.getRowProps()} className="tr" 
//               >
//                 {row.cells.map((cell) => (
//                   <div {...cell.getCellProps()} className="td">
//                     {cell.render('Cell')}
//                   </div>
//                 ))}
//               </div>
//             );
//           })}
//         </div>
        
//       </div>
//     </Styles>
//     </Bs.Container>
//     </>
//   )
// }

export default TableT
