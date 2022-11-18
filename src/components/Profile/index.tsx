import { ProfileContainer, ProfileInfo, ProfileInfoFooter } from './styles'

import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
} from 'react-icons/fa'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/diegoveigass.png" alt="" />
      <ProfileInfo>
        <header>
          <strong>Diego Veiga</strong>
          <a
            href="https://github.com/diegoveigass"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
            <FaExternalLinkAlt size={12} />
          </a>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          repellat totam voluptate deserunt modi magnam nostrum eos eaque magni
          minus maiores. Voluptatibus quae at enim labore amet deserunt,
          pariatur quidem!
        </p>
        <ProfileInfoFooter>
          <div>
            <FaGithub size={16} />
            <span>diegoveigass</span>
          </div>
          <div>
            <FaBuilding size={16} />
            <span>XMobots</span>
          </div>
          <div>
            <FaUserFriends size={16} />
            <span>32 seguidores</span>
          </div>
        </ProfileInfoFooter>
      </ProfileInfo>
    </ProfileContainer>
  )
}
