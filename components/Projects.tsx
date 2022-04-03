import { Card } from './Card';

export interface ProjectsConfig {
  limit?: number;
}

export const Projects: React.FC<ProjectsConfig> = ({ limit = 5 }) => {
  return (
    <>
      <Card
        name="My cool project"
        description="a very cool project"
        link="https://github.com"
      />
      <Card
        name="Another project"
        description="a project that I am not really interested in"
      />
    </>
  );
};
