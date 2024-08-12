import { useTransactionStore } from "@/stores/transactions.store";
import { SalesType } from "@/types/filters";
import { useState } from "react";

const useDateFilter = () => {
  const setSalesTypeFilter = useTransactionStore(
    (state) => state.setSalesTypeFilter
  );

  const salesTypeFilter = useTransactionStore((state) => state.salesTypeFilter);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [checked, setChecked] = useState<SalesType>(salesTypeFilter);

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setChecked(value as SalesType);
  };

  const handleApply = () => {
    setSalesTypeFilter(checked);
    setDropdownOpen(false);
  };

  return {
    dropdownOpen,
    handleChangeCheckbox,
    handleApply,
    setDropdownOpen,
    checked,
  };
};

export default useDateFilter;
