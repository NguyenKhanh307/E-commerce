import express from "express";
import path from "path";
import adminRoutes from "./routes/admin/index.routes";
import clientRoutes from "./routes/client/index.routes";
const app = express();
const port = 3000;

// Thiết lập thư mục views và view engine pug
app.set("views", path.join(__dirname, "views")); // Thư mục chứa file pug
app.set("view engine", "pug"); // Thiết lập pug làm view engine

// Thiết lập thư mục chứa file tĩnh
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/", clientRoutes);

app.listen(port, () => {
  console.log(`Website is running at port ${port}`);
});
