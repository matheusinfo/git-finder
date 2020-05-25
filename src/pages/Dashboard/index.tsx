import React, {useEffect, useState, FormEvent} from 'react';

import api from '../../services/api';
import GitFinder from '../../assets/gitFinder.png';
import User from '../../components/User';

import {Container, Form, ErrorTag} from './styles';

interface User{
    avatar_url: string,
    login: string,
    name: string,
    followers: number,
    following: number,
    created_at: string,
    html_url: string,
    bio: string,
    public_repos: number,
    id: number
}

const Dashboard: React.FC = () => {
    // HOOKS
    const [listUser, setListUser] = useState<User[]>(() => {
        const storageUsers = localStorage.getItem('@GitFinder: users');

        if(storageUsers){
            return JSON.parse(storageUsers);
        }else 
            return[];
    });
    const [user, setUser] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        localStorage.setItem(
            '@GitFinder: users',
            JSON.stringify(listUser)
        );
    }, [listUser]);

    // Function to add a user in array
    const handleAddUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!user){
            setError("ERRO: digite o nome do usuário!")
            return;
        }

        try{
            const response = await api.get(`/users/${user}`);
            const userData = response.data;

            setListUser([...listUser, userData]);
            setError("");
        }catch(error){
            setError("ERRO: usuário digitado é inválido!")
        }

        setUser("");
    }

    // Function to delete a user in array
    const handleDelUser = async (id: number) => {
        const update = listUser.filter(user => user.id !== id);

        setListUser([...update]);

        await localStorage.setItem('@GitFinder: users', JSON.stringify(update));
    }

    // Function to update a user in array
    const handleUpdateUser = async (id: number) => {
        const refresh = listUser.filter(user => user.id === id);

        try{
            const {data} = await api.get(`users/${refresh[0].login}`);

            setListUser([...listUser.map(user => (user.id === data.id ? data : user))]);

            await localStorage.setItem('@GitFinder: users', JSON.stringify(user));
        }catch(error){
            setError("ERRO ao atualizar usuário: " + error);
        }
    }
    
    return(
        <Container>
            <img src={GitFinder} alt="Git Finder"/>
            
            <Form hasError={!!error} onSubmit={handleAddUser}>
                <input type="text" placeholder="Digite o nome do usário no github" value={user} onChange={e => setUser(e.target.value)}/>
                <button>Enviar</button>
            </Form>

            {error && <ErrorTag>{error}</ErrorTag>}

            <User 
                userRepos={listUser} 
                deleteUser={handleDelUser} 
                updatedUser={handleUpdateUser}
            />
        </Container>
    )
}

export default Dashboard;