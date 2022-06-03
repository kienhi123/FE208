export type Product = {
    id:number,  // Nếu dùng nodejs thì string
    name:string 
    price:number
    img:string
    desc:string
    status:number
}
export type ProductCreate={
    name?:string
    price?:number
    img?:string
    desc?:string
    status?:number

}

