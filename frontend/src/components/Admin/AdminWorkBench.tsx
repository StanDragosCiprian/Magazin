import { MouseMenu } from "./MouseMenu";
import { getClothes, getOneClothes } from "../../Server/clothesQuery";
import { getTv } from "../../Server/tvQuery";
import { ProductTable } from "./ProductTable";
import { useState, useEffect } from "react";
import { FormComponent } from "../FormComponent";
import { handleLog } from "../../Server/userQuery";
import { IUser } from "../../core/entity/IUser";
import { FormCard } from "../Card";
import { updateClothes } from "../../Server/clothesQuery";
import { IClothes } from "../../core/entity/IClothe";
export const AdminWorkBench = () => {
  const [update, setUpdate] = useState<string>("");
  const [productAll, setProductAll] = useState<any[]>([]);

  return (
    <MouseMenu>
      {update === "" ? (
        <ProductTable
          product={getClothes()}
          setProductAll={setProductAll}
          
          productKey={[
            "clothe_id",
            "name",
            "price",
            "currency",
            "desctiption",
            "size",
            "style",
            "color",
            "image",
            "update",
            "delete",
          ]}
          setUpdate={setUpdate}
          getProductName={getOneClothes}
          
        />
      ) : (
        <FormCard>
          <FormComponent
            userInputProps={
              [
                "name",
                "price",
                "currency",
                "desctiption",
                "size",
                "style",
                "color",
                "image",
              ] as Array<keyof IClothes>
            }
            buttonName={"Log In" as string}
            SendToServer={
              updateClothes as (update: IClothes,name:string) => Promise<void>
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
          productKey={[
            "tv_id",
            "name",
            "price",
            "currency",
            "desctiption",
            "diameter",
            "rezolution",
            "image",
            "update",
            "delete",
          ]}
          setUpdate={setUpdate}
          getProductName={getOneClothes}
        />
      ) : (
        <FormComponent
          userInputProps={["email", "password"] as Array<keyof IUser>}
          buttonName={"Log In" as string}
          SendToServer={handleLog as (userInput: IUser) => Promise<void>}
          productName={productAll}
          nameToUpdate={null}
        />
      )}
    </MouseMenu>
  );
};
