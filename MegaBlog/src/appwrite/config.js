import conf from '../conf/conf.js';
import {Client,ID,Databases,Storage,Query} from "appwrite";

export class Service {
    client  = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollection,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                } 
            )
        } catch (error) {
            console.log("Appwrite Service:: create post - Error",error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
           return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollection,
            slug,{
                title,
                content,
                featuredImage,
                status,
            }
           )
        } catch (error) {
            console.log("uopdated post erorr: ",error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollection,
                slug
            )

            return true
        } catch (error) {
            console.log("Appwrite deletePost error: ",error);
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollection,
                slug
            )
        } catch (error) {
            console.log("Appwrite service : Getpost erorr :  ",error);
            return false;
        }
    }
    
    async getPosts(queries = [Query.equal("status","active")] ){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollection,
                queries,

            )
        } catch (error) {
            console.log("appwrite error on getting all posts : ",error);
            return false;
        }
    }


    //file uploading services

    async uplaodFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            ) 

        } catch (error) {
            console.log("Apppwrite service error in uplaod file :",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service erorr in Delete Files! : ",error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}




const service = new Service()

export default service