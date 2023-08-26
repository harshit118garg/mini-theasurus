import { useGetAntonymnQuery } from "../../../api/apiSlice";
import { boxClasses } from "../classes/articleClasses";

interface AntonymsTypes {
  queryWord: string;
}

export const Antonymns = ({ queryWord }: AntonymsTypes) => {
  const { data, isError, isLoading, isSuccess } =
    useGetAntonymnQuery(queryWord);

  console.log("antonyms", data);

  const antonyms: string[] = [];
  data?.forEach((obj) => antonyms.push(obj.word));

  return (
    <>
      {isError && (
        <div className={`${boxClasses} bg-red-500 text-zinc-50`}>
          <p className="text-xl max-[768px]:text-base">An Error Occurred</p>
        </div>
      )}
      {isLoading && (
        <div className={`${boxClasses} bg-amber-600 text-slate-950`}>
          <p className="text-xl max-[768px]:text-base">Loading.....</p>
        </div>
      )}
      {isSuccess && antonyms && antonyms.length > 0 && (
        <div className={`antonyms ${boxClasses} bg-slate-700 text-slate-50`}>
          <p className="text-xl max-[768px]:text-base">
            {antonyms.join(", ")}
          </p>
        </div>
      )}
    </>
  );
};
