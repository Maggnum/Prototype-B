import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import type { employee } from "./types";

const EmployeeCard: FC<employee> = (employee: employee) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        backgroundColor: "rgba(20, 20, 20, 0.9)",
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardMedia
        component="img"
        src={employee.imageUrl}
        alt={`${employee.firstName} ${employee.lastName}`}
        sx={{
          width: "100%",
          objectFit: "cover",
        }}
      />

      <CardContent sx={{ textAlign: "center", px: 2, py: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: "rgb(255,255,255)", fontWeight: 600 }}
        >
          {employee.firstName} {employee.lastName}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "rgb(155, 155, 155)", mb: 1, fontStyle: "italic" }}
        >
          {employee.title}
        </Typography>

        <Typography variant="body2" sx={{ color: "rgb(155, 155, 155)" }}>
          {employee.city}, {employee.country}
          <br />
          {new Date(employee.birthDate).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
