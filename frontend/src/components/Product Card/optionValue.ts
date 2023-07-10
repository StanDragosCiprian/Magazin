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
  clothes?.map((product: any) =>
    clothesOnly.map((optionClothes: any) => {
      if (optionClothes === "size") {
        const arr = product[optionClothes].split(",");
        arr.map((vector: any) => option.push({ label: optionClothes, value: vector }));
      } else {
        option.push({ label: optionClothes, value: product[optionClothes] });
      }
    })
  );
  option.push({ label: "Tv", value: "All Tv" });
  tv?.map((product: any) =>
    tvOnly.map((optionTv: any) => option.push({ label: optionTv, value: product[optionTv] }))
  );
  return option;
};
