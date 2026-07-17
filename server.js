import app from "./index.js";
import connectDB from "./src/DB_config/db_config.js";
app.listen(4545,()=>{
    console.log("server is running on port 4545"); 
    connectDB()
})