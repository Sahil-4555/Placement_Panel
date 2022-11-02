import React, { useState, useEffect } from 'react';
import './tabledata.css';
// import MockData from "../API/data.json";
import { ArrowUp,ArrowDown } from 'react-bootstrap-icons';

// const useSortableData = (items, config = null) => {
//     const [sortConfig, setSortConfig] = React.useState(config);

//     const sortedItems = React.useMemo(() => {
//         let sortableItems = [...items];
//         if (sortConfig !== null) {
//             sortableItems.sort((a, b) => {
//                 if (a[sortConfig.key] < b[sortConfig.key]) {
//                     return sortConfig.direction === 'ascending' ? -1 : 1;
//                 }
//                 if (a[sortConfig.key] > b[sortConfig.key]) {
//                     return sortConfig.direction === 'ascending' ? 1 : -1;
//                 }
//                 return 0;
//             });
//         }
//         return sortableItems;
//     }, [items, sortConfig]);

//     const requestSort = (key) => {
//         let direction = 'ascending';
//         if (
//             sortConfig &&
//             sortConfig.key === key &&
//             sortConfig.direction === 'ascending'
//         ) {
//             direction = 'descending';
//         }
//         setSortConfig({ key, direction });
//     };

//     return { items: sortedItems, requestSort, sortConfig };
// };


const Admin = () => {
    const [data, getData] = useState([])
    const [order, setorder] = useState("ASC");

    // const { items, requestSort, sortConfig } = useSortableData(data);

    const URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=C_vS9AWA4S8dqv9CyDwyEPN6UhCL38uqECL9ti4h-awC_odcflnfNNKPELvmx-lCTNgzOpkbTr0FXB-37fPh3enkOAAxDAIam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLM2u_ATMx0G79HVMVKPEXFNRunYr-RCJW6r-4D9XmsPX5ai26ltMx5F2rbsS2ZvlAvVbvUtX-iXGsKeFeAqPdbjLlyNQ3ooVdz9Jw9Md8uu&lib=MpNJIOklRc_-eBCQ29KQ5zheN2ohQBFtF';

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            })

    }

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toString().toLowerCase() > b[col].toString().toLowerCase() ? 1 : -1,
            );
            getData(sorted);
            setorder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toString().toLowerCase() < b[col].toString().toLowerCase() ? 1 : -1,
            );
            getData(sorted);
            setorder("ASC");
        }
    };

    // const getClassNamesFor = (name) => {
    //     if (!setorder) {
    //         return;
    //     }
    //     return setorder === name ?  : undefined;
    // };



    return (
        <div className='admin'>
            <h1 className='header'>STUDENT INFORMATION</h1>
            <div className='container123'>
                <thead className='table'>
                    <tr>
                        <th onClick={() => sorting("ID No")}>ID  </th>
                        <th>NAME</th>
                        {setorder == 'DSC' ? <th onClick={() => sorting("HSC %")}>HSC <ArrowUp color="royalblue" size={30} /></th>:<th onClick={() => sorting("HSC %")}>HSC <ArrowDown color="royalblue" size={30} /></th>}
                        <th onClick={() => sorting("CGPA (Upto 5th Sem)")}>CGPA </th>
                    </tr>
                    {data.map((item, i) => (
                        <tr key={i}>
                            <td className='id'>{item['ID No']}</td>
                            <td>{item['Name']}</td>
                            <td className='hsc'>{item['HSC %']}</td>
                            <td className='hsc'>{item['CGPA (Upto 5th Sem)']}</td>
                        </tr>
                    ))}
                </thead>
            </div>
        </div >
    );
};

export default Admin;