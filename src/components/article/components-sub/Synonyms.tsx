import { useGetSynonymsQuery } from "../../../api/apiSlice";
import { boxClasses } from "../classes/articleClasses";

interface SynonymsTypes {
  queryWord: string;
}

export const Synonyms = ({ queryWord }: SynonymsTypes) => {
  const { data, isError, isLoading, isSuccess } =
    useGetSynonymsQuery(queryWord);

  console.log("synonyms", data);

  const synonyms: string[] = [];
  data?.forEach((obj) => synonyms.push(obj.word));

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
      {isSuccess && synonyms && synonyms.length > 0 && (
        <div className={`synonyms ${boxClasses} bg-white`}>
          <p className="text-xl max-[768px]:text-base">{synonyms.join(", ")}</p>
        </div>
      )}
    </>
  );
};
