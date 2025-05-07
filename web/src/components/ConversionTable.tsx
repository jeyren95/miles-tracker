import { DeleteOutlined as DeleteOutlinedIcon } from "@mui/icons-material";

import Select from "./common/Select";
import Input from "./common/Input";
import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./common/table";
import { IconButton } from "./common/button";

import {
  Card,
  ConversionTableHead,
  type ConversionTableProps,
} from "../types/home";
import { parseNumber } from "../utils";

const CARD_OPTIONS = [
  { value: "", text: "--Select a card--" },
  ...Object.values(Card).map((b) => ({ value: b, text: b })),
];
const MIN_POINTS = 0;

function ConversionTable({
  tableData,
  onCardSelectChange,
  onPointsInputChange,
  onDelete,
}: ConversionTableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {Object.values(ConversionTableHead).map((h) => (
            <TableCell key={h}>{h}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((r) => (
          <TableRow hover key={r.id}>
            <TableCell>
              <Select
                value={r.card}
                options={CARD_OPTIONS}
                onChange={(e) => onCardSelectChange(e, r)}
              />
            </TableCell>
            <TableCell>
              <Input
                onChange={(e) => onPointsInputChange(e, r)}
                value={r.points}
                type="number"
                name="points"
                id="points"
                min={MIN_POINTS}
              />
            </TableCell>
            <TableCell>{r.conversionRate}</TableCell>
            <TableCell>{parseNumber(r.miles)}</TableCell>
            <TableCell>
              {tableData.length > 1 && (
                <IconButton
                  size="small"
                  aria-label="delete"
                  onClick={() => onDelete(r)}
                >
                  <DeleteOutlinedIcon
                    fontSize="inherit"
                    className="icon--color-red"
                  />
                </IconButton>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ConversionTable;
