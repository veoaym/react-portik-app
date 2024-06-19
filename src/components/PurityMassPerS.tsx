import React, { FunctionComponent } from 'react';
import { Table, TableContainer, TableHead, TableCell, Paper, TableRow, TableBody } from '@mui/material';


const PurityMassPerS: FunctionComponent = () => {
    return (
        <div>
            <TableContainer
    component={Paper}
    variant="outlined"
>
    <Table aria-label="demo table">
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        <TableCell><b>Purity: mass/s</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      
      <TableRow>
        <TableCell></TableCell>
        <TableCell>305</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
        </div>
    );
}

export default PurityMassPerS;
/*import React, { FunctionComponent } from 'react';



const PurityMassPerS: FunctionComponent = () => {
    return (
        <div>
           
            <h2>Purity Component</h2>
            <p>Composant pureté massique en g per s</p>
        </div>
    );
}

export default PurityMassPerS;
*/