// import { createStore, applyMiddleware } from "redux";
// import { petsReducer } from "../store/petsReducer";
// import thunk from "redux-thunk";

// export const store = createStore(petsReducer, applyMiddleware(thunk));

import { createStore, applyMiddleware } from "redux";
import { notesReducer } from "./notesReducer";
import thunk from "redux-thunk";

export const store = createStore(notesReducer, applyMiddleware(thunk));
