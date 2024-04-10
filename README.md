# Converting the codebase from javascript to typescript

## Introduction

This document describes the steps I took to convert this codebase from javascript to typescript.

## Steps

1. Install typescript and assiosiated definations.

```bash
npm install --save-dev typescript @types/node @types/react @types/react-dom 
```

2. Rename the files from `.js` to `.ts` and `.jsx` to `.tsx`. (App.js and Weather.js)

3.Create a file named declaration.d.ts in the src of the project and add the following code.

```typescript
declare module "*.jpg"
declare module "*.png"
```
This is to tell typescript that we can import images in our codebase.

4. create tsconfig.json by running the following command.

```bash
tsc --init
```
 Then provide the property called :

```json
"jsx": "react-jsx"
```

5. Create types for the props and state of the components.

6. Fix the errors that typescript throws. Like using `as const` for css styles.