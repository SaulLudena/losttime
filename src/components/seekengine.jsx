import { useState } from "react";
import LostTimeCard from "./losttimecard";
import { supabase } from "../lib/supabase";
import LostTimeSkeleton from "../skeletons/losttimeskeleton";
export default function Seekengine() {
  const [id, setId] = useState("");
  const [memory, setMemory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMemory("");
    const { data, error } = await supabase
      .from("memories")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      setError("Sorry, your lostcode is wrong or i deleted it ... ");
    } else {
      setMemory(data);
      console.log(data);
    }
    setLoading(false);
  };
  return (
    <div className="w-full h-full grid items-center  ">
      <div className="grid  items-center max-w-[1600px] mx-auto w-[80%] max-xl:w-[90%] gap-5 max-xl:pb-32 max-xl:pt-10">
        <div className="grid gap-7  ">
          <form className="grid gap-2" onSubmit={handleSearch}>
            <span className="flex items-center gap-2 text-5xl">
              <div className="w-3 h-3 bg-black"></div> Time to look up
            </span>
            <span className="flex items-center gap-2">
              paste you lostcode in the field.
            </span>
            <div className="flex ">
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="outline-none border py-5 px-4 border-r-0 flex-grow max-w-sm"
                placeholder="ex: 1 "
              />

              <button
                type="submit"
                disabled={loading}
                className="flex bg-black text-white py-5 px-4 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,0_100%)] cursor-pointer"
              >
                {loading ? "Looking for..." : "Find out"}
              </button>
            </div>
          </form>
        </div>

        <div className="h-80">
          {error && (
            <div className="flex">
              <div className="flex flex-col  ">
                <p className="bg-red-500 py-1 px-3  text-black ">{error}</p>
                <div className="flex">
                  <p className="bg-red-500 py-1 px-3  text-black ">
                    I cant remember :(
                  </p>
                </div>
              </div>
            </div>
          )}

          {loading ? (
            <LostTimeSkeleton />
          ) : (
            memory && <LostTimeCard data={memory} key={memory.id} />
          )}
        </div>
      </div>
    </div>
  );
}
