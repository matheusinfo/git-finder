import React from 'react';
import {FaTrash, FaArrowCircleRight} from 'react-icons/fa';
import {MdRefresh} from 'react-icons/md';

import {Container, Users, UserHeader, Button, WrapperButton} from './styles';

interface UserList{
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

interface listWrapper{
    userRepos: UserList[];
    deleteUser: Function;
    updatedUser: Function;
}

const User: React.FC<listWrapper> = ({userRepos, deleteUser, updatedUser}) => {
    return(
        <Container>
            {userRepos.map(user => (
                <Users key={user.id}>
                    <UserHeader>
                        <img src={user.avatar_url} alt={user.name}/>
                        
                        <div>
                            <strong>{user.name}</strong>
                            <span>{user.login}</span>
                        </div>
                    </UserHeader>

                    <ul>
                        <li><strong>Bio: </strong> <span>{user.bio}</span></li>
                        <li><strong>Repositórios: </strong> <span>{user.public_repos}</span></li>
                        <li><strong>Seguindo: </strong> <span>{user.following}</span></li>
                        <li><strong>Seguidores: </strong> <span>{user.followers}</span></li>
                        <li><strong>Criado em: </strong><span>{user.created_at.replace("T", " às ").replace("Z", " ")}</span></li>
                    </ul>

                    <WrapperButton>
                        <Button color='rgb(201, 48, 48)' title="Deletar" onClick={e => deleteUser(user.id)}>
                            <FaTrash size={17}/>
                        </Button>

                        <Button color='rgb(211, 198, 22)' title="Atualizar" onClick={e => updatedUser(user.id)}>
                            <MdRefresh size={25}/>
                        </Button>

                        <Button color='rgb(65, 201, 47)' title="Ir para Github">
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                <FaArrowCircleRight size={18}/>
                            </a>
                        </Button>
                    </WrapperButton>
                </Users>
            ))}
        </Container>
    )
}

export default User;