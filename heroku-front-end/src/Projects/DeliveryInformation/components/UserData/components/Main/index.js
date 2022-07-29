import User from "./components/User";
import UserAddress from "./components/UserAddress";
import UserPaymentMethods from "./components/UserPaymentMethods";

export default function Main(){
    return(
        <main className = 'user-data'>
            <div className = 'user-data-container'>
                <User userName={'Ramon'}/>
                <UserAddress/>
                <UserPaymentMethods/>
            </div>
        </main>
    )
}