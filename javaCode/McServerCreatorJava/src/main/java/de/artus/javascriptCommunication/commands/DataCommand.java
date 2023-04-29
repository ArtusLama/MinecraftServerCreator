package de.artus.javascriptCommunication.commands;

import de.artus.utils.ConsoleOutput;


public class DataCommand implements JavaScriptCommand{


    @Override
    public void onCommand(String command, String[] args) {
        int dataId = Integer.parseInt(args[0]);

        String data = "NoDataYet!";
        ConsoleOutput.send("DATA", dataId + " " + data);

    }
}
