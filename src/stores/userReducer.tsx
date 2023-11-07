import { type } from "os";

const initValueState = {
  isOpen: false,
  initValue: {},
};
type MyAction = {
  type: "create" | "update" | "close";
  payload: {
    isOpen: boolean;
    initValue: {
      id?: number;
      username?: string;
      password?: string;
      role?: string;
      email?: string;
    };
  };
};
export const userReducer = (state = initValueState, action: MyAction) => {
  switch (action.type) {
    case "create":
    case "update":
      return {
        isOpen: action.payload.isOpen,
        initValue: action.payload.initValue,
      };
    case "close":
      return {
        ...initValueState,
      };
    default: {
      return state;
    }
  }
};
