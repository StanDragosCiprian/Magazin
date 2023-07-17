import { useEffect, useState } from "react";
import { ITv } from "../entity/ITv";
import { getOneTv } from "../../Server/tvQuery";

export const useTakeTvById = ({
  path,
}: {
  path: string | undefined;
}): ITv | undefined => {
  const [tv, setTv] = useState<ITv | undefined>();
  useEffect(() => {
    if (path !== undefined) {
        getOneTv(path).then((data) => {
        setTv(data);
      });
    }
  }, []);
  return tv;
};
