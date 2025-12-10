import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import type { employee } from "../../modules/employee";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CardActionArea } from "@mui/material";

const cardStyle = {
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
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "rgba(20,20,20,0.95)",
  borderRadius: 3,
  boxShadow: "0 0 30px rgba(0,0,0,0.4)",
  p: 3,
  outline: "none",
  color: "white",
};

const imgStyle = {
  height: "100%",
  objectFit: "cover",
};

const modalImgStyle = {
  width: "100%",
  height: 260,
  borderRadius: 2,
  overflow: "hidden",
  mb: 2,
};

const contentStyle = { textAlign: "center", px: 2, py: 2 };

const nameStyle = { color: "rgb(255,255,255)", fontWeight: 600 };
const titleStyle = { color: "rgb(155, 155, 155)", mb: 1, fontStyle: "italic" };
const modalNameStyle = { fontWeight: 700, textAlign: "center" };
const modalTitleStyle = {
  textAlign: "center",
  fontStyle: "italic",
  color: "rgb(180,180,180)",
  mb: 2,
};
const modalLocationStyle = { mb: 1, color: "rgb(200,200,200)" };
const modalBirthdayStyle = { mb: 1, color: "rgb(200,200,200)" };
const modalDetailsStyle = { color: "rgb(160,160,160)", mt: 2 };
const modalCloseStyle = {
  background: "transparent",
  border: "1px solid rgb(120,120,120)",
  borderRadius: "8px",
  padding: "8px 20px",
  color: "white",
  cursor: "pointer",
  transition: "0.2s",
};

export const EmployeeCard: FC<employee> = (employee: employee) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
      {/* CARD */}
      <Card sx={cardStyle}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            src={employee.imageUrl}
            alt={`${employee.firstName} ${employee.lastName}`}
            sx={imgStyle}
          />

          <CardContent sx={contentStyle}>
            <Typography variant="h6" component="div" sx={nameStyle}>
              {employee.firstName} {employee.lastName}
            </Typography>

            <Typography variant="body2" sx={titleStyle}>
              {employee.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* MODAL */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Box sx={modalImgStyle}>
            <img
              src={employee.imageUrl}
              alt={`${employee.firstName} ${employee.lastName}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          <Typography variant="h5" sx={modalNameStyle}>
            {employee.firstName} {employee.lastName}
          </Typography>

          <Typography variant="subtitle1" sx={modalTitleStyle}>
            {employee.title}
          </Typography>

          <Box sx={{ mt: 1 }}>
            <Typography variant="body1" sx={modalLocationStyle}>
              📍{" "}
              <strong>
                {employee.city}, {employee.country}
              </strong>
            </Typography>

            <Typography variant="body1" sx={modalBirthdayStyle}>
              🎂 {new Date(employee.birthDate).toLocaleDateString()}
            </Typography>

            <Typography variant="body2" sx={modalDetailsStyle}>
              mm yes this is the {employee.title} employee very much details
              yes.
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <button
              onClick={handleClose}
              style={modalCloseStyle}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = "white")}
              onMouseOut={(e) =>
                (e.currentTarget.style.borderColor = "rgb(120,120,120)")
              }
            >
              Close
            </button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
