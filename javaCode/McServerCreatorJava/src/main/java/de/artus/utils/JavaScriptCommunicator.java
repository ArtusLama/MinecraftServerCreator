package de.artus.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class JavaScriptCommunicator {

    private boolean running = true;

    public void run() throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String line;

        while (((line = reader.readLine()) != null) && running) {
            Pattern pattern = Pattern.compile("\\[(.*?)\\]");
            Matcher matcher = pattern.matcher(line);

            log("JavaScript send Command: " + line);
            // [NAME] id daodi dwaaj

            if (matcher.find()) {
                String[] args = line.split(" ");
                CommandHandler.onCommand(matcher.group(1), Arrays.copyOfRange(args, 1, args.length));
            }

        }
        reader.close();
    }

    public void quit() {
        running = false;
        log("closing connection...");
        try { Thread.sleep(100);} catch (InterruptedException e) {throw new RuntimeException(e);}
        System.exit(0);
    }

    public void log(String msg) {
        ConsoleOutput.log(msg);
    }
}
