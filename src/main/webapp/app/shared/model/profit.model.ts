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

export const defaultValue: Readonly<IProfit> = {
  todayrecommend: '0',
  todayprofit: '0',
  todaylastprofit: '0',
  monthprofit: '0',
  monthlastprofit: '0',
  totalprofit: '0',
  totalrecommend: '0'
};
