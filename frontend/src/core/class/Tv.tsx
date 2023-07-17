import { useEffect, useState } from "react";
import { ITv } from "../entity/ITv";
import { getTv } from "../../Server/tvQuery";

export const Tv = () => {
  const [tv, setTv] = useState<ITv[]>();
  useEffect(() => {
    getTv().then((data) => setTv(data));
  }, []);
  return tv;
};
