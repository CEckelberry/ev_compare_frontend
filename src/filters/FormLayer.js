import React, { useState, useEffect, useContext } from "react";

import { Add, Close, Filter } from 'grommet-icons';

import {
  Box,
  Button,
  FormField,
  Grommet,
  Heading,
  Layer,
  Select,
  Text,
  TextArea,
  TextInput,
  Form,
} from 'grommet';
import { grommet } from 'grommet/themes';
import Thin from "../evs/RangeSelector";

const suggestions = ['alpha', 'beta'];

const prices = ["20k", "30k", "40k", "50k", "60k", "70k", "80k", "90k", "100k"]
const ranges = ["150", "200", "250", "300", "350", "400", "450", "500", "550"]

export const FormLayer = ({search, evs}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState();
  const [select, setSelect] = React.useState('');
  const [range, setRange] = useState([prices]);
  const onChange = values => {
    setRange(values);
  };

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);



  return (
    <div>
        <Button size="large" icon={<Filter />} label="Filters" onClick={onOpen} />
        {open && (
          <Layer
            position="right"
            full="vertical"
            modal
            onClickOutside={onClose}
            onEsc={onClose}
          >
            <Box
              as="form"
              fill="vertical"
              overflow="auto"
              width="medium"
              pad="medium"
              onSubmit={onClose}
            >
              <Box flex={false} direction="row" justify="between">
                <Heading level={2} margin="none">
                    Filters
                </Heading>
                <Button icon={<Close />} onClick={onClose} />
              </Box>
              <Box flex="grow" overflow="auto" pad={{ vertical: 'medium' }}>
              <Form id="filterform" searchFor={search} align="start">
                  <FormField label="Make:"><Box width="99%" pad={{horizontal: "3%"}}><Select margin="xsmall" placeholder="Make"  options={evs.map(ev => (ev.make))} onChange={({ value: nextValue }) => setValue(nextValue)}/></Box></FormField>
                  <FormField label="Model:"><Box width="99%" pad={{horizontal: "3%"}}><Select margin="xsmall" placeholder="Model"  options={evs.map(ev => (ev.model))} onChange={({ value: nextValue }) => setValue(nextValue)}/></Box></FormField>
                  <FormField label="Body Type:"><Box width="99%" pad={{horizontal: "3%"}}><Select margin="xsmall" placeholder="Body Type"  options={evs.map(ev => (ev.body_type))} onChange={({ value: nextValue }) => setValue(nextValue)}/></Box></FormField>
                  <FormField><Box margin={{top: "3%"}} width="99%" pad={{horizontal: "3%"}}><Thin  label="Price" character="k"/></Box></FormField>
                  <FormField><Box margin={{top: "3%"}} width="99%" pad={{horizontal: "3%"}}><Thin label="Range" character="mi" initialRange={[150, 550]} RANGE_MIN={150} RANGE_MAX={550}/></Box></FormField>
                  <Box margin={{top: "3%"}} flex={false} as="footer" align="start"><Button type="submit" label="Submit" onClick={onClose} primary/></Box>
              </Form>
              </Box>

            </Box>
          </Layer>
          
        )}
        </div>
  );
};

export default FormLayer;