import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../contexts/userContext";
import { server } from "../../../../server";
import User from "./components/User";
import UserAddress from "./components/UserAddress";
import UserPaymentMethods from "./components/UserPaymentMethods";

export default function Main(){

    const { getIdUser } = useContext(UserContext)
    
    const [userData, setUserData] = useState()

    useEffect(() =>{
        server.get(`usuario/${getIdUser()}/pegarDados`)
        .then((res) => {
            const data = res.data

            if(data.error){
                alert(data.response)
            }else{
                setUserData(data.response)
            }
        })
        .catch(() => alert('Não foi possível pegar os dados, tente mais tarde'))
    },[])

    return(
        <main className = 'user-data'>
            <div className = 'user-data-container'>
                <User userName={userData?.usuario.nome}/>
                <UserAddress address={userData?.enderecos}/>
                <UserPaymentMethods paymentMethods={userData?.formasPagamentos}/>
            </div>
        </main>
    )
}