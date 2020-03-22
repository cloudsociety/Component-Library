# Versett Reusable Component Library

## What is this?

This component library is a set of components that are routinely used in projects. By adding them here, we can continually build on them and ensure they meet a high standard of accessibility.

## How do I use it?

The library is built in Storybook. The fastest way to see what components are available is to `npm install` and `npm run storybook`.

This isn't designed to be used directly inside a project. Instead, copy the component folder you need into your project.

**Don't copy _everything_ from src/components to your project unless you're absolutely sure you'll be using everything.**

## What's here

In the src/component directory, you'll find:

- Form Elements
    - Button
- Interactions
    - CollapsibleSection
    - Drawer
    - Modal
- Layouts
    - LayoutCover
    - LayoutSidebar
    - LayoutSwitcher
    - ViewportPad

Feel free to create a PR if there are others that should be here... or if a current component requires a change to align with new information.

## The styles don't work in my project!

Change them. Every project has unique goals and challenges. These components are meant as a starter, not the complete deal (we do aim for easiest use though).

## A component is broken!

Uh oh! There's a good chance the component you're looking at is still in development or a recent package update has broken some code. Open an issue or write up a PR with the changes you need.

## I want to add a new component. How do I start?

This is great news! We definitely can use more re-usable components. Scaffolding is handled by PlopJS. In a terminal and inside the library folder, type `npx plop` and follow the prompts (be sure you've `npm install`ed before running that command). After, you'll find a folder in _src/components_ with all the files you need to get started.

