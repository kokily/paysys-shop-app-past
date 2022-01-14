import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import _concat from 'lodash/concat';
import {
  addBillAPI,
  listBillsAPI,
  readBillAPI,
  removeBillAPI,
  restoreBillAPI,
} from '../api/bills';

export interface BillsState {
  bills: BillType[];
  bill: BillType | null;
  hasMoreBills: boolean;
  addBillLoading: boolean;
  addBillError: string | null;
  listBillsLoading: boolean;
  listBillsError: string | null;
  readBillLoading: boolean;
  readBillError: string | null;
  removeBillLoading: boolean;
  removeBillError: string | null;
  restoreBillLoading: boolean;
  restoreBillError: string | null;
}

const initialState: BillsState = {
  bills: [],
  bill: null,
  hasMoreBills: true,
  addBillLoading: false,
  addBillError: null,
  listBillsLoading: false,
  listBillsError: null,
  readBillLoading: false,
  readBillError: null,
  removeBillLoading: false,
  removeBillError: null,
  restoreBillLoading: false,
  restoreBillError: null,
};

const billsSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    clearBills: (state) => {
      state.bills = [];
    },
    clearBill: (state) => {
      state.bill = null;
    },
  },
  extraReducers: {
    [addBillAPI.pending.type]: (state) => {
      state.addBillLoading = true;
      state.addBillError = null;
    },
    [addBillAPI.fulfilled.type]: (state) => {
      state.addBillLoading = false;
    },
    [addBillAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.addBillLoading = false;
      state.addBillError = action.payload;
    },
    [listBillsAPI.pending.type]: (state) => {
      state.listBillsLoading = true;
      state.listBillsError = null;
    },
    [listBillsAPI.fulfilled.type]: (
      state,
      action: PayloadAction<BillType[]>
    ) => {
      state.listBillsLoading = false;
      state.bills = _concat(state.bills, action.payload);
      state.hasMoreBills = action.payload.length === 20;
    },
    [listBillsAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.listBillsLoading = false;
      state.listBillsError = action.payload;
    },
    [readBillAPI.pending.type]: (state) => {
      state.readBillLoading = true;
      state.readBillError = null;
    },
    [readBillAPI.fulfilled.type]: (state, action: PayloadAction<BillType>) => {
      state.readBillLoading = false;
      state.bill = action.payload;
    },
    [readBillAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.readBillLoading = false;
      state.readBillError = action.payload;
    },
    [removeBillAPI.pending.type]: (state) => {
      state.removeBillLoading = true;
      state.removeBillError = null;
    },
    [removeBillAPI.fulfilled.type]: (state) => {
      state.removeBillLoading = false;
      state.bills = [];
      state.bill = null;
    },
    [removeBillAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.removeBillLoading = false;
      state.removeBillError = action.payload;
    },
    [restoreBillAPI.pending.type]: (state) => {
      state.restoreBillLoading = true;
      state.restoreBillError = null;
    },
    [restoreBillAPI.fulfilled.type]: (state) => {
      state.restoreBillLoading = false;
      state.bills = [];
      state.bill = null;
    },
    [restoreBillAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.restoreBillLoading = false;
      state.restoreBillError = action.payload;
    },
  },
});

export const { clearBills, clearBill } = billsSlice.actions;

export default billsSlice.reducer;
