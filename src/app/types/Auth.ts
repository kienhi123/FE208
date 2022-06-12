export type TypeLoginRequest = {
    email:string,
    password:string
}
export type TypeLoginRespone = {
    accessToken:string,
    user:{
    id:number
    email:string,
    }
}

export type TypeSignupRequest = {
    name:string
    email:string,
    password:string
}
export type TypeSignupRespone = {
    id:number
    email:string,
}

