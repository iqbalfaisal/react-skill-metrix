export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomUserName = (index: number) => {
  const firstName = [
    'John',
    'Jane',
    'Tom',
    'Bob',
    'Alice',
    'Sam',
    'Max',
    'Linda',
    'Sue',
    'Mike',
    'Sarah',
    'Jane',
    'Tom',
    'Bob',
    'Alice',
    'Sam',
    'Max',
    'Linda',
    'Sue',
    'Mike',
    'Sarah',
  ];
  return `${firstName[index % firstName.length]} ${index}`;
};

export const randomSkillName = (index: number) => {
  const skillName = [
    'CSS',
    'Typescript',
    'React',
    'TailwindCSS',
    'JIRA',
    'Agility',
    'Rust',
    'Postgres SQL',
  ];
  return `${skillName[index % skillName.length]} ${index}`;
};

export const randomSkillCategoryName = (index: number) => {
  const skillCategoryName = ['Software Development', 'Dev Ops', 'Leadership'];
  return `${skillCategoryName[index % skillCategoryName.length]} ${index}`;
};
