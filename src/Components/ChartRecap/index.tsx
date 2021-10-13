import { useState } from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PieResume from "./PieResume";
import BarResume from "./BarResume";
import EntriesResume from "./EntriesResume";

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SContainer = styled.div`
  width: 800px;
  max-width: 90vw;
  min-height: 600px;
`
const SChartResumeContainer = styled.div`
  height: 100%;
  flex-wrap: wrap;
  display: flex;
`
const SChartContainer = styled.div`
  height: 500px;
  width: 500px;
`
const SEntriesResumeContainer = styled.div`
  min-width: 220px;
  max-width: 320px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 24px;
`

export default function ChartRecap(){
  const [tabId, setTabId] = useState(1);
  const handleChangeTab = ( _ :any, value: number) => setTabId(value);
  return <SContainer>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={tabId} onChange={handleChangeTab} aria-label="Change chart displayed">
        <Tab label="Pie chart" value={1} />
        <Tab label="Bar chart" value={2} />
      </Tabs>
    </Box>
    <SChartResumeContainer>
      <SChartContainer>
        { tabId === 1 && <PieResume/>}
        { tabId === 2 && <BarResume/>}
      </SChartContainer>
      <SEntriesResumeContainer>
        <EntriesResume/>
      </SEntriesResumeContainer>
    </SChartResumeContainer>
  </SContainer>;
}