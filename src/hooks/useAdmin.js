import { useEffect, useState } from "react"

const useAdmin = user =>{
    const [admin, setAdmin] = useState(false);
    const [adminLoding, setAdminLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`https://safe-hollows-65617.herokuapp.com/admin/${email}`, {
                method : 'GET',
                headers : {
                    'content-type' : 'application/json',
                    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data =>{
                setAdmin(data.admin);
                setAdminLoading(false);
            });
        }

    }, [user]);

    return [admin, adminLoding];
}

export default useAdmin;