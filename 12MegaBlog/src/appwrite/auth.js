import { useActionData } from "react-router";
import config from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  session;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // call another method
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
    }
  }

  login = async (email, password) => {
    try {
      this.session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return this.session;
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentUser = async () => {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
    }

    return null;
  };

  async logout() {
    try {
      await this.account.deleteSessions();
      this.session = null;
    } catch (error) {
      console.log(error);
    }
  }
}

const authService = new AuthService();

export default AuthService;
