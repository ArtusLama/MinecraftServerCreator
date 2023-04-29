package de.artus.utils;

import de.artus.javascriptCommunication.commands.CommandNotFound;
import de.artus.javascriptCommunication.commands.JavaScriptCommand;


import java.util.HashMap;
import java.util.Map;

public class CommandHandler {

    private static Map<String, JavaScriptCommand> commands = new HashMap();

    public static void registerCommand(String name, JavaScriptCommand executor) {
        commands.put(name, executor);
    }
    public static void onCommand(String commandName, String[] args) {
        commands.getOrDefault(commandName, new CommandNotFound()).onCommand(commandName, args);
    }


}
