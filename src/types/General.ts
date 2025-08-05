export type LoadingType = {
  loading: boolean;
  children: any;
};

export interface Pagamento {
  dataVencimento: string;
  dataPagamento: string;
  valor: string;
  pago: string;
}

export interface Cota {
  id: string;
  numero: string;
  status: 'disponivel' | 'reservada' | 'paga';
  valor: number;
  dataVencimento: string;
}

export interface User {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
}

export interface DashboardStats {
  parcelasPagas: number;
  totalParcelas: number;
  valorPago: number;
  valorTotal: number;
  percentualPago: number;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  active: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

export interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
  sortable?: boolean;
}

export interface FilterOption {
  label: string;
  value: string | number;
}

export interface DateRange {
  startDate: string;
  endDate: string;
}
