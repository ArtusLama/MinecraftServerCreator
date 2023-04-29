const { spawn } = require("child_process");
const SettingsManager = require("./SettingsManager.js");
const { resolve } = require("path");
const { rejects } = require("assert");

let jarProcess;
let DATA_Counter = 0;
let dataMap = new Map([]);


module.exports.startJavaProcess = 
function startJavaProcess() {
    jarProcess = spawn("java", ["-jar", SettingsManager.getValueFromConfig("java.jarPath"), SettingsManager.getValueFromConfig("settings.serversFolderPath")]);



    jarProcess.on("spawn", async () => {
        this.sendCommand("ping", "")
        await this.requestData("test");
    });
    jarProcess.stdout.on("data", (allData) => {
        dataLines = allData.toString().split(/\r?\n/);
        for (data of dataLines) {
            const match = data.match(/\[(.*?)]/);
            if (match == null) continue;
            const commandName = match[1];

            if (commandName == "javaLog") {
                console.log(data);
                continue;
            }

            const argsString = data.substring(match[0].length + 1);
            const args = argsString.slice(1, -1).split(", ")
            //console.log("Command: " + commandName + "\n" + "Args: " + args + "\n");

            switch (commandName) {

                case "DATA":
                    const id = parseInt(args[0]);
                    args.shift();
                    dataMap.set(id, args);
                    break;
                case "pong":
                    console.log("PONG")
                    break;

            }



        }

    });


    jarProcess.stderr.on("data", (data) => {
        console.error(`Fehler von Java: ${data}`);
    });
}


function getCommandSyntax(command, msg) {
    return "[" + command + "] " + msg + "\n";
}

module.exports.sendCommand = function sendCommand(name, args) {
    if (jarProcess != null) {
        jarProcess.stdin.write(getCommandSyntax(name, args))
    }
}
module.exports.requestData = function requestData(args) {
    if (jarProcess != null) {
        const dataID = DATA_Counter;
        console.log("Requesting Data[" + dataID + "]: " + args);
        jarProcess.stdin.write(getCommandSyntax("DATA_REQUEST", dataID + " " + args));
        DATA_Counter++;

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!dataMap.has(dataID)){
                    console.log("Data[" + dataID + "] Request Timeout");
                    reject("DATA REQUEST TIMEOUT")
                } 
            }, 3000);
            function waitForData() {
                if (dataMap.has(dataID)) {
                    console.log("Got Data[" + dataID + "]: " + dataMap.get(dataID));
                    resolve(dataMap.get(dataID));
                }
                else setTimeout(waitForData, 10);
            }
            waitForData()
        });
    }
}


module.exports.quit = function quit() {
    
    jarProcess.stdin.write(getCommandSyntax("quit", ""));
    
    if (jarProcess != null) {
        jarProcess.kill();
    }
    
}


