import { MouseMenu } from "./MouseMenu";
import { getClothes, getOneClothes, handleNewClothes } from "../../Server/clothesQuery";
import { getOneTv, getTv, handleNewTv, updateTv } from "../../Server/tvQuery";
import { ProductTable } from "./ProductTable";
import { useState, useEffect } from "react";
import { FormComponent } from "../FormComponent";
import { handleLog } from "../../Server/userQuery";
import { IUser } from "../../core/entity/IUser";
import { FormCard } from "../Card";
import { updateClothes } from "../../Server/clothesQuery";
import { IClothes } from "../../core/entity/IClothe";
import { ITv } from "../../core/entity/ITv";
import {
  clothesProductKey,
  clothesUserInputProps,
  tvProductKey,
  tvUserInputProps,
} from "./productKeys";
export const AdminWorkBench = () => {
  const [update, setUpdate] = useState<string>("");
  const [productAll, setProductAll] = useState<any[]>([]);

  return (
    <MouseMenu>
      {update === "" ? (
        <ProductTable
          product={getClothes()}
          setProductAll={setProductAll}
          productKey={clothesProductKey}
          setUpdate={setUpdate}
          getProductName={getOneClothes}
        />
      ) : (
        <FormCard>
          <FormComponent
            userInputProps={clothesUserInputProps as Array<keyof IClothes>}
            buttonName={"Update" as string}
            SendToServer={
              updateClothes as (update: IClothes, name: string) => Promise<void>
            }
            nameToUpdate={update}
            productName={productAll}
          />
        </FormCard>
      )}
      {update === "" ? (
        <ProductTable
          product={getTv()}
          setProductAll={setProductAll}
          productKey={tvProductKey}
          setUpdate={setUpdate}
          getProductName={getOneTv}
        />
      ) : (
        <FormCard>
          <FormComponent
            userInputProps={tvUserInputProps as Array<keyof ITv>}
            buttonName={"Update" as string}
            SendToServer={
              updateTv as (update: ITv, name: string) => Promise<void>
            }
            productName={productAll}
            nameToUpdate={update}
          />
        </FormCard>
      )}
      <FormCard>
        <FormComponent
          userInputProps={clothesUserInputProps as Array<keyof IClothes>}
          buttonName={"Insert" as string}
          SendToServer={
            handleNewClothes as (update: IClothes) => Promise<void>
          }
          nameToUpdate={update}
          productName={productAll}
        />
      </FormCard>
      <FormCard>
        <FormComponent
          userInputProps={tvUserInputProps as Array<keyof ITv>}
          buttonName={"Insert" as string}
          SendToServer={
            handleNewTv as (update: ITv) => Promise<void>
          }
          productName={productAll}
          nameToUpdate={update}
        />
      </FormCard>
    </MouseMenu>
  );
};
