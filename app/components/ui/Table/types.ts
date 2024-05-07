export interface TableColumn {
    key: string;
    header: string;
  }
  
export interface TableProps {
    data: any[];
    columns: TableColumn[];
  }