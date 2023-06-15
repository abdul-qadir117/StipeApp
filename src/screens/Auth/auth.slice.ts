import { createSlice } from '@reduxjs/toolkit';
import { setStorageData } from '../../lib/asyncStorage';
import { SignUpType, UserType } from '../../types/auth.types';
import { string } from 'yup';

type IState = {
  user: UserType;
  signup: SignUpType;
};
const initialState: IState = {
  user: {
    firstName: '',
    lastName: '',
    username: '',
    role: 'USER',
    email: '',
    photo: '',
    phone: '',
    birthDate: '',
    graduationDate: '',
    instituteName: '',
    isAlumni: 1,
    id: 1,
    token: '',
    prefPronoun: '',
    college: '',
    institute: '',
  },
  signup: {
    phone: '',
    personal: {
      firstName: '',
      surName: '',
      email: '',
      confirmEmail: '',
      dob: new Date(),
      prefPronoun: '',
    },
    info: {
      instagramLink: '',
      soundcloud: '',
      whatsApp: '',
      linkdin: '',
      spotify: '',
      profile: {
        uri: '',
      },
    },
    isStudent: true,
    password: '',
    isGoUnviersity: true,
    university: { name: '', id: 1 },
    college: { name: '', id: 1 },
    degree: { name: '', id: 1 },
    degreeType: { name: '', id: 1 },
    graduationDate: new Date(),
    interests: [],
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserWithToken: (state, action) => {
      setStorageData('token', action.payload?.token?.accessToken);
      state.user = action.payload?.user;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateSignUpPayload: (state, action) => {
      const updatedKey: string = action.payload.key;
      const updatedPayload = action.payload.data;
      if (updatedKey === 'phone') {
        state.signup.phone = updatedPayload;
      } else if (updatedKey === 'personal') {
        state.signup.personal = updatedPayload;
      } else if (updatedKey === 'isStudent') {
        state.signup.isStudent = updatedPayload;
      } else if (updatedKey === 'isGoUnviersity') {
        state.signup.isGoUnviersity = updatedPayload;
      } else if (updatedKey === 'password') {
        state.signup.password = updatedPayload;
      } else if (updatedKey === 'university') {
        state.signup.university = updatedPayload;
      } else if (updatedKey === 'college') {
        state.signup.college = updatedPayload;
      } else if (updatedKey === 'degree') {
        state.signup.degree = updatedPayload;
      } else if (updatedKey === 'degreeType') {
        state.signup.degreeType = updatedPayload;
      } else if (updatedKey === 'interests') {
        state.signup.interests = updatedPayload;
      } else if (updatedKey === 'info') {
        state.signup.info = updatedPayload;
      } else if (updatedKey === 'graduationDate') {
        state.signup.graduationDate = updatedPayload;
      }
    },
  },
});
// Not using Right Now
export const { setUser, setUserWithToken, updateSignUpPayload } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
