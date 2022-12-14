"use client";

import Link from "next/link";
import { state } from "state";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { SFXContext } from "@context/sfx.context";
import { Program } from "@ui/program";

export default function ProjectLink({ doc }: any) {
  const { confirm } = useContext(SFXContext);
  useEffect(() => {
    state.loading = false;
  }, []);

  return (
    <>
      <Link
        onClick={() => confirm()}
        href={doc.lot}
        className="fade-transition my-2 flex h-[160px] w-full flex-row justify-between overflow-hidden rounded-xl border-[1px] border-transparent bg-opacity-50 p-2 active:border-blue-900 active:dark:border-blue-200 md:hover:bg-blue-900 md:hover:bg-opacity-50 md:hover:text-white md:hover:shadow-lg md:hover:dark:bg-blue-200 md:hover:dark:bg-opacity-50 md:hover:dark:text-black"
      >
        <div className="flex h-full w-max flex-col justify-start gap-y-8">
          <div className="flex flex-col items-start">
            <h3 className="white-space-pre w-max text-xl font-thin">
              {doc.name}
            </h3>
            <p className="text-xs uppercase">{doc.category}</p>
          </div>
          <Program program={doc.program} setProgram={undefined} />
        </div>
        <div className="relative aspect-square h-full w-[160px] overflow-hidden rounded-xl shadow-lg">
          <Image
            priority
            src={doc.cover}
            fill
            alt={doc.name}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
    </>
  );
}
