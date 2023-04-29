package de.artus.javascriptCommunication.commands;

import de.artus.utils.ConsoleOutput;

public class PingCommand implements JavaScriptCommand{

    @Override
    public void onCommand(String command, String[] args) {
        ConsoleOutput.send("pong", args);
    }

}
