import express from "express";

const app = express();

const PORT = 3100;

app.get("/", (req, res) => {
  res.status(200).send({
    Id: 22,
    Name: "Sujon Ahamed",
    Designation: "Executive",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
