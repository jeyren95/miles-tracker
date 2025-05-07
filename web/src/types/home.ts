import { type ChangeEvent } from "react";

export enum Card {
  CITIBANK_PREMIERMILES = "Citibank PremierMiles",
  CITIBANK = "Citibank",
  DBS = "DBS",
  HSBC = "HSBC",
  OCBC = "OCBC",
  OCBC_VOYAGE = "OCBC VOYAGE",
  OCBC_90N = "OCBC 90°N",
  UOB = "UOB",
}

export type ConversionTableRowData = {
  id: number;
  card: Card | "";
  points: number | "";
  conversionRate: number;
  miles: number;
};

export enum ConversionTableActionType {
  INSERT,
  DELETE,
  UPDATE,
  RESET,
}

export type ConversionTableProps = {
  onCardSelectChange: (
    e: ChangeEvent<HTMLSelectElement>,
    row: ConversionTableRowData,
  ) => void;
  onPointsInputChange: (
    e: ChangeEvent<HTMLInputElement>,
    row: ConversionTableRowData,
  ) => void;
  tableData: ConversionTableRowData[];
  onDelete: (row: ConversionTableRowData) => void;
};

export enum ConversionTableHead {
  CARD = "Card",
  POINTS = "Points",
  CONVERSION_RATE = "Conversion rate",
  MILES = "Miles",
  DELETE_ICON = "",
}
