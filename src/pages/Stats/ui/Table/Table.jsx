import {
    Button,
    Paper,
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import { UserModel } from 'models'

function Table({ stats }) {
    return (
        <TableContainer component={Paper}>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID Nation</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Population</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stats.map((item) => (
                        <TableRow
                            key={item.Year}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {item['ID Nation']}
                            </TableCell>
                            <TableCell align="right">{item.Year}</TableCell>
                            <TableCell align="right">
                                {item.Population}
                            </TableCell>
                            <TableCell align="right">
                                <Button
                                    onClick={() => {
                                        UserModel.population = item.Population
                                    }}
                                >
                                    Copy!
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    )
}

export default Table
