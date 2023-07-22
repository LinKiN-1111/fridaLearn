function CallSecretFunc(){
    Java.perform(function(){
        //动态函数的主动调用
        Java.choose('com.example.demo2.MainActivity',{
            onMatch: function(instance){
                instance.secret()
            },
            onComplete:function(){
            }
        })

    })
}

function getTotalValue(){
    Java.perform(function(){
        console.log("Inside java perform function")
        var MainActivity = Java.use('com.example.demo2.MainActivity')

        //动态函数的主动调用
        Java.choose('com.example.demo2.MainActivity',{
            onMatch: function(instance){
                console.log('total = ',instance.total.value)
                // instance.secret()
            },
            onComplete:function(){
                console.log("search complete")
            }
        })

    })
}

setImmediate(getTotalValue)

rpc.exports = {
    callsecretfunc : CallSecretFunc,
    gettotalvalue : getTotalValue
}