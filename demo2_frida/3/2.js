function main(){
    console.log("Script loaded successfully")
    Java.perform(function(){
        console.log("Inside java perform function")
        var MainActivity = Java.use('com.example.demo2.MainActivity')
        console.log("Java.Use.successfully")
        MainActivity.fun.overload('java.lang.String').implementation = function(x){
            console.log(x)
            var ret_value = this.fun('HELLO LINKIN!')
            return ret_value
        }
    })
}
setImmediate(main)