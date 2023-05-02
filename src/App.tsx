import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Select, Typography } from "@mui/material";
import { GradeTable } from "./components/GradeTable";
/**
 * You will find globals from this file useful!
 */
import {} from "./globals";
import { IUniversityClass } from "./types/api_types";

function App() {
  // You will need to use more of these!
  const [currClassId, setCurrClassId] = useState<string>("");
  const [classList, setClassList] = useState<IUniversityClass[]>([]);

  const fetchSomeData = async () => {
    const res = await fetch("https://spark-se-assessment-api.azurewebsites.net/api/student/findByStatus/enrolled?buid=U14131622", {
      method: "GET",
    });
    const json = await res.json();
    console.log(json);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Grid container spacing={2} style={{ padding: "1rem" }}>
        <Grid xs={12} container alignItems="center" justifyContent="center">
          <Typography variant="h2" gutterBottom>
            Spark Assessment
          </Typography>
        </Grid>
        <Grid xs={12} md={4}>
          <Typography variant="h4" gutterBottom>
            Select a class
          </Typography>
          <div style={{ width: "100%" }}>
            <Select fullWidth={true} label="Class">
              {/* You'll need to place some code here to generate the list of items in the selection */}
            </Select>
          </div>
        </Grid>
        <Grid xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Final Grades
          </Typography>
          <div>Place the grade table here</div>
          </GradeTable>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
