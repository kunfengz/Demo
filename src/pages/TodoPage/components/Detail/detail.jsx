import { useSearchParams } from "react-router-dom";

export default function Modal(props) {
  const [searchParams] = useSearchParams();
    const id=searchParams.get("id")
    const name=searchParams.get("name")
    const stocked=searchParams.get("stocked")
//   console.log(
//     "searchParams",
//     searchParams.get("id"),
//     typeof searchParams.get("id")
//   );
console.log(id,name,stocked);

  return (
    <>
      <div>
        id:{id} name:{name} stocked:{stocked}
      </div>
    </>
  );
}
