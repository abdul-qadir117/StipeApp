import { createApi } from '@reduxjs/toolkit/dist/query/react';
import {
  InstituesType,
  PhoneLoginType,
  SIGNUP,
  UserType,
  InterestsType,
  EmailLoginType,
} from '../../types/auth.types';
import { baseQuery } from '../baseQuery';

export const authApi = createApi({
  reducerPath: 'login/api',
  baseQuery,
  endpoints: build => ({
    login: build.mutation<UserType, PhoneLoginType>({
      query: ({ phone, otp }) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          phone,
          otp,
        },
      }),
    }),
    loginemail: build.mutation<UserType, EmailLoginType>({
      query: ({ email, password }) => ({
        url: '/auth/login-email',
        method: 'POST',
        body: {
          email,
          password,
          otp: 0,
        },
      }),
    }),
    signup: build.mutation<UserType, SIGNUP>({
      query: body => ({
        url: '/auth/register',
        method: 'POST',
        body: body,
        headers: { accept: 'application/json' },
      }),
    }),
    otpVerification: build.mutation({
      query: body => ({
        url: '/otp-verification',
        method: 'POST',
        body: body,
      }),
    }),
    verifyOtp: build.mutation({
      query: ({ phone, otp }) => ({
        url: '/otp-verification/verify-otp',
        method: 'POST',
        body: {
          phone: `${phone}`,
          otp: otp,
        },
      }),
    }),
    getUniversities: build.query<InstituesType, string>({
      query: () => ({
        url: '/institutes',
        method: 'GET',
      }),
    }),
    getColleges: build.query<any, string>({
      query: () => ({
        url: '/colleges',
        method: 'GET',
      }),
    }),
    getdegree: build.query<any, string>({
      query: () => ({
        url: '/degree',
        method: 'GET',
      }),
    }),
    getPronouns: build.query<string, string>({
      query: () => ({
        url: '/public/get-pronouns',
        method: 'GET',
      }),
    }),
    getIntrests: build.query<InterestsType, string>({
      query: () => ({
        url: '/interests',
        method: 'GET',
      }),
    }),
    getCategories: build.query<InterestsType, string>({
      query: () => ({
        url: '/categories',
        method: 'GET',
      }),
    }),
    resetPassword: build.mutation({
      query: body => ({
        url: '/auth/reset-password',
        method: 'PUT',
        body: body,
      }),
    }),
    getTerms: build.query({
      query: () => ({
        url: '/public/get-terms',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useOtpVerificationMutation,
  useVerifyOtpMutation,
  useSignupMutation,
  useGetUniversitiesQuery,
  useGetIntrestsQuery,
  useGetCategoriesQuery,
  useResetPasswordMutation,
  useGetPronounsQuery,
  useLoginemailMutation,
  useGetCollegesQuery,
  useGetdegreeQuery,
  useGetTermsQuery,
} = authApi;
