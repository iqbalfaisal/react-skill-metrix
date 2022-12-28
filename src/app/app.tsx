import { useEffect, useState } from 'react';

import { getUsers } from 'app/data/users';
import { getSkills, getSkillCategories } from 'app/data/skills';
import { PageHeader } from 'app/components/page-header';
import { PageContainer } from 'app/components/page-container';
import { UserCard } from 'app/components/user-card';
import { SkillCard } from 'app/components/skill-card';

const App = (): JSX.Element => {
  const [skills, setSkills] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setSkillCategories] = useState([]);

  useEffect(() => {
    setSkills(getSkills());
    setUsers(getUsers());
    setSkillCategories(getSkillCategories());
  }, []);

  console.log(skills, users);

  const renderHeader = () => {
    return skills?.map((item) => {
      return (
        <th key={item.id}>
          <SkillCard name={item.name} />
        </th>
      );
    });
  };

  const renderUsers = () => {
    return users?.map((item) => {
      return (
        <tr key={item.id}>
          <UserCard name={item.name} />

          {item?.skills.map((skill) => {
            return (
              <th key={skill.skill_id}>
                <SkillCard name={skill.level + '/ 9'} />
              </th>
            );
          })}
        </tr>
      );
    });
  };

  return (
    <div className="relative">
      <PageHeader>Skill Matrix</PageHeader>
      <PageContainer>
        <table>
          <thead>
            <tr>
              <th key={'name'}></th>
              {renderHeader()}
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      </PageContainer>
    </div>
  );
};

export default App;
