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
      productname?: string;
      description?: string;
      image?: string;
      type_id?: number;
      price?: number;
    };
  };
};
export const productReducer = (state = initValueState, action: MyAction) => {
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
