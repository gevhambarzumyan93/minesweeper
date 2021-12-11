import React, { useReducer, useEffect } from 'react';
import { Auth } from 'aws-amplify';
// import { getUser } from '../api/domain/UserClient';

export const AppStateContext = React.createContext();
export const AppDispatchContext = React.createContext();

export const UserProvider = (props) => {
  const initialState = {
    userIndex: Date.now(),
    // loading: false,
    // cardProvided: true,
    // card: {},
    profile: {},
    uploadCoverImage: false,
    // cardFetched: false,
    alertObject: {},
    // cardHolder: "",
    // cardholderMissing: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      // case "LOADING": {
      //   return { ...state, loading: true };
      // }
      // case "NOT_LOADING": {
      //   return { ...state, loading: false };
      // }
      case 'RE_FETCH_USER': {
        return { ...state, userIndex: Date.now() };
      }
      case 'CLOSE_ALERT': {
        return { ...state, alertObject: {} };
      }
      case 'OPEN_ALERT': {
        return {
          ...state,
          alertObject: {
            message: action.payload.message,
            severity: action.payload.severity,
          },
        };
      }
      case 'SET_PROFILE': {
        return {
          ...state,
          profile: action.payload,
        };
      }
      // case "ADD_PROPERTIES": {
      //   return {
      //     ...state,
      //     properties: action.payload.properties,
      //   };
      // }

      // case "SET_CARD": {
      //   return {
      //     ...state,
      //     cardProvided: action.payload ? true : false,
      //     card: action.payload || null,
      //     cardFetched: true,
      //   };
      // }
      // case "SIGN_OUT": {
      //   return {
      //     loading: false,
      //     cardProvided: true,
      //     card: {},
      //     profile: null,
      //     cardFetched: false,
      //     alertObject: {},
      //     cardHolder: "",
      //     cardholderMissing: false,
      //   };
      // }
      // case "CHANGE_PROFILE_PICTURE": {
      //   const updatedProfile = { ...state.profile };
      //   updatedProfile.photoPreSignedUrl = action.payload;
      //   return {
      //     ...state,
      //     profile: updatedProfile,
      //   };
      // }
      case 'UPLOAD_COVER_IMAGE': {
        return {
          ...state,
          uploadCoverImage: action.payload,
        };
      }
      case 'DELETE_COVER_IMAGE': {
        return {
          ...state,
          uploadCoverImage: action.payload,
        };
      }
      // case "SET_CARDHOLDER": {
      //   return {
      //     ...state,
      //     cardholder: action.payload,
      //   };
      // }
      // case "CARDHOLDER_MISSING": {
      //   return {
      //     ...state,
      //     cardholderMissing: action.payload,
      //   };
      // }
      case 'LOG_OUT': {
        return { ...initialState };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('mtav');
    Auth.currentAuthenticatedUser().then((user) => {
      console.log(user, '< user');
      //   getUser().then((userData) => {
      //     dispatch({
      //       type: 'SET_PROFILE',
      //       payload: { ...user, userData },
      //     });
      //   });
    });
  }, [state.userIndex]);

  const { children } = props;

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
};

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}
function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a UserProvider');
  }
  return context;
}

export { useAppState, useAppDispatch };
