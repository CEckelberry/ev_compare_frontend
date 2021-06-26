import React, { useState, useEffect, useContext } from "react";
import {Link} from 'react-router-dom';
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

export const FormLayer = ({search, evs}) => {
  let [make, setMake] = useState('default value');
  let [model, setModel] = useState('default value');
  let [body_type, setBodySelectedOption] = useState('default value');
  let [price, setPrice] = useState([]);
  let [range, setRange] = useState([]);

  const getprice = (newPrices) => {
    setPrice(price => [...price, { ...newPrices}])
  }
  const getrange = (newRanges) => {
    setRange(range => [...range, { ...newRanges}])
  }

  const [open, setOpen] = React.useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);

  const handleSubmit = (e) => {
    debugger;
    // e.preventDefault();
    console.log('make: ', make)
    console.log('model: ', model)
    console.log('body_type: ', body_type)
    search(make, model, body_type, price, range)
    onClose();
  }



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
              <Form id="filterform" onSubmit={handleSubmit}  align="start">
                  <FormField label="Make:"><Box width="99%" pad={{horizontal: "3%"}}><Select margin="xsmall" placeholder="Make" name="make" options={evs.map(ev => (ev.make))} onChange={ ({option}) => setMake(option) }/></Box></FormField>
                  <FormField label="Model:"><Box width="99%" pad={{horizontal: "3%"}}><Select margin="xsmall" placeholder="Model" name="model"  options={evs.map(ev => (ev.model))} onChange={ ({option}) => setModel(option) }/></Box></FormField>
                  <FormField label="Body Type:"><Box width="99%" pad={{horizontal: "3%"}}><Select margin="xsmall" placeholder="Body Type" name="body_type"  options={evs.map(ev => (ev.body_type))} onChange={ ({option}) => setBodySelectedOption(option) }/></Box></FormField>
                  <FormField><Box margin={{top: "3%"}} width="99%" pad={{horizontal: "3%"}}><Thin label="Price" character="k" getprice={getprice} name="price" /></Box></FormField>
                  <FormField><Box margin={{top: "3%"}} width="99%" pad={{horizontal: "3%"}}><Thin label="Range" character="mi" getrange={getrange} name="range" initialRange={[150, 550]} RANGE_MIN={150} RANGE_MAX={550}/></Box></FormField>
                  <Box direction="row">
                    <Box margin={{top: "3%"}} flex={false} as="footer" align="start"><Button type="submit" label="Submit" primary/></Box>
                    <Box margin={{top: "3%", left: "3%"}} flex={false} as="footer" align="start"><Button type="submit" label="Clear Filters" primary /></Box>
                  </Box>
              </Form>
              </Box>

            </Box>
          </Layer>
          
        )}
        </div>
  );
};

export default FormLayer;