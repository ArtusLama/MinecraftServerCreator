package de.artus.javascriptCommunication.commands;

import de.artus.utils.ConsoleOutput;

public class CommandNotFound implements JavaScriptCommand{
    @Override
    public void onCommand(String command, String[] args) {
        ConsoleOutput.send("error", "Command '" + command + "' does not exist!");
    }
}
