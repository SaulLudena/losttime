"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";

export default function RightPanel() {
  const [memory_name, setMemoryName] = useState("");
  const [memory_description, setMemoryDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [image_pd, setImagePd] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Estado para el ID generado
  const [generatedId, setGeneratedId] = useState(null);
  // Estado para el texto del botón de copiar
  const [copied, setCopied] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const uploadFile = async (file, folder) => {
    if (!file) return null;
    const ext = file.name.split(".").pop();
    const fileName = `${folder}/${crypto.randomUUID()}.${ext}`;

    const { error } = await supabase.storage
      .from("losttime")
      .upload(fileName, file, {
        contentType: file.type,
        upsert: false,
      });

    if (error) throw error;
    const { data } = supabase.storage.from("losttime").getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const imageUrl = await uploadFile(imageFile, "images");
      const audioUrl = await uploadFile(audioFile, "audios");

      const { data, error } = await supabase
        .from("memories")
        .insert({
          memory_name,
          memory_description,
          image_url: imageUrl,
          image_pd,
          audio_url: audioUrl,
        })
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        setGeneratedId(data[0].id);
      }
    } catch (err) {
      console.error("Error:", err.message);
      alert("Error saving memory: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Resetear texto después de 2s
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="grid h-full items-center max-w-[1600px] m-auto w-[80%] max-xl:w-[90%] max-xl:mt-10 max-xl:mb-40 ">
      {/* SI NO HAY ID, MUESTRA EL FORMULARIO */}
      {!generatedId ? (
        <form className="grid gap-7" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black"></div> Memory name:
            </span>
            <input
              type="text"
              required
              value={memory_name}
              maxLength={30}
              onChange={(e) => setMemoryName(e.target.value)}
              placeholder="the night the wain never stopped."
              className="outline-none ml-5 pl-3 py-1 border border-zinc-400 focus:border-zinc-600 w-80"
            />
          </div>

          <div className="grid gap-2">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black"></div> Little description:
            </span>
            <input
              type="text"
              required
              maxLength={200}
              value={memory_description}
              onChange={(e) => setMemoryDescription(e.target.value)}
              placeholder="we had nowhere to go, so we just stayed."
              className="outline-none ml-5 pl-3 py-1 border border-zinc-400 focus:border-zinc-600 w-80"
            />
          </div>

          <div className="grid gap-2">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black"></div> Img fragment:
            </span>
            <div className="relative flex items-center gap-5 ">
              <div className="group">
                <div className="group relative border border-zinc-400 ml-5 grid items-center justify-center w-80 h-40">
                  <p className="text-zinc-500">
                    select or drag and drop your image
                  </p>
                  <div className="absolute w-2 h-2 rounded-full bg-black -top-1 -left-1 z-20"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-black -bottom-1 -left-1 z-20"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-black -bottom-1 -right-1 z-20"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-black -top-1 -right-1 z-20"></div>
                </div>
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="border group-hover:opacity-15 absolute inset-0 Z-10 ml-5 w-80 h-40 object-cover z-10 [clip-path:polygon(0_0,100%_0,100%_100%,30px_100%,0_calc(100%_-_30px))]"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleImageChange}
                  className="inset-0 z-20 top-0 h-full absolute outline-none ml-5 pl-3 py-1 border w-80 opacity-0 cursor-pointer"
                />
              </div>
              <div>
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black"></div> Pd:
                </span>
                <input
                  type="text"
                  value={image_pd}
                  required
                  maxLength={100}
                  onChange={(e) => setImagePd(e.target.value)}
                  placeholder="note..."
                  className="outline-none ml-5 pl-3 py-1 border border-zinc-400 focus:border-zinc-600 w-40"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black"></div> Soundtrack this:
            </span>
            <input
              type="file"
              accept="audio/*"
              required
              onChange={(e) => setAudioFile(e.target.files[0])}
              className="outline-none ml-5 pl-3 py-1 border border-zinc-400 focus:border-zinc-600 w-80"
            />
          </div>

          <button
            className="cursor-pointer bg-zinc-900 text-[#FF3C00] py-5 px-4 mt-2 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,0_100%)] w-80"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save this for posterity"}
          </button>
        </form>
      ) : (
        /* SI HAY UN ID, MUESTRA ESTO Y OCULTA EL FORM */
        <div className="grid gap-6 animate-in fade-in duration-500">
          <div className=" relative w-96">
            <p className="text-3xl text-zinc-900    mb-4">Your lost code:</p>
            <div className="flex items-center my-3 gap-2">
              <div className=" w-3 h-3 bg-black -bottom-1.5 -right-1.5"></div>
              <h2 className="font-mono text-3xl font-bold text-black break-all ">
                {generatedId}
              </h2>
            </div>
            <button
              onClick={handleCopy}
              className="cursor-pinter w-full bg-zinc-900 text-white py-3 cursor-pointer"
            >
              {copied ? "¡Copied!" : "Copy to Clipboard"}
            </button>
          </div>

          <button
            onClick={() => setGeneratedId(null)}
            className=" text-zinc-500 text-xs underline cursor-pointer text-left hover:text-black"
          >
            Register another memory
          </button>
        </div>
      )}
    </div>
  );
}
