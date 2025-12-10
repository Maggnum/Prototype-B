import type { FC } from "react";
import { EmployeeCard } from "./employeeCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import type { employee } from "./types";
import { useLoaderData } from "react-router";

export const EmployeesPage: FC = () => {
  const employees = useLoaderData();

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {employees?.map((employee: employee) => (
          <EmployeeCard
            id={employee.id}
            firstName={employee.firstName}
            lastName={employee.lastName}
            title={employee.title}
            country={employee.country}
            city={employee.city}
            birthDate={employee.birthDate}
            imageUrl={employee.imageUrl}
          />
        ))}
      </Grid>
    </Container>
  );
};
