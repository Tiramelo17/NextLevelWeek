import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import api from "@/lib/api";

export async function GET(request:NextRequest) {
    //Pegado o código do github dentro da url da call back no front 
    const {searchParams} = new URL(request.url);
    const code = searchParams.get("code");

    const redirectTo = request.cookies.get('redirectTo')?.value

    //com o codigo fazemos uma requisição passando o code para a nossa api de register de users
    // ela nos retornara o token se o usuário ja tiver cadastro , caso não tenha ele criara um usuario na nossa aplicação 
    // e então também retornara o token desse usuario. 
    const registerResponse = await api.post('/register',{code,})
    const {token} = registerResponse.data;

    // Criamos uma New URL com / para identificar a raiz da url e então passamos a url da nossa aplicação que esta 
    //contida no request.url, assim podemos redirecionar depois o uruário novamente para a raiz do sistema automaticamente
    const redirectURL =redirectTo ?? new URL('/', request.url)

    // o headers é um retorno para os cookies para que possamos salvar o token, usamos o path=/ para 
    //indicar que toda aplicação pode acessar esse cookie,
    // max-age=2592000 o que define em segundos o tempo que o cookie ficara salvo no navegador e aplicação 
    return NextResponse.redirect(redirectURL, {
        headers: {
                    'Set-Cookie': `token= ${token}; path=/; max-age=2592000 `
                } 
    })
}