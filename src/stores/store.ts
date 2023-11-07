import { applyMiddleware, compose, legacy_createStore } from "redux";
import { rootReducer } from ".";
// const composeEnhancers =
//   typeof window === 'object' &&
//   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(middleware),
//   // other store enhancers if any
// );
export const store = legacy_createStore(rootReducer);
