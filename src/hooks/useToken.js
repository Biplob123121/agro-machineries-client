import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');

    useEffect( () =>{
        const email = user?.user?.email;
        const currentUser = {email : email};
        if(email){
            fetch(`https://dry-spire-96844.herokuapp.com/user/${email}`, {
                method : 'PUT',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                const AccessToken = data.token;
                localStorage.setItem('accessToken', AccessToken);
                setToken(AccessToken);
            });
        }

    }, [user]);

    return [token];
}

export default useToken;