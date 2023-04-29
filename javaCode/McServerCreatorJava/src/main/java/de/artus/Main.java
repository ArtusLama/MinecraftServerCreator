package de.artus;

import de.artus.javascriptCommunication.commands.DataCommand;
import de.artus.javascriptCommunication.commands.PingCommand;
import de.artus.javascriptCommunication.commands.QuitCommand;
import de.artus.javascriptCommunication.commands.SetupServerCommand;
import de.artus.utils.CommandHandler;
import de.artus.utils.JavaScriptCommunicator;

import java.io.IOException;
import java.util.Arrays;

public class Main {

    public static JavaScriptCommunicator javaScriptCommunicator;
    public static String serverFolderPath;


    public static void main(String[] args) throws IOException {
        serverFolderPath = args[0];

        CommandHandler.registerCommand("ping", new PingCommand());
        CommandHandler.registerCommand("quit", new QuitCommand());
        CommandHandler.registerCommand("DATA_REQUEST", new DataCommand());
        CommandHandler.registerCommand("setupServer", new SetupServerCommand());


        javaScriptCommunicator = new JavaScriptCommunicator();
        javaScriptCommunicator.log("JavaProcess started with arguments: " + Arrays.toString(args));

        javaScriptCommunicator.run();




    }


}