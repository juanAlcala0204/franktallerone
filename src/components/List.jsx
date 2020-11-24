import React, { useState, useEffect } from "react"
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator'; // for React 15.x, use import { React15Tabulator }
import {functionCreateActionButton} from '../assets/js/globals'

const List = ({modalFunction: chooseModalOpen, dataMovements, dataTabulator,setDataTabulator}) => {
    console.log(dataMovements);

    const getData = async () => {
        const tabledata = [
            ...dataMovements
        ];
        //const result = await fetch("http://www.getmydata.com/now") // this is where you call the api and get its result
        setDataTabulator(tabledata) // this is where you set the result to your state
    }

    useEffect(() => {
        getData()
    }, [])
    
    const cellClickExample = () => {
        const tabledata = [
            { id: 1, nameMovement: "Salario Freelance", quantity: 2000}
        ];
        setDataTabulator(tabledata);
        console.log('di click');
    }
    const functionRowQuantity = () => {

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
            field: "txtFieldName",
        },
        {
            title: "Cantidad",
            field: "txtFieldQuantity",
            formatter:  function (cell, formatterParams, onRendered) {
                const row = cell.getRow();
                const data = row.getData();
                const classDesigned = data.inputTypeMovement === 'I' ? 'btn-success' : 'btn-danger';
                return '<button class="btn '+classDesigned+' btn-sm text-right">'+data.txtFieldQuantity+'</button>';
            }
        },
        {
            title: "Tipo Movimiento",
            field: "inputTypeMovement",
        }
    ];
    
    return (
        <ReactTabulator
            columns={columns}
            layout="fitColumns"
            data={dataTabulator} // here is the state of the table
            options={{height:"230px"}}
        />
    )
}

export default List;