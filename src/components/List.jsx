import React, { useState, useEffect } from "react"
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator'; // for React 15.x, use import { React15Tabulator }
import functionCreateActionButton from '../assets/js/globals'

const List = ({modalFunction: chooseModalOpen}) => {
    const [data, setData] = useState([])

    const getData = async () => {
        const tabledata = [
            { id: 1, nameMovement: "Salario Freelance", quantity: 2000},
            { id: 2, nameMovement: "Obrero", quantity: 2000 },
            { id: 3, nameMovement: "Almuerzo", quantity: 2000 },
            { id: 4, nameMovement: "Regalo", quantity: 2000 },
        ];
        //const result = await fetch("http://www.getmydata.com/now") // this is where you call the api and get its result
        setData(tabledata) // this is where you set the result to your state
    }

    useEffect(() => {
        getData()
    }, [])
    
    const cellClickExample = () => {
        const tabledata = [
            { id: 1, nameMovement: "Salario Freelance", quantity: 2000}
        ];
        setData(tabledata);
        console.log('di click');
    }

    const columns = [
        {
            title: "Edit", field: "id", width: 100, formatter: functionCreateActionButton, align: "center", formatterParams: {
                type: 'Edit',
            },
            cellClick: function (e, cell) {
                let row = cell.getRow();
                chooseModalOpen({}, 'Edit');
            },
        },
        {
            title: "Eliminar", field: "id", width: 100, formatter: functionCreateActionButton, align: "center", formatterParams: {
                type: 'Delete',
            },
            cellClick: function (e, cell) {
                let row = cell.getRow();
                chooseModalOpen({}, 'Delete');
            },
        },
        {
            title: "Movimiento",
            field: "nameMovement",
        },
        {
            title: "Cantidad",
            field: "quantity",
        }
    ];
    
    return (
        <ReactTabulator
            columns={columns}
            layout="fitColumns"
            data={data} // here is the state of the table
            options={{height:"230px"}}
        />
    )
}

export default List;