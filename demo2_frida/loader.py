import frida,sys
def on_message(message,data):
    if message['type']=='send':
        print("[*]{0}".format(message['payload']))
    else:
        print(message)

device=frida.get_usb_device()
process=device.attach("com.example.demo2")

with open('../agent/4.js') as f:
    jscode=f.read()
script = process.create_script(jscode)
    
script.on('message',on_message)
script.load()

command=""
while 1==1:
    command=input("\nEnter command:\n1:Exit\n2:Call secret function\n3:Get Total Value\nchoice:")
    if command=="1":
        break
    elif command=="2":
        script.exports.callsecretfunc()
    elif command=="3":
        script.exports.gettotalvalue()