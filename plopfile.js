module.exports = plop => {
  plop.setHelper("upperCase", txt => txt.toUpperCase());

  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?"
      },
      {
        type: "list",
        name: "type",
        message: "What kind of component?",
        choices: ["Uncategorized", "Atoms", "Molecules", "Organisms"]
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/Component/index.js.hbs"
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.stories.js",
        templateFile: "plop-templates/Component/index.stories.js.hbs",
        data: { folder: "components" }
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.module.scss",
        templateFile: "plop-templates/Component/index.module.scss.hbs"
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/readme.mdx",
        templateFile: "plop-templates/Component/readme.md.hbs"
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.spec.tsx.bak",
        templateFile: "plop-templates/Component/index.spec.tsx.hbs"
      }
    ]
  });
};
