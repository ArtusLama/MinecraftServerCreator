package de.artus.javascriptCommunication.commands;

import de.artus.Main;

public class QuitCommand implements JavaScriptCommand{
    @Override
    public void onCommand(String command, String[] args) {
        Main.javaScriptCommunicator.quit();
    }
}
