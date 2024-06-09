import React from 'react'
import PieChart from '../charts/PieChart';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import GeographyChart from "../charts/GeoChart";


function Campaign() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
    
        <Typography
        display="flex"
        alignItems="center"
        justifyContent="center"
        variant="h2"
        fontWeight="600"
        padding="15px"
        color={colors.grey[100]}
        sx={{ marginBottom: "10px" }}
      >
       Campaign
      </Typography>
      <Box height="50vh" mt="20px">
      <PieChart isDashboard={true} />
    </Box>

    <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
    </Box>

  )
}

export default Campaign