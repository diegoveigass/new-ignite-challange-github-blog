import { User } from '../../pages/Blog'
import { ProfileContainer, ProfileInfo, ProfileInfoFooter } from './styles'

import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
} from 'react-icons/fa'

interface ProfileProps {
  user: User | null
}

export function Profile({ user }: ProfileProps) {
  if (!user) return <></>

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />
      <ProfileInfo>
        <header>
          <strong>Diego Veiga</strong>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            GITHUB
            <FaExternalLinkAlt size={12} />
          </a>
        </header>
        <p>{user.bio}</p>
        <ProfileInfoFooter>
          <div>
            <FaGithub size={16} />
            <span>{user.login}</span>
          </div>
          <div>
            <FaBuilding size={16} />
            <span>{user.company}</span>
          </div>
          <div>
            <FaUserFriends size={16} />
            <span>{user.followers} seguidores</span>
          </div>
        </ProfileInfoFooter>
      </ProfileInfo>
    </ProfileContainer>
  )
}
