import { clothesUserInputProps, tvUserInputProps } from "../Admin/productKeys";
interface OptionValueProps {
  tv?: any[];
  clothes?: any[];
}
export const optionValue = ({ tv, clothes }: OptionValueProps) => {
  const option: any[] = [];

  const clothesOnly = clothesUserInputProps.filter(
    (prop) => !tvUserInputProps.includes(prop)
  );
  const tvOnly = tvUserInputProps.filter(
    (prop) => !clothesUserInputProps.includes(prop)
  );
  option.push({ label: "Clothes", value: "All Clothes" });
  const test = clothes?.map((t: any) =>
    clothesOnly.map((tuip: any) => {
      if (tuip === "size") {
        const arr = t[tuip].split(",");
        arr.map((vector: any) => option.push({ label: tuip, value: vector }));
      } else {
        option.push({ label: tuip, value: t[tuip] });
      }
    })
  );
  option.push({ label: "Tv", value: "All Tv" });
  const test2 = tv?.map((t: any) =>
    tvOnly.map((tuip: any) => option.push({ label: tuip, value: t[tuip] }))
  );
  return option;
};
