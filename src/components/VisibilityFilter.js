// import { Container, Tab, TabList, Tabs } from "@chakra-ui/react";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter, clearAll } from "../actions/actions";
import styles from "../../styles/Home.module.css";
import { Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";

const filters = {
  ALL: "all",
  COMPLETED: "completed",
  INCOMPLETED: "incompleted",
};

const VisibilityFilter = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(filters.ALL);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className={styles.visibilityfilter}>
        <Tabs value={value} onChange={handleChange}>
          {Object.keys(filters).map((filterkey) => {
            const currentFilter = filters[filterkey];
            return (
              <Tab
                value={currentFilter}
                key={`visibility-filter-${currentFilter}`}
                onClick={() => dispatch(setFilter(currentFilter))}
                className={styles.space}
                label={`${currentFilter}`}
              />
            );
          })}
        </Tabs>
        
        <Button
          variant="contained"
          size="small"
          className={styles.button}
          onClick={() => dispatch(clearAll())}
        >
          Clear All
        </Button>
      </Box>
      <Divider variant="middle"/>
    </>
  );
};

export default VisibilityFilter;
