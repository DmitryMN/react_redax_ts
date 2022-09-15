import React, { useEffect } from 'react';
import { useTypedselector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

export const UserList: React.FC = () => {
    const { users, loading, error } = useTypedselector(state => state.users);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if(loading) {
        return <div>Идет загрузка...</div>
    }

    if(error) {
        return <div>{error}</div>
    }

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}: {user.email}</div>)}
        </div>
    )
}
