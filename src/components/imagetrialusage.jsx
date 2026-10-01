import ImageTrail from "../utils/imageTrail";
export default function Imagetrialusage() {
  return (
    <div className="w-full h-full absolute overflow-hidden">
      <ImageTrail
        items={[
          "https://picsum.photos/id/287/100/100",
          "https://picsum.photos/id/1001/100/100",
          "https://picsum.photos/id/1025/100/100",
          "https://picsum.photos/id/1026/100/100",
          "https://picsum.photos/id/1027/100/100",
          "https://picsum.photos/id/1028/100/100",
          "https://picsum.photos/id/1029/100/100",
          "https://picsum.photos/id/1030/100/100",
        ]}
        variant="4"
      />
    </div>
  );
}
