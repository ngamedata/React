import React, { useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Pagination,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { filterOptionsdata } from "src/constant";
import TableCustom from "components/TableComponent/tableCustom";
import TableToolbar from "components/TableComponent/tableToolbar";
import SearchField from "components/Common/searchField";
import FilterSkills from "components/Common/filterSkills";
import AnalyticsCard from "components/Common/analyticsCard";
import CardCustom from "components/Common/card";
import StatsCard from "components/Common/statsCard";
import BarChart from "components/Charts/barChart";
import Carousel from "components/Common/carousel";
import {
  partnerDashboardEarnings,
  partnerDashboardResourcesData,
  tableToolBarDropdownLabels,
  tableToolBarMultiDropdownLabels,
  // tableBodyData,
  resourceAnalytics,
} from "src/constant";
import { useRouter } from "next/router";
import { useState } from "react";
import TableMultiDropDown from "components/TableComponent/tableMultiDropDown";
import { emploee } from "mocks/emplyee";
import { useDispatch, useSelector } from "react-redux";
import {
  getApi,
  getrequiremntsdata,
  // getrequiremntsdataapi,
} from "reduxStore/dashboard/dashboard_action";
import { useSnackbar } from "notistack";

const cardStyles = {
  bgColor: "#0E369C",
  buttonBgColor: "#FFB300",
  textColor: "#FFFFFF",
  opacity: 1,
};

function Dashboard() {
  const router = useRouter();

  const dispatch = useDispatch();
  const emptydata = [
    {
      id: "1",
      skills: ["Does Not Match Any Profile"],
      experience: "",
      contract: "",
      duration: "",
      resources: "",
    },
  ];

  const { requirementData } = useSelector((state) => {
    return {
      requirementData: state.dashboard.requirementData,
    };
  });

  const [monthly, setMonthly] = React.useState("");
  const [filteredList, setFilteredList] = useState(emptydata);
  const isCheckNot = false;
  const [selectedFilters, setSelectedFilters] = useState({
    Skill: [],
    Contract: "BOTH",
    Experience: [],
  });
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    dispatch(getrequiremntsdata());
    function flagtime() {
      setTimeout(() => {
        
        console.log(requirementData);
        setFlag(false);
      }, 3000);
    }
    flagtime();
    console.log("tableBodyData", tableBodyData);
  }, []);

  function setSkillFilter(data) {
    setSelectedFilters((prevState) => ({
      ...prevState,
      Skill: data,
    }));
  }
  function setMultiFilter(data) {
    setSelectedFilters((prevState) => ({
      ...prevState,
      Experience: data,
    }));
  }
  function handlesubmit() {
    console.log(selectedFilters);

    let tempdata = [];
    let tempdata2 = [];
    if (selectedFilters.Skill.length === 0) {
      tempdata = requirementData;
    } else {
      // selectedFilters.Skill.map((eke) => console.log(eke));
      selectedFilters.Skill.map((ele) => {
        requirementData.map((element) => {
          if (element.skills.includes(ele)) {
            tempdata.push(element);
          }
        });
      });
      console.log("tempdata", tempdata);
      // setFilteredList(tempdata);
    }

    if (selectedFilters.Contract === "BOTH") {
      console.log(requirementData);
    } else {
      // if(tempdata.length===0){tempdata2=tableBodyData}else{tempdata2=tempdata}
      tempdata2 = tempdata;
      tempdata = [];
      tempdata2.map((ele) => {
        if (ele.contract === selectedFilters.Contract) {
          tempdata.push(ele);
        }
      });
    }
    if (selectedFilters.Experience.length > 0) {
      // if(tempdata.length>0){tempdata2=tempdata}else{tempdata2=tableBodyData}
      tempdata2 = tempdata;
      tempdata = [];
      selectedFilters.Experience.map((ele) => {
        tempdata.map((element) => {
          if (element.experience.includes(ele)) {
            tempdata.push(element);
          }
        });
      });
    }
    setFilteredList(tempdata);
    console.log(filteredList);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(selectedFilters);
  };

  const handleRedirect = () => {
    if (router.pathname.includes("partner")) {
      router.push("/partner/billing");
    }
  };

  return (
    <Grid container rowSpacing={3} columnSpacing={3}>
      <Grid item lg={3} xs={6}>
        <CardCustom flag={flag} data={partnerDashboardEarnings.totalEarnings} />
      </Grid>

      <Grid item lg={9} xs={12}>
        <StatsCard flag={flag} data={partnerDashboardResourcesData} />
      </Grid>

      <Grid item lg={8} xs={12}>
        <Card style={{ height: "100%" }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h5">Earning Overview</Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <InputLabel>Monthly</InputLabel>
                  <Select
                    value={monthly}
                    label="Monthly"
                    onChange={(e) => setMonthly(e.target.value)}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Button variant="contained" onClick={handleRedirect}>
                View Details
              </Button>
            </Stack>
            {flag ? (
              <Stack height="320px" justifyContent="center" alignItems="center">
                <CircularProgress color={"success"} />
              </Stack>
            ) : (
              <BarChart />
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid item lg={4} xs={12}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid item lg={12} xs={6}>
            <CardCustom
              flag={flag}
              data={partnerDashboardEarnings.exrningPerMonth}
              cardStyles={cardStyles}
            />
          </Grid>

          <Grid item lg={12} xs={6}>
            <AnalyticsCard flag={flag} data={resourceAnalytics} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item lg={12} xs={12}>
        <Card>
          <CardContent>
            <Stack direction="row" justifyContent="space-between" px={1}>
              <Typography variant="h5">Global list on Requriments</Typography>
              <Button
                variant="contained"
                onClick={() => router.push("/partner/jobDescription")}
              >
                View All
              </Button>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" spacing={3} alignItems="center">
                <SearchField />
                <Button variant="text">Skills</Button>
                <FilterSkills
                  filterOptionsdata={filterOptionsdata}
                  setSkillFilter={setSkillFilter}
                />
                <TableToolbar
                  tableDropdownLabels={tableToolBarDropdownLabels}
                  handleChange={handleChange}
                  selectedFilters={selectedFilters}
                  isdashBoard={true}
                />
                <TableMultiDropDown
                  tableToolBarMultiDropdownLabels={
                    tableToolBarMultiDropdownLabels
                  }
                  setMultiFilter={setMultiFilter}
                />
              </Stack>
              <Button onClick={handlesubmit} variant="contained">
                Apply
              </Button>
            </Stack>

            <Stack spacing={2}>
              <TableCustom
                flag={flag}
                tableBodyData={
                  filteredList !== undefined && filteredList.length > 0
                    ? filteredList
                    : emptydata
                }
                height={350}
                isCheckNot={isCheckNot}
              />
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid item lg={12} xs={12}>
        <Carousel />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
