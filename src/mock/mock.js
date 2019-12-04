const Mock=require("mockjs")

const data=Mock.mock({
    "datalist|6":[
        {
            "id|+1":1,
            "name":"@cname",
            "desc":"@ctitle(8)",
            "img":"@image(80x80)"
        }
    ]
})
module.exports=data;