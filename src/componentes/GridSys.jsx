import React from 'react'
import DigitButton from './DigitButton';
import OperationBtn from './OperationBtn';
import {Grid} from "@mui/material";

const GridSystem = ({ digits, enterDigit, operation, selectOperation }) => {
  return (
     <Grid item container columnSpacing={1}>
              <DigitButton digit={digits[0]} enterDigit={enterDigit} />
              <DigitButton digit={digits[1]} enterDigit={enterDigit} />
              <DigitButton digit={digits[2]} enterDigit={enterDigit} />
              <OperationBtn
               operation={operation}
               selectOperation={selectOperation}
/>
    </Grid>
 
  )
}

export default GridSystem;
