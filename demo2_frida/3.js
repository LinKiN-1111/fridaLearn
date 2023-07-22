function main(){
    console.log("Script loaded successfully")
    Java.perform(function(){
        console.log("Inside java perform function")
        
        //静态函数的主动调用
        var MainActivity = Java.use('com.example.demo2.MainActivity')
        MainActivity.staticSecret()
        
        //动态函数的主动调用
        Java.choose('com.example.demo2.MainActivity',{
            onMatch: function(instance){
                console.log('instance found',instance)
                instance.secret()
            },
            onComplete:function(){
                console.log("search complete")
            }
        })
    })
}
setImmediate(main)