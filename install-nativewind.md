# 🌀 Install NativeWind in Expo

This guide walks you through setting up **[NativeWind](https://www.nativewind.dev/)** with **Expo** from scratch — including Tailwind CSS, Metro bundler, Babel configuration, and optional TypeScript support.

---

## 📦 1. Install Dependencies

NativeWind requires `tailwindcss`, `react-native-reanimated`, and `react-native-safe-area-context` as peer dependencies.

Run the following:

```bash
npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npm install --save-dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
```

You can also use `yarn`, `pnpm`, or `bun` if preferred.

---

## 🌬 2. Configure Tailwind CSS

### a. Create Tailwind Config

Run:

```bash
npx tailwindcss init
```

This creates a `tailwind.config.js` file.

### b. Update Content Paths

Add the paths to all files that use NativeWind classes:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### c. Create Global CSS

Create a `global.css` file at the root and add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> 📌 Replace `./global.css` with the correct relative path if you store it elsewhere.

---

## 🧠 3. Configure Babel

Update your `babel.config.js` to include the NativeWind preset:

```js
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

---

## 🚆 4. Configure Metro Bundler

If you don’t already have one, create a `metro.config.js` in the root:

```js
// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```

---

## 🧩 5. Import Global CSS

Import your `global.css` in your root component (e.g. `App.tsx`):

```tsx
import "./global.css";

export default function App() {
  /* Your App */
}
```

---

## 🌐 6. Enable Metro for Web

In `app.json`, set the bundler to **Metro**:

```json
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```

---

## 📝 7. (Optional) TypeScript Setup

For TypeScript projects, create a `nativewind-env.d.ts` file at your project root with:

```ts
/// <reference types="nativewind/types" />
```

> ⚠️ **Important:**
> Do **not** name this file:
>
> * `nativewind.d.ts`
> * The same as any folder in your project (e.g. `app.d.ts` if you have `/app`)
> * The same as a folder in `node_modules` (e.g. `react.d.ts`)

Otherwise, TypeScript will fail to pick up the types.

---

## 🧪 8. Test Your Setup

Replace the contents of `App.tsx` with this test component:

```tsx
import "./global.css";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
```

You should see **centered blue text on a white background**.
If yes ✅ — your NativeWind setup is working!

---

## 🎉 You’re Ready!

You can now use Tailwind utility classes like `bg-white`, `flex-1`, `text-xl`, etc. directly on React Native components using the `className` prop.

For more utilities and custom theming, check out the [NativeWind Docs](https://www.nativewind.dev/).