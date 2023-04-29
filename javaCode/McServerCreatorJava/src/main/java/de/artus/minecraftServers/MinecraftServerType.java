package de.artus.minecraftServers;

public enum MinecraftServerType {


    BUKKIT("bukkit"),
    SPIGOT("spigot"),
    PAPER("paper");

    public final String name;
    MinecraftServerType(String name) {
        this.name = name;
    }
}
