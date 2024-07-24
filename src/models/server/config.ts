//to interact using the backend and use it
import env from '@/app/env'
import {Client,Users,Databases,Storage,Avatars} from 'node-appwrite'

const client = new Client()
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apikey);

const users = new Users(client); //users for all the server side
const databases = new Databases(client); //get all the db
const avatars = new Avatars(client);
const storage = new Storage(client);

export { client, users, databases, avatars, storage };