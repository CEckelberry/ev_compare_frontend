import React, { useState } from 'react';
import { render } from 'react-dom';

import { Grommet, Box, RangeSelector, Stack, Text } from 'grommet';
import { grommet } from 'grommet/themes';


function Thin({ initialRange = [0, 100], label, character, RANGE_MIN = 0, RANGE_MAX=100, getCarRange, getPriceRange}) {
  const [range, setRange] = useState(initialRange);

  return (
    <Box gap="small">
      {label ? <Text>{label}</Text> : null}
      <Stack>
        <Box background="light-4" height="6px" direction="row" />
        <RangeSelector
          direction="horizontal"
          min={RANGE_MIN}
          max={RANGE_MAX}
          step={1}
          values={range}
          onChange={nextRange => {
            {RANGE_MAX === 100 ? getPriceRange(nextRange) : getCarRange(nextRange)};
          }}
        />
      </Stack>
      <Box align="center">
        <Text size="small">{`${range[0]}${character} - ${range[1]}${character}`}</Text>
      </Box>
    </Box>
  );
}

export default Thin;