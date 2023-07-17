import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { optionValue } from "./Product Card/optionValue";

interface IGroup {
  tv?: any[];
  clothes?: any[];
  setCategory:any;
}

export const GroupedSelect: React.FC<IGroup> = ({ tv, clothes,setCategory}) => {
  const options = optionValue({ tv, clothes });

  const groupedOptions = options.reduce((groups, option) => {
    const group = groups.find((group:any) => group.label === option.label);
    const isDuplicate = group?.options.some((existingOption:any) => existingOption.value === option.value);
    if (group && !isDuplicate) {
      group.options.push(option);
    } else if (!isDuplicate) {
      groups.push({ label: option.label, options: [option] });
    }
    return groups;
  }, []);
  const handleCategoryChange = (event:any) => {
    const selectedValue = event.target.value as string;
    setCategory(selectedValue);
    
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Filter</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Filter"
        onChange={(e)=>handleCategoryChange(e)}
        >
          <option aria-label="None" value="" />
          {groupedOptions.map((group:any, groupIndex:any) => (
            <optgroup label={group.label} key={groupIndex}>
              {group.options.map((option:any, optionIndex:any) => (
                <option value={option.value} key={optionIndex}>
                  {option.value}
                </option>
              ))}
            </optgroup>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
