import { myFetch } from "./my-fetch";

export function getList() {
    return myFetch('users');
}

//export const getUsers = ()=> myFetch(`users`);
