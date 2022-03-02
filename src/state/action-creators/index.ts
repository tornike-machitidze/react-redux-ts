import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export const searchPackages =
  (term: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_PACKAGES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((res: any) => res.package.name);

      dispatch({
        type: ActionTypes.SEARCH_PACKAGES_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SEARCH_PACKAGES_ERROR,
        payload: error.message,
      });
    }
  };
