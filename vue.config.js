const data=require("./src/mock/mock.js")

module.exports={
    devServer:{
        before(app){
            app.get("/api/list",(req,res)=>{
                res.send(data)
            })
        }
    }
}