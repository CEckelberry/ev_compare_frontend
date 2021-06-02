import React, { useState } from "react";
// import "./SearchForm.css";
import { Grommet, Box, Button, Grid, TextInput, Form } from 'grommet';
import { Search } from 'grommet-icons';

/** Search widget.
 *
 * Appears on CompanyList and JobList so that these can be filtered
 * down.
 *
 * This component doesn't *do* the searching, but it renders the search
 * form and calls the `searchFor` function prop that runs in a parent to do the
 * searching.
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ searchFor }) {
  console.debug("SearchForm", "searchFor=", typeof searchFor);

  const [searchTerm, setSearchTerm] = useState("");

  /** Tell parent to filter */
  function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  /** Update form fields */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  const theme = {
    global: {
      colors: {
        brand: '#7D4CDB',
        },
  
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  return (
    <Grommet theme={theme}>
        <Grid
            fill
            columns={{count: 'fit', size: 'full'}}
        >
            <Box direction="row-responsive">
                <Box fill align="center" justify="start" pad="medium">
                    <Box width="medium" elevation="medium" background="#F8F8F8">
                        <Form onSubmit={handleSubmit}>
                            <TextInput name="searchTerm" onChange={handleChange} value={searchTerm} icon={<Search></Search>} placeholder="search ..." />  
                        </Form>      
                    </Box>
                </Box>
            </Box>
        </Grid>
    </Grommet>
  );
}

export default SearchForm;