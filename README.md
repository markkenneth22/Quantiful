### `Additional Tech Stack used`

-   Material UI - used as the core UI library
-   Axios
-   Styled Components
-   Create-react-app

### `Live Demo`

https://dynamic-dashboard-quantiful.vercel.app/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode

### `npm test`

Run unit test

### `npm run build`

Builds the app for Production

### `Project Structure`

```
node_modules/
public/
src/
├─ __tests__/                      : Contains unit test for useFetch and LoadConfiguration components only
├─ components/
│  ├─ layout/                      : Layout of the App
│  ├─ LoadConfiguration/           : Component that is used to load the configuration file
│  ├─ widgets/
│  │  ├─ WidgetDefault.tsx         : Default Widget
│  │  ├─ WidgetList.tsx            : Component that will be used for Widgets with a type 'list'
│  │  ├─ WidgetNumber.tsx          : Component that will be used for Widgets with a type 'number'
│  │  ├─ index.ts
├─ model/
│  ├─ index.ts
│  ├─ layout.type.ts               : Types for layout
│  ├─ widget.type.ts               : Types for widgets
├─ testData/                       : Test data for unit test
├─ utils/
│  ├─ useFetch.ts                  : Custom hook for fetching data from an api
├─ App.tsx
README.md                          : Documentation for code structure, build, deployment
tsconfig.json
packlage.json
jest.config.js
.prettierrc
```
