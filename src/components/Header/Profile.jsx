import React from "react";
import axios from "axios";

const Profile = () => {
    const [isLoadingUser, setLoadingUser] = React.useState(true);
    const [user, setUser] = React.useState(null);
    const URL = 'https://api.github.com/users/MatthewThornton';

    React.useEffect(() => {
        axios.get(URL)
            .then(response => {
                setUser(response.data);
                setLoadingUser(false);
            })
            .catch(error => {
                console.log("error getting user: ", error);
            });
    }, []);

    if (isLoadingUser) {
        return (<span data-testid="WAIT-FOR-USER">...</span>);

    } else {
        console.log("user: ", user);
        return (<>
            <li>
                <img src={user.avatar_url} width="45px"
                    alt={user.name}
                />
            </li>
            <li className="user-name" data-testid='USER-NAME'>
                <a
                    href={user.html_url}
                >
                    {user.name}
                </a>
            </li>
        </>);
    }
}
export default Profile;