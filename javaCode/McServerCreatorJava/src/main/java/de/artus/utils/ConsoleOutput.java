package de.artus.utils;


import java.util.Arrays;

public class ConsoleOutput {


    public static void send(String command, String[] args) {
        System.out.println("[" + command + "] " + String.join(" ", args).replace("\n", "\\n"));
    }
    public static void send(String command, String msg) {
        System.out.println("[" + command + "] " + Arrays.toString(msg.replace("\n", "\\n").split(" ")));
    }
    public static void log(String msg) {
        System.out.println("[javaLog] " + msg);
    }

}
