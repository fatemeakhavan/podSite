"use client";
import { useEffect, useState } from "react";
import IUser from "@/app/type";
import Link from "next/link";


interface props {
  data: IUser[];
}

const fetcher = (url: any) => fetch(url).then((r) => r.json());
const ShowMore = ({ data }: props) => {
  const [userList, setUserList] = useState<IUser[]>(data);
  const [offset, setOffset] = useState<number>(0);


  const handelClick = () => {
    setOffset(offset + 10);
  };

  useEffect(() => {
    if (offset !== 0) getData();
  }, [offset]);

  const getData = async () => {
    const res = await fetch(
      `http://localhost:3000/api/data?top=10&offset=${offset}`
    );
    const data = await res.json();
    setUserList([...userList, ...data]);
  };

  return (
    <>
      <div className=" container mx-auto mt-8 min-w-fit max-w-6xl flex flex-row  flex-wrap mb-5">
        {userList.map((item: IUser) => {
          return (
            <>
              <section className="w-80 ml-3 my-3">
                <article className="max-w-sm bg-white border border-gray-200 rounded-lg shoadow-lg flex ">
                  <img
                    src={item.avatar_url}
                    alt="avatar img"
                    className="w-28 rounded-lg"
                  />
                  <div className="mt-3 mx-3 overflow-hidden">
                    <span className="text-sky-700">name:</span>
                    <span className="text-sm text-sky-400">{item.login}</span>
                    <p></p>
                    <span className="text-sky-700">github:</span>
                    <span className="text-sm text-sky-400 overflow-hidden ">
                      {item.html_url}
                    </span>
                    <div className="border border-sky-500 bg-sky-600 text-white shadow-lg p-1 rounded-lg text-sm mt-2 w-1/2 text-center">
                      <Link href={`http://localhost:3000/user/${item.login}`}>
                        Click Me
                      </Link>
                    </div>
                  </div>
                </article>
              </section>
            </>
          );
        })}
      </div>
      <div className="text-center">
        <button
          className="btn bg-red-400 p-3 rounded-full border-solid"
          onClick={handelClick}
        >
          LoadMore
        </button>
      </div>
    </>
  );
};
export default ShowMore;
