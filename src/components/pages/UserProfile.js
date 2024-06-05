import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 10px;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const Username = styled.p`
  margin: 5px 0;
  font-size: 18px;
  color: #666;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const StatLabel = styled.span`
  font-size: 14px;
  color: #666;
`;

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mock user data
    const mockUser = {
      avatarUrl: 'https://via.placeholder.com/100',
      name: 'Prince Love',
      username: 'Lovetechcyber',
      followers: 1200,
      following: 300,
      posts: 150,
    };

    // Simulate API call with static data
    setUser(mockUser);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileContainer>
      <Avatar src={user.avatarUrl} alt="User Avatar" />
      <Name>{user.name}</Name>
      <Username>@{user.username}</Username>
      <Stats>
        <Stat>
          <StatNumber>{user.followers}</StatNumber>
          <StatLabel>Followers</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>{user.following}</StatNumber>
          <StatLabel>Following</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>{user.posts}</StatNumber>
          <StatLabel>Posts</StatLabel>
        </Stat>
      </Stats>
    </ProfileContainer>
  );
};

export default UserProfile;
