package de.artus.javascriptCommunication.commands;

import de.artus.minecraftFolderManagement.ServerJar;
import de.artus.minecraftServers.MinecraftServerType;
import de.artus.minecraftServers.StartHandler;
import de.artus.utils.ConsoleOutput;

import java.io.File;


public class SetupServerCommand implements JavaScriptCommand{
    @Override
    public void onCommand(String command, String[] args) {
        String folder = args[0];
        ServerJar serverJar = new ServerJar(MinecraftServerType.valueOf(args[1].toUpperCase()), args[2]);
        File jar = serverJar.getJarFile(folder);
        StartHandler.setupServer(folder);

    }
}
