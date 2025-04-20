import { useState } from "react";
import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
	DialogContent as MuiDialogContent,
} from "@mui/material";

import ClassProgressPaper from "./ClassProgressPaper";

import {
  type ProgressDialogProps,
  type GetMilesRes,
  TripType,
} from "../types/goals";
import { useFetchData } from "../hooks/useFetchData";

const DUMMY_DATA = [
    {
        "tripType": "One-way",
        "description": "Economy Saver Award Ticket",
        "miles": 27000,
        "classType": "Economy"
    },
    {
        "tripType": "One-way",
        "description": "Economy Advantage Award Ticket",
        "miles": 45000,
        "classType": "Economy"
    },
    {
        "tripType": "One-way",
        "description": "Premium Economy Saver Award Ticket",
        "miles": 37500,
        "classType": "Premium Economy"
    },
    {
        "tripType": "One-way",
        "description": "Business Saver Award Ticket",
        "miles": 52000,
        "classType": "Business"
    },
    {
        "tripType": "One-way",
        "description": "Business Advantage Award Ticket",
        "miles": 70000,
        "classType": "Business"
    },
    {
        "tripType": "One-way",
        "description": "First Saver Award Ticket",
        "miles": 77000,
        "classType": "First"
    },
    {
        "tripType": "One-way",
        "description": "First Advantage Award Ticket",
        "miles": 120000,
        "classType": "First"
    },
    {
        "tripType": "Return",
        "description": "Economy Saver Award Ticket",
        "miles": 54000,
        "classType": "Economy"
    },
    {
        "tripType": "Return",
        "description": "Economy Advantage Award Ticket",
        "miles": 90000,
        "classType": "Economy"
    },
    {
        "tripType": "Return",
        "description": "Premium Economy Saver Award Ticket",
        "miles": 75000,
        "classType": "Premium Economy"
    },
    {
        "tripType": "Return",
        "description": "Business Saver Award Ticket",
        "miles": 104000,
        "classType": "Business"
    },
    {
        "tripType": "Return",
        "description": "Business Advantage Award Ticket",
        "miles": 140000,
        "classType": "Business"
    },
    {
        "tripType": "Return",
        "description": "First Saver Award Ticket",
        "miles": 154000,
        "classType": "First"
    },
    {
        "tripType": "Return",
        "description": "First Advantage Award Ticket",
        "miles": 240000,
        "classType": "First"
    }
];

function ProgressDialog({
  onClose,
  open,
  selectedRow,
}: ProgressDialogProps) {
	const [selectedTripType, setSelectedTripType] = useState(TripType.RETURN);
  // const { origin, destination } = selectedRow ?? {};
  // const endPoint = `${import.meta.env.VITE_API_ENDPOINT}/miles?origin=${origin}&destination=${destination}`;
  // const { isLoading, error, data } = useFetchData<GetMilesRes>(endPoint);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;
	
	const filteredData = DUMMY_DATA.filter((d) => d.tripType === selectedTripType);

  return (
    <MuiDialog
			fullWidth
			maxWidth="xl"
      className="goals-page__progress-dialog"
      open={open}
      onClose={onClose}
    >
      <MuiDialogTitle>Check out your progression here!</MuiDialogTitle>
      <MuiDialogContent className="goals-page__progress-dialog-content">
				{filteredData.map((d) => <ClassProgressPaper {...d} />)}
      </MuiDialogContent>
    </MuiDialog>
  );
}

export default ProgressDialog;
