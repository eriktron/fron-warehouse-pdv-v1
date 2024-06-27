import { useReactTable } from "@tanstack/react-table";

const TablaSimple = () => {
   
        const columns = [
            {
                header: "Id",
                accessorKey: "id"
            },
            {
                header: "Nombre",
                accessorKey: "nombre"
            },
            {
                header: "Descripción",
                accessorKey: "descripcion"
            },
        ]

    const table = useReactTable({data, columns})
    return (
        <div>
            <table>
                <thead>
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key= {headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => (
                                        <th key={header.id}>
                                            {header.column.columnDef.header}
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>

                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>
    )    
}

export default TablaSimple