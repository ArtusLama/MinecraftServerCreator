package de.artus.minecraftFolderManagement;



import de.artus.minecraftServers.MinecraftServerType;
import de.artus.utils.ConsoleOutput;
import kong.unirest.Unirest;
import kong.unirest.json.JSONObject;

import java.io.File;
import java.util.ArrayList;
import java.util.List;


public class GetServerJar {


    public static File getJarFile(MinecraftServerType type, String version, String fileLocation) {
        return Unirest.get("https://serverjars.com/api/fetchJar/servers/%s/%s/".formatted(type, version)).asFile(fileLocation + "\\server.jar").getBody();
    }

    public static List<ServerJar> getServerTypeJars(MinecraftServerType type) {
        List<ServerJar> serverJars = new ArrayList<>();
        Unirest.get("https://serverjars.com/api/fetchAll/servers/%s/100/".formatted(type)).asJson().ifSuccess(data -> {
            data.getBody().getObject().getJSONArray("response").forEach(e -> {
                JSONObject jar = (JSONObject) e;
                serverJars.add(new ServerJar(type, jar.get("version").toString()));
            });
        });
        return serverJars;
    }


}
