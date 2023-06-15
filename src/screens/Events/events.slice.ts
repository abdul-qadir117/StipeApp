import { createSlice } from '@reduxjs/toolkit';

export interface IState {
  group: string;
  step: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  image: {
    uri: string;
  };
  detail: {
    name: string;
    description: string;
    date: string;
    time: string;
    categories: string[];
    address: string;
  };
  ticketType: 'free' | 'paid';
  tickets: Array<any>;
  ticketPayload: {
    available_qty: number;
    discount_code: string;
    discount_rate: number;
    is_public: 1;
    event_id: number;
    id: number;
    private_code: string;
    release_date: string;
    ticket_name: string;
    ticket_price: number;
    total_qty: number;
  };
}

const initialState: IState = {
  group: '',
  step: 0,
  image: { uri: '' },
  detail: {
    name: '',
    description: '',
    date: '',
    time: '',
    categories: [],
    address: '',
  },
  tickets: [],
  ticketType: 'free',
  ticketPayload: {
    available_qty: 0,
    discount_code: '',
    discount_rate: 0,
    event_id: 0,
    is_public: 1,
    id: 0,
    private_code: '',
    release_date: '',
    ticket_name: '',
    ticket_price: 0,
    total_qty: 0,
  },
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setGroup: (state: IState, action) => {
      state.group = action.payload;
    },
    setStep: (state: IState, action) => {
      state.step = action.payload;
    },
    setImage: (state: IState, action) => {
      state.image = action.payload;
    },
    removeImage: (state: IState) => {
      state.image = { uri: '' };
    },
    setTicketType: (
      state: IState,
      action: {
        payload: 'free' | 'paid';
      },
    ) => {
      state.ticketType = action.payload;
      state.step = 5;
    },
    setTicketTypeOnly: (
      state: IState,
      action: {
        payload: 'free' | 'paid';
      },
    ) => {
      state.ticketType = action.payload;
    },
    setDetails: (state: IState, action) => {
      state.detail = action.payload;
    },
    addTicket: (state: IState, action) => {
      state.tickets = [...state.tickets, action.payload];
      state.step = 3;
    },
    setTickets: (state: IState, action) => {
      state.tickets = action.payload;
      state.step = 3;
    },
    resetState: (state: IState) => {
      state.detail = {
        name: '',
        description: '',
        date: '',
        time: '',
        categories: [],
        address: '',
      };
      state.group = '';
      state.step = 0;
      state.image = { uri: '' };
      state.ticketType = 'free';
      state.tickets = [];
      state.ticketPayload = {
        available_qty: 0,
        discount_code: '',
        discount_rate: 0,
        event_id: 0,
        is_public: 1,
        id: 0,
        private_code: '',
        release_date: '',
        ticket_name: '',
        ticket_price: 0,
        total_qty: 0,
      };
    },
    setTicketPayload: (state: IState, action) => {
      state.ticketPayload = action.payload;
      state.step = 5;
    },
    resetTicketPayload: (state: IState) => {
      state.ticketPayload = {
        available_qty: 0,
        discount_code: '',
        discount_rate: 0,
        event_id: 0,
        is_public: 1,
        id: 0,
        private_code: '',
        release_date: '',
        ticket_name: '',
        ticket_price: 0,
        total_qty: 0,
      };
      state.step = 3;
    },
    updateTicketById: (state: IState, action) => {
      const findIndex = state.tickets.findIndex(
        t => t?.id === action?.payload?.id,
      );

      state.tickets =
        findIndex !== -1
          ? [
              ...state.tickets.splice(0, findIndex + 1),
              action?.payload?.updatedTicket,
              ...state.tickets.splice(findIndex, state.tickets.length),
            ]
          : [...state.tickets];

      state.ticketPayload = {
        available_qty: 0,
        discount_code: '',
        discount_rate: 0,
        event_id: 0,
        is_public: 1,
        id: 0,
        private_code: '',
        release_date: '',
        ticket_name: '',
        ticket_price: 0,
        total_qty: 0,
      };
      state.step = 3;
    },
    setEvent: (state: IState, action) => {
      state.detail = action.payload?.details;
      state.group = action.payload?.group;
      state.step = 1;
      state.image = action.payload?.image;
    },
  },
});

export const {
  setGroup,
  setStep,
  setImage,
  setDetails,
  setTicketType,
  addTicket,
  resetState,
  setEvent,
  setTickets,
  setTicketPayload,
  resetTicketPayload,
  updateTicketById,
} = eventSlice.actions;
export const eventReducer = eventSlice.reducer;
