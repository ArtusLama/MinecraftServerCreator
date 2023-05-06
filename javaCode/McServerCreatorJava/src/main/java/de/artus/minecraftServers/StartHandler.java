package de.artus.minecraftServers;


import de.artus.utils.ConsoleOutput;
import de.artus.utils.JavaScriptCommunicator;

import java.io.*;

public class StartHandler {

    public static void setupServer(String serverPath) {
        if (!new File(serverPath + "\\eula.txt").exists()) {
            new Thread(() -> {
                try {createEuler(serverPath);} catch (IOException e) {throw new RuntimeException(e);}
                ProcessBuilder builder = new ProcessBuilder(System.getProperty("java.home") + "/bin/java", "-jar", "server.jar");
                builder.directory(new File(serverPath));
                Process process;
                try { process = builder.start(); } catch (IOException e) {throw new RuntimeException(e);}

                BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
                try {
                    process.getOutputStream().write("dir".getBytes());
                    process.getOutputStream().flush();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
                String line;
                while (true) {
                    try {
                        if ((line = reader.readLine()) == null) break;
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    //ConsoleOutput.log("[MinecraftServer] " + line); TODO handle in other way
                }

                try { process.waitFor(); } catch (InterruptedException e) {throw new RuntimeException(e);}


            }).start();
        }
    }

    public static void createEuler(String path) throws IOException {
        File eula = new File(path + "\\eula.txt");
        eula.createNewFile();

        FileWriter eulaAccepter = new FileWriter(path + "\\eula.txt");
        eulaAccepter.write("eula=true");
        eulaAccepter.close();
    }



}
