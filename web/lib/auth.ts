import { cookies } from "next/headers";
import  decode  from "jwt-decode";
interface User {
    sub: String;
    name: String;
    avatarUrl: String;
}

export function getUser() : User{
    const token = cookies().get('token')?.value;

    if(!token){
        throw new Error('Unauthenticated');
    }
    console.log(decode(token))
    const user : User = decode(token);
    return user;
};