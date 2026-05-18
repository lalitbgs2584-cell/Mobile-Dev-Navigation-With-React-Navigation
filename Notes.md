# React Native Navigation

## Types of Navigation

### 1. Stack Navigator (LIFO - Last In First Out)
Screens are stacked on top of each other.

Example:

```txt
Home → Details → Profile
```

---

### 2. Tab Navigator
Navigation through bottom or top tabs.

Example:

```txt
Home | Search | Profile
```

---

### 3. Drawer Navigator
Navigation through a sidebar menu.

Example:

```txt
☰ Menu
 ├ Home
 ├ Profile
 ├ Settings
```

---

# Navigation Actions

Import navigation hooks:

```tsx
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation<any>();
```

---

## 1. push()

Pushes a new screen to the stack.

```tsx
<Button
  onPress={() => navigation.push('Profile')}
>
  Open Profile
</Button>
```

Before:

```txt
Home → Details
```

After:

```txt
Home → Details → Profile
```

---

## 2. pop()

Removes current screen from stack.

```tsx
<Button
  onPress={() => navigation.pop()}
>
  Go Back
</Button>
```

Remove multiple screens:

```tsx
<Button
  onPress={() => navigation.pop(2)}
>
  Go Back Two Screens
</Button>
```

Before:

```txt
Home → Details → Profile
```

After:

```txt
Home → Details
```

---

## 3. popTo()

Pops screens until a specific screen is reached.

```tsx
<Button
  onPress={() => navigation.popTo('Home')}
>
  Go to Home
</Button>
```

Before:

```txt
Home → Details → Profile → Settings
```

After:

```txt
Home
```

---

## 4. replace()

Replaces current screen with another.

```tsx
<Button
  onPress={() => navigation.replace('Home')}
>
  Replace Screen
</Button>
```

Before:

```txt
Home → Profile
```

After:

```txt
Home → Home
```

Useful in authentication:

```tsx
navigation.replace('Dashboard');
```

Prevents returning to Login.

---

## 5. navigate()

Navigates to a screen.

```tsx
<Button
  onPress={() => navigation.navigate('Details')}
>
  Go to Details
</Button>
```

Passing parameters:

```tsx
<Button
  onPress={() =>
    navigation.navigate('Profile', {
      name: 'Lalit',
      age: 20,
    })
  }
>
  Open Profile
</Button>
```

Receiving parameters:

```tsx
import { useRoute } from '@react-navigation/native';

const route = useRoute();

console.log(route.params.name);
console.log(route.params.age);
```

---

## 6. goBack()

Returns to previous screen.

```tsx
<Button
  onPress={() => navigation.goBack()}
>
  Back
</Button>
```

Before:

```txt
Home → Details → Profile
```

After:

```txt
Home → Details
```

---

## 7. reset()

Completely clears stack and creates new navigation state.

```tsx
<Button
  onPress={() =>
    navigation.reset({
      index: 0,
      routes: [
        { name: 'Home' }
      ],
    })
  }
>
  Reset Stack
</Button>
```

Before:

```txt
Login → OTP → Profile
```

After:

```txt
Home
```

---

## 8. popToTop()

Returns directly to the first screen in stack.

```tsx
<Button
  onPress={() => navigation.popToTop()}
>
  Go to Top
</Button>
```

Before:

```txt
Home → Details → Profile → Settings
```

After:

```txt
Home
```

---

# push() vs navigate()

### push()

Always creates a new screen.

```tsx
navigation.push('Profile');
```

Result:

```txt
Home → Profile → Profile → Profile
```

---

### navigate()

Moves to screen if it already exists.

```tsx
navigation.navigate('Profile');
```

Result:

```txt
Home → Profile
```

---

# Quick Summary

| Action | Description |
|----------|-------------|
| push() | Add new screen |
| pop() | Remove current screen |
| popTo() | Go to a specific screen |
| replace() | Replace current screen |
| navigate() | Navigate to screen |
| goBack() | Go to previous screen |
| reset() | Clear and recreate stack |
| popToTop() | Return to first screen |
