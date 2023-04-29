package de.artus.minecraftServers;


import java.io.*;

public class StartHandler {

    public static void setupServer(String serverPath) {
        if (!new File(serverPath + "\\eula.txt").exists()) {
            new Thread(() -> {
                ProcessBuilder builder = new ProcessBuilder("java", "-jar", serverPath + "\\server.jar");
                Process process;
                try { process = builder.start(); } catch (IOException e) {throw new RuntimeException(e);}
                while (process.isAlive()) {}
                PrintWriter writer;
                try { writer = new PrintWriter(serverPath + "\\eula.txt", "UTF-8"); } catch (FileNotFoundException e) {throw new RuntimeException(e);} catch (UnsupportedEncodingException e) {throw new RuntimeException(e);}
                writer.println("eula=true");
                writer.close();
                startServer(serverPath);
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
