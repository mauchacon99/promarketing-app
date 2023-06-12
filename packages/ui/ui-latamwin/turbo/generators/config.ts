import { PlopTypes } from "@turbo/gen";

// Learn more about TurboRepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation
/**
 * Generator.
 *
 * @param plop - PlopTypes.NodePlopAPI.
 */
export default function generator(plop: PlopTypes.NodePlopAPI): void {
    // A simple generator to add a new React component to the internal UI library
    plop.setGenerator("react-component", {
        description: "Adds a new react component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is the name of the component?",
            },
        ],
        actions: [
            {
                type: "add",
                path: "{{pascalCase name}}.tsx",
                templateFile: "templates/component.hbs",
            },
            {
                type: "append",
                path: "index.tsx",
                pattern: /(\/\/ component exports)/g,
                template: 'export * from "./{{pascalCase name}}";',
            },
        ],
    });
}
