import React from "react";
import { Box } from "@mui/material";
import DeveloperSection from "./DeveloperSection/developerSection";
import CloudHosting from "./CloudHosting/cloudHosting";
import DesignDevelopment from "./DesignDevelopment/designDevelopment";
import OurServices from "./OurServices/ourServices";
import OurAwesomeTeam from "./OurAwesomeTeam/ourAwesomeTeam";
import PricingPlans from "./PricingPlans/pricingPlans";
import WhatUserSaying from "./WhatUserSaying/whatUserSaying";

const LandingPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        m: 0,
        p: 0,
        width: "100%",
     
      }}
    >
      {/* import Here Your Sections */}
      <DeveloperSection />
      <CloudHosting />
      <DesignDevelopment />
      <OurServices />
      <OurAwesomeTeam />
      <PricingPlans />
      <WhatUserSaying />
    </Box>
  );
};

export default LandingPage;
