import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../actions";
import Counter from "./counter";
import Clock from "./clock";
import { useEffect } from "react";

function Page({ linkTo, NavigateTo, title }) {
  const placeholderData = useSelector((state) => state.placeholderData);
  const error = useSelector((state) => state.error);
  const light = useSelector((state) => state.light);
  const lastUpdate = useSelector((state) => state.lastUpdate);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(loadData());
  }, []);
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <img src={placeholderData} />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default Page;
