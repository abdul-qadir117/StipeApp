export type UserType = {
  firstName: string;
  lastName: string;
  username: string;
  role: 'USER';
  email: string;
  photo: string;
  phone: string;
  birthDate: string;
  graduationDate: string;
  instituteName: string;
  isAlumni: 0 | 1;
  id: string | number;
  token: any;
  prefPronoun: '';
  college: any;
  institute: any;
};

export type SIGNUP = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  prefPronoun: string;
  birthDate: string;
  interests: any;
  graduationDate?: string;
  instituteId?: number;
  collegeId?: number;
  degreeId?: number;
  isAlumni?: boolean;
  isStudent?: boolean;
  privacySettings?: string;
};

export type PhoneLoginType = {
  phone: string;
  otp?: number;
};

export type EmailLoginType = {
  email: string;
  password: string;
};

export type SignUpType = {
  phone: string;
  password: string;
  personal: PersonaDetailsType;
  isStudent: boolean;
  isGoUnviersity: boolean;
  university: { name: string; id: number };
  college?: { name: string; id: number };
  degree?: { name: string; id: number };
  degreeType?: { name: string; id: number };
  graduationDate?: Date;
  interests?: [];
  info: {
    instagramLink: string;
    soundcloud: string;
    whatsApp: string;
    linkdin: string;
    spotify: string;
    profile: {
      uri: string;
    };
  };
};

export type PersonaDetailsType = {
  firstName: string;
  surName: string;
  email: string;
  confirmEmail: string;
  dob: Date;
  prefPronoun: string;
};

export type PersonaInfoType = {
  instagramLink: string;
  soundcloud: string;
  whatsApp: string;
  linkdin: string;
  spotify: string;
  profile: {
    uri: string;
  };
};

export type InstituesType = {
  id: number | string;
  name: string;
  isActive: number;
};

export type InterestsType = {
  id: number | string;
  key: string;
  icon: string;
  isActive: number;
};
