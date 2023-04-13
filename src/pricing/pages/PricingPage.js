import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { PLANSE } from "../../shared/data/data";
import { AccordionPlans } from "../../shared/data/data";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const PricingPage = () => {
  return (
    <>
      <div className="pricingPage">
        <Container
          maxWidth="md"
          sx={{
            padding: "40px 0",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2em",
          }}
        >
          <Typography variant="p" color="lightgrey" fontWeight="bold">
            PRICING
          </Typography>
          <Typography variant="h2" fontWeight="bold" color="white">
            Get Started Now,
            <br /> Pick a Plan Later
          </Typography>
          <Typography variant="p" color="white">
            Choose the plan that best fits your needs and budget. Our plans
            offer a range of features and services to help you achieve your
            goals, whether you're an individual, small business, or enterprise.{" "}
          </Typography>
          <Button sx={{ backgroundColor: "#fcbf49", color: "#fff" }}>
            No credit card required
          </Button>
        </Container>
      </div>

      <Grid container spacing={4} justifyContent="center" padding={4}>
        {PLANSE.map((plan) => (
          <Grid item xl={3} lg={3} md={5} xs={12} key={plan.id}>
            <Card
              sx={{
                height: "100%",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography variant="h3" sx={{ margin: "20px 0 20px 0" }}>
                  {plan.type}
                </Typography>
                <Typography variant="p">{plan.desc}</Typography>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ margin: "20px 0 40px 0" }}
                >
                  Get Started
                </Button>
                <Typography variant="h3" fontWeight="bold">
                  {plan.price}
                </Typography>
                <List>
                  {plan.features.map((f) => (
                    <ListItem key={f}>
                      <CheckCircleIcon
                        style={{ fill: "#fcbf49", marginRight: "10px" }}
                      />
                      {f}
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Container maxWidth="md" sx={{ padding: "40px 0" }}>
        {AccordionPlans.map((ac) => (
          <Accordion security="str" key={ac}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{ac.title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>{ac.details}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
};

export default PricingPage;
