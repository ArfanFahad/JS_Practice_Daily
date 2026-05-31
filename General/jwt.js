import express from "express";
import jwt from "jsonwebtoken";
const app = express();
const PORT = 3700;
const secret_key = "MySecretKey";
app.use(express.json());
// user data
const user = {
  id: 1,
  username: "testuser",
  password: "pass",
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      secret_key,
      { expiresIn: "1h" }
    );
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentails" });
});

// Protected Route
app.get("/protected", (req, res) => {
  const authHeader = req.headers.authorization;

  console.log("req.headers are here: ", req.headers);
  console.log("req.headers.authorization: ", authHeader);

  if (!authHeader) {
    return res.status(401).json({ message: "Token required" });
  }

  const token = authHeader;
  console.log("Token is: ", token.split(" ")[1]);

  try {
    const decoded = jwt.verify(token, secret_key);

    res.json({
      message: "Protected Data",
      id: user.id,
      username: user.username,
      issued_at: new Date(decoded.iat * 1000).toLocaleTimeString(),
      expires_at: new Date(decoded.exp * 1000).toLocaleTimeString(),
    });
  } catch (error) {}
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
