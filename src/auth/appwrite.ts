import { Client, Account, Databases, Storage  } from "appwrite";

const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("674c8c2200256b385441"); 

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);