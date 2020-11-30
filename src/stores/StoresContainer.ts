import AuthService from "../services/Authentication/AuthService";
import { UserStore } from "./UserStore";

const authService = new AuthService();

/**
 * A property that combines and initializes all stores.
 */
export const stores = {
    userStore: new UserStore(authService),
};
