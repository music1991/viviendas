export type Skill = { 
  id: string; 
  name: string; 
  descriptionKey: string;
};

export type Stack = { 
  id: "frontend" | "backend" | "database"; 
  labelKey: string;
  skills: Skill[]; 
};

export type Mode = 0 | 1 | 2;  
  
export const STACK_LIST: Stack[] = [
  {
    id: "frontend",
    labelKey: "skills.frontend",
    skills: [
      {
        id: "javascript",
        name: "JavaScript",
        descriptionKey: "skills.stack.frontend.javascript",
      },
      {
        id: "typescript",
        name: "TypeScript",
        descriptionKey: "skills.stack.frontend.typescript",
      },
      {
        id: "react1",
        name: "React JS",
        descriptionKey: "skills.stack.frontend.react1",
      },
      {
        id: "react2",
        name: "React Native",
        descriptionKey: "skills.stack.frontend.react2",
      },
      {
        id: "next",
        name: "Next.js",
        descriptionKey: "skills.stack.frontend.next",
      },
      {
        id: "html",
        name: "HTML",
        descriptionKey: "skills.stack.frontend.html",
      },
    ],
  },
  {
    id: "backend",
    labelKey: "skills.backend",
    skills: [
      {
        id: "nodejs",
        name: "Node.js",
        descriptionKey: "skills.stack.backend.nodejs",
      },
      {
        id: "c-sharp",
        name: "C#",
        descriptionKey: "skills.stack.backend.c-sharp",
      },
      {
        id: "python",
        name: "Python",
        descriptionKey: "skills.stack.backend.python",
      },
      {
        id: "php",
        name: "PHP",
        descriptionKey: "skills.stack.backend.php",
      },
    ],
  },
  {
    id: "database",
    labelKey: "skills.database",
    skills: [
      {
        id: "sqlServer",
        name: "SQL Server",
        descriptionKey: "skills.stack.database.sqlServer",
      },
      {
        id: "postgress",
        name: "PostgreSQL",
        descriptionKey: "skills.stack.database.postgress",
      },
      {
        id: "git",
        name: "Git",
        descriptionKey: "skills.stack.database.git",
      },
      {
        id: "vite",
        name: "Vite",
        descriptionKey: "skills.stack.database.vite",
      },
    ],
  },
];