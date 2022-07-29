import User from "./components/User";
import UserAddress from "./components/UserAddress";

export default function Main(){
    return(
        <main className = 'user-data'>
            <div className = 'user-data-container'>
                <User userName={'Ramon'}/>
                <UserAddress/>
            </div>
        </main>
    )
}