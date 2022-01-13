interface MeType {
  user_id: string;
  username: string;
  admin: boolean;
}

type RootStackParamList = {
  Login: undefined;
  SoldierHome: undefined;
  ReserveHome: undefined;
  GeneralHome: undefined;
  Cart: undefined;
  Fronts: undefined;
  FrontList: undefined;
  FrontRead: {
    id: string;
  };
  SoldierList: {
    native: string;
    divide: string;
  };
  ReserveList: {
    native: string;
    divide: string;
  };
  GeneralList: {
    native: string;
    divide: string;
  };
  Detail: {
    id: string;
  };
  Password: undefined;
};

interface ItemType {
  id: string;
  num: number;
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: number;
  count: number;
  amount: number;
}

interface BillType {
  id: string;
  title: string;
  hall: string;
  etc: string;
  total_amount: number;
  items: ItemType[];
  reserve?: number;
  username: string;
  user_id: string;
  cart_id: string;
  created_at: string;
}

interface CartType {
  id: string;
  user_id: string;
  completed: boolean;
  deleted: boolean;
  bill_id: string;
  items: ItemType[] | null;
}
