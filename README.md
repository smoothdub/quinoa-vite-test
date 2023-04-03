# quinoa-test

## Get started

`quarkus dev` should be enough to get started.

## Info

Quarkus props

```properties
quarkus.quinoa.ui-dir=src/main/ui
quarkus.quinoa.enable-spa-routing=true
quarkus.quinoa.dev-server.port=5173
quarkus.http.root-path=/app
```

React routes are defined in `src/main/ui/src/App.tsx`

React base path is defined in `src/main/ui/package.json`

```json
"start": "vite --base=/app"
```

In the react router I have to redefine the base url in order to make the url rewriting work

```tsx
createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<MatchAll />} />
    </Route>
  ),
  { basename: "/app" }
);
```

# URLs

- `http://localhost:8080/app/hello`: Reasteasy path
- `http://localhost:8080/app/app/`: This route match the \* route path in react router
- `http://localhost:8080/app/app`: Does not work
- Other routes seems not reachable

- `http://localhost:5173/app`: Leads to Home
- `http://localhost:5173/app/about`: Leads to About
- `http://localhost:5173/app/other`: Leads to MatchAll

# Wished Behavior

- `http://localhost:8080/app/hello`: Reasteasy path
- `http://localhost:8080/app`: Leads to Home
- `http://localhost:8080/app/about`: Leads to About
- `http://localhost:8080/app/other`: Leads to MatchAll
