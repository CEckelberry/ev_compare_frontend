import React from 'react';
import { grommet, Grommet, Spinner, Box, Grid} from 'grommet';

export const LoadingSpinner = () => (
  <Grommet theme={grommet} full>
    <Grid fill columns={{count: 'fit', size: 'full'}} align="center">
      <Box justify="center" direction="row"><Spinner size={'xlarge'} color={'#7D4CDB'}/></Box>
     </Grid>
  </Grommet>
);

export default LoadingSpinner;