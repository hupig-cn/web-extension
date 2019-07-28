export interface IProfit {
  id?: number;
  todayrecommend?: string;
  todayprofit?: string;
  todaylastprofit?: string;
  monthprofit?: string;
  monthlastprofit?: string;
  totalprofit?: string;
  totalrecommend?: string;
}

export const defaultValue: Readonly<IProfit> = {};
