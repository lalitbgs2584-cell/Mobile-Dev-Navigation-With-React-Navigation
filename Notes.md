# 04 React Navigation Notes

## Crux of this codebase

This project is a small React Native + Expo practice app for learning
React Navigation.

The real point of the codebase is not UI design. The point is to understand:

1. how a navigation container wraps the app
2. how different navigators work
3. how screens move between each other
4. how nesting navigators solves real app structure
5. how params are passed from one screen to another

Right now, the app is centered around a drawer navigator at the root, and a
stack navigator nested inside the Home section.

That means the current mental model is:

```txt
App
 -> NavigationContainer
    -> Drawer Navigator
       -> Home
          -> Stack Navigator
             -> HomeScreen
             -> DetailScreen
             -> ProfileScreen
       -> SearchScreen
       -> ProfileScreen
```

This is the most important idea in the project:

`Drawer = top-level app sections`
`Stack = screen-to-screen flow inside one section`

That is how many real apps are structured.

---

## Current navigation types in this repo

### 1. Stack navigation

Files:

- `src/navigator/stack/DynamicStackNavigator.tsx`
- `src/navigator/stack/StaticStackNavigator.tsx`

Use this when screens should move forward and backward in order.

Example:

```txt
Home -> Detail -> Profile
```

Best for:

- detail pages
- product flows
- forms
- onboarding steps

---

### 2. Bottom tab navigation

Files:

- `src/navigator/tab/DynamicTabNavigator.tsx`
- `src/navigator/tab/StaticTabNavigator.tsx`

Use this when users need fast switching between major sections.

Example:

```txt
Home | Profile | Detail
```

Best for:

- dashboard apps
- social apps
- apps with 3 to 5 top-level areas

---

### 3. Drawer navigation

Files:

- `src/navigator/drawer/DynamicDrawerNavigator.tsx`
- `src/navigator/drawer/HomeDrawerStack.tsx`

This is now the main navigation used by `App.tsx`.

Use this when the app has major sections but you do not want them always visible
at the bottom.

Example:

```txt
Menu
 |- Home
 |- Search
 |- Profile
```

Best for:

- admin apps
- content-heavy apps
- apps with many sections

---

## Files you should understand first

If you only study a few files, study them in this order:

### 1. `App.tsx`

Why it matters:

- this is the app entry
- it decides which navigator is currently mounted

Current role:

- loads `DynamicDrawerNavigator`

---

### 2. `src/navigator/drawer/DynamicDrawerNavigator.tsx`

Why it matters:

- this is the root navigation structure of the app
- it defines the drawer menu items
- it shows how icons and drawer styling are configured

What to learn here:

- `createDrawerNavigator()`
- `screenOptions`
- `drawerIcon`
- why `headerShown: false` is used for the nested Home stack

---

### 3. `src/navigator/drawer/HomeDrawerStack.tsx`

Why it matters:

- this file is the best example of nested navigation in the project
- it shows how one drawer section can internally manage its own stack flow

What to learn here:

- `createNativeStackNavigator()`
- nested navigators
- header button for opening the drawer
- keeping `Home -> Detail -> Profile` inside one stack

This file is probably the most important file in the whole project.

---

### 4. `src/screens/HomeScreen.tsx`

Why it matters:

- shows simple `navigation.navigate(...)`
- this is where the user starts the screen flow

What to learn here:

- how screens trigger navigation
- route names must exactly match the navigator names

---

### 5. `src/screens/DetailScreen.tsx`

Why it matters:

- shows `goBack()`
- shows passing params to another screen

What to learn here:

- `navigation.goBack()`
- `navigation.navigate('Profile', params)`

---

### 6. `src/screens/ProfileScreen.tsx`

Why it matters:

- shows how params are received through `useRoute()`

What to learn here:

- `route.params`
- safe handling when params are missing

---

## One-line summary of each important file

- `App.tsx`: picks the main navigator for the app
- `index.ts`: registers the root app and gesture-handler setup
- `src/navigator/drawer/DynamicDrawerNavigator.tsx`: root drawer layout
- `src/navigator/drawer/HomeDrawerStack.tsx`: nested stack inside Home
- `src/navigator/stack/*`: isolated stack examples
- `src/navigator/tab/*`: isolated tab examples
- `src/screens/*`: actual screen UI and navigation actions

---

## Biggest concepts this repo is teaching

### 1. A screen name must match exactly

If a screen is registered as `Detail`, then use:

```tsx
navigation.navigate('Detail')
```

Not:

```tsx
navigation.navigate('Details')
```

Small naming mismatches are one of the most common React Navigation mistakes.

---

### 2. Only one `NavigationContainer` should be at the app root

This is a core rule.

Do this:

```txt
App -> NavigationContainer -> Main Navigator
```

Avoid putting multiple containers in active nested app flows unless you have a
very special reason.

---

### 3. Nested navigators are normal

Real apps often do this:

```txt
Drawer
 -> Home Stack
 -> Profile
 -> Search
```

This is better than forcing every screen to live at the same top level.

---

### 4. Stack is for flow, drawer/tab is for sections

This is the biggest architecture lesson in the repo.

- Use `Stack` for moving deeper into a flow
- Use `Drawer` or `Tab` for moving between major app areas

---

### 5. Params are just data passed during navigation

Example:

```tsx
navigation.navigate('Profile', {
  name: 'Lalit',
  age: 20,
  role: 'Developer',
})
```

Then in the destination screen:

```tsx
const route = useRoute<any>();
const { name, age, role } = route.params ?? {};
```

---

## What you should know more deeply

If you want to get good at this codebase, focus on these topics next:

### 1. Nested navigators

This is the most important next topic.

Understand:

- drawer + stack
- tab + stack
- when to hide parent headers
- when child screens should control the flow

---

### 2. Navigation typing in TypeScript

Right now the project uses `any` in places like:

```tsx
const navigation = useNavigation<any>();
const route = useRoute<any>();
```

This works for learning, but it is not ideal.

A better version would create typed param lists such as:

- `RootDrawerParamList`
- `HomeStackParamList`

Then use proper typed hooks and screen props.

This is one of the best improvements you can make.

---

### 3. Reusable navigation constants

As the app grows, hardcoded route names become risky.

A better version would keep route names and param types consistent through:

- a navigation types file
- shared route constants
- one source of truth for screen names

---

### 4. Header customization

This project already shows a custom drawer menu button in the stack header.

Learn more about:

- `headerLeft`
- `headerRight`
- custom titles
- custom header styles
- hiding headers where needed

---

### 5. Custom drawer content

Once the basics are clear, the next nice upgrade is a custom drawer UI.

That could include:

- profile info at the top
- grouped menu items
- logout button
- themed colors

---

## How to make this codebase better

Here are the highest-value improvements.

### 1. Add proper TypeScript navigation types

Best improvement overall.

Create something like:

```txt
src/types/navigation.ts
```

Then define:

- drawer param list
- stack param list
- typed route params
- typed screen props

This will remove most `any` usage.

---

### 2. Separate demo code from real app code

Right now the repo contains multiple navigation examples together:

- static stack
- dynamic stack
- static tab
- dynamic tab
- dynamic drawer

That is good for learning, but if this becomes a real app, you should separate:

- `examples/`
- `main app navigation/`

So the active app structure is easier to follow.

---

### 3. Improve screen UI

The screens are currently minimal.

That is fine for learning navigation, but better practice would include:

- container spacing
- centered layout
- clearer button labels
- section titles
- safe area handling

---

### 4. Add a custom navigation types folder

Suggested structure:

```txt
src/
  navigator/
  screens/
  types/
    navigation.ts
```

This makes the project easier to scale.

---

### 5. Add comments only where architecture is not obvious

Good places for comments:

- why the Home drawer screen uses a nested stack
- why the drawer header is hidden for the Home route
- why the menu button is added inside stack headers

---

### 6. Add one reusable button or layout component

This will help you move from "learning examples" to "real app structure."

Example:

- `ScreenContainer`
- `PrimaryButton`

---

## Suggested learning order for this repo

1. Understand `App.tsx`
2. Understand `DynamicDrawerNavigator.tsx`
3. Understand `HomeDrawerStack.tsx`
4. Understand `HomeScreen -> DetailScreen -> ProfileScreen`
5. Compare drawer vs stack vs tab examples
6. Add TypeScript route types
7. Add a custom drawer

---

## Quick practical rules

- Use stack for flow
- Use drawer or tab for major sections
- Keep route names consistent
- Do not overuse `any`
- Keep one main `NavigationContainer`
- Learn nested navigators early

---

## Best file to know deeply

If you ask "which single file should I know best in this project?"

The answer is:

`src/navigator/drawer/HomeDrawerStack.tsx`

Why:

- it connects the real screen flow
- it shows nesting
- it shows stack behavior
- it shows header customization
- it explains how the drawer and stack work together

After that, know:

`src/navigator/drawer/DynamicDrawerNavigator.tsx`

---

## Final takeaway

This codebase is a navigation learning lab.

The most important thing to understand is not just "how to move to another
screen", but:

`how to structure navigation like a real app`

If you understand:

- root navigator
- nested stack
- route names
- params
- headers

then you understand the crux of this project.
