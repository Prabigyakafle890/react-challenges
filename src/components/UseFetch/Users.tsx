
import { useFetchUsers } from "./useFetchUsers";

type UserType= {
    id: number,
    name: string,
}

export const Users = () =>{
    
    const {data, isLoading, error} = useFetchUsers();

    return(
        <div>
            {isLoading && <p>Loading</p>}
            {error && <p>Error loading users</p>}
            {data && 
            data.map((user: UserType)=>{
                return <p key= {user.id}>{user.name}</p>
            })}
        </div>


    );
}