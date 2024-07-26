import { useEffect, useState } from "react";
import { AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { getBreedNames } from "services/dogService.ts";

function BreedFilter() {
  const [breedNames, setBreedNames] = useState<string[]>([]);
  const [filteredBreedNames, setFilteredBreedNames] = useState<string[]>([]);

  useEffect(() => {
    getBreedNames().then(breedNames => {
      setBreedNames(breedNames);
      setFilteredBreedNames(breedNames);
    });
  }, []);

  const onSelect = (breed: string) => {
    console.log(`Selected breed: ${breed}`);
  };

  const handleSearch = (typedText: string) => {
    const filteredNames: string[] = breedNames.filter(breedName =>
      breedName.toLowerCase().includes(typedText.toLowerCase()),
    );
    setFilteredBreedNames(filteredNames);
  };

  return (
    <AutoComplete
      options={filteredBreedNames.map(breedName => ({ value: breedName }))}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input placeholder="Look up a good boy!" prefix={<SearchOutlined />} />
    </AutoComplete>
  );
}

export default BreedFilter;
