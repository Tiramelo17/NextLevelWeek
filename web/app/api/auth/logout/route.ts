import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import api from "@/lib/api";



export async function GET(request:NextRequest) {

    
    const redirectURL = new URL('/', request.url)
    
   // para remover o cookie basta não passar ele então irá atualizar para 0 alem de também poder colocar o 
   //tempo para expiração de 0 segundo ou seja ja inspirado 
    return NextResponse.redirect(redirectURL, {
        headers: {
                    'Set-Cookie': `token=; path=/; max-age=0 `
                }
    })
}