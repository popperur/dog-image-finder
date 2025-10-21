import { useEffect, useRef, useState } from "react";
import { AutoComplete } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { getBreedNames } from "services/dogService.ts";
import { BaseSelectRef } from "rc-select";
import { ResetButton } from "components/BreedFilter/styles.tsx";
import { isMobileDevice } from "utils/mobile.ts";

interface BreedFilterProps {
  selectedBreedName: string;
  onBreedNameSelect: (breedName: string) => void;
}

function BreedFilter({
  selectedBreedName,
  onBreedNameSelect,
}: BreedFilterProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [breedNames, setBreedNames] = useState<string[]>([]);
  const [filteredBreedNames, setFilteredBreedNames] = useState<string[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const autoCompleteRef = useRef<BaseSelectRef>(null);

  useEffect(() => {
    getBreedNames()
      .then(breedNames => {
        setBreedNames(breedNames);
        setFilteredBreedNames(breedNames);
      })
      .catch(error => {
        console.error(`Error in BreedFilter: ${error}`);
      });
  }, []);

  const handleSearch = (typedText: string) => {
    const blank = typedText === "";
    setDropdownVisible(!blank);
    if (!blank) {
      const filteredNames: string[] = breedNames.filter(breedName =>
        breedName.toLowerCase().includes(typedText.toLowerCase()),
      );
      setFilteredBreedNames(filteredNames);
    }
  };

  const handleSelect = (breedName: string) => {
    onBreedNameSelect(breedName);
    setDropdownVisible(false);
    if (isMobileDevice()) {
      autoCompleteRef.current?.blur();
    }
  };

  const onChange = (data: string) => {
    setInputValue(data);
  };

  const resetSelection = () => {
    setInputValue("");
    handleSelect("");
    autoCompleteRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (
      (e.key === "ArrowDown" || e.key === "Enter") &&
      inputValue === "" &&
      !dropdownVisible
    ) {
      setFilteredBreedNames(breedNames);
      setDropdownVisible(true);
    }
  };

  return (
    <>
      <AutoComplete
        aria-label="breed name autocomplete"
        ref={autoCompleteRef}
        value={inputValue}
        options={filteredBreedNames.map(breedName => ({ value: breedName }))}
        style={{ width: 260 }}
        onSelect={handleSelect}
        onSearch={handleSearch}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        open={dropdownVisible}
        placeholder="Look up a good boy by breed name!"
      />

      {selectedBreedName && (
        <ResetButton
          aria-label="reset selection"
          color="default"
          shape="default"
          icon={<CloseOutlined />}
          onClick={resetSelection}
        />
      )}
    </>
  );
}

export default BreedFilter;
