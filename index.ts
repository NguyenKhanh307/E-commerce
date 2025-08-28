import express, {Request,Response} from 'express'
import path from 'path'

const app = express()
const port = 3000

// Thiết lập thư mục views và view engine pug
app.set("views",path.join(__dirname,"views")); // Thư mục chứa file pug
app.set("view engine","pug");                  // Thiết lập pug làm view engine

// Thiết lập thư mục chứa file tĩnh
app.use(express.static(path.join(__dirname,'public')));
app.get("/",(req:Request,res:Response)=>{
    res.render('admin/pages/dashboard',{
        pageTitle: "Trang chủ"
    })
})

app.listen(port,()=>{
    console.log(`Website is running at port ${port}`)
})