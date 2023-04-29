package de.artus.minecraftFolderManagement;

import de.artus.minecraftServers.MinecraftServerType;

import java.io.File;

public class ServerJar {


    public MinecraftServerType type;
    public String version;

    public ServerJar(MinecraftServerType type, String version) {
        this.type = type;
        this.version = version;
    }


    public File getJarFile(String jarPath) {
        return GetServerJar.getJarFile(type, version, jarPath);
    }




    public String toString() {
        return type.name + " " + version;
    }


}
