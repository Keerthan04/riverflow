//this is the client config file
import env from "@/app/env";
import { Client,Account,Databases,Storage,Avatars } from "appwrite";

const client = new Client()
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)

const account = new Account(client);//account is for the client side
const databases = new Databases(client);//get all the db
const avatars = new Avatars(client)
const storage = new Storage(client)

export {client,account,databases,avatars,storage}//so the frontend can easily interact