import useFecht from "../hook/useFetch"

export default function Product(){

    const [data,status] = useFecht('https://dummyjson.com/carts/1');

    return(
        <div>
           {
            status ? <p>Loading...</p>
            :
            data.Product.map(item => <div>
                <p>ID: {item.id}</p>
                <p>Name: {item.title}</p>
                </div>)
           }
        
        </div>
    )
}