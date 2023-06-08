"use client";

import { ColumnDef } from "@tanstack/react-table";
import { stateType } from "../cart/cartSlice";

export const columns: ColumnDef<stateType>[] = [
  {
    accessorKey: "name",
    header: "Sneaker name",
  },
  {
    accessorKey: "price",
    header: "Unit Price",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "color",
    header: "Color",
  },
];
