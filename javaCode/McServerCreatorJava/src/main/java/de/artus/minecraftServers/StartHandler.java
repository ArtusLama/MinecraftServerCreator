package de.artus.minecraftServers;


import de.artus.utils.ConsoleOutput;
import de.artus.utils.JavaScriptCommunicator;

import java.io.*;

public class StartHandler {

    public static void setupServer(String serverPath) {
        if (!new File(serverPath + "\\eula.txt").exists()) {
            new Thread(() -> {
                ProcessBuilder builder = new ProcessBuilder("java", "-jar", serverPath + "\\server.jar");
                Process process;
                try { process = builder.start(); } catch (IOException e) {throw new RuntimeException(e);}
                try { process.waitFor(); } catch (InterruptedException e) {throw new RuntimeException(e);}

                ConsoleOutput.log("setup server finished!");
            }).start();
        }
    }

    public static void startServer(String serverPath) {
        ProcessBuilder builder = new ProcessBuilder("java", "-jar", serverPath + "\\server.jar");
        try {
            builder.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
