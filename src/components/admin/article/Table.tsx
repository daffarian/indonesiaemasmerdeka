import clsx from "clsx";
import { ShareStoriesTableProps } from "@/types/TableProps";

import DeleteButton from "./DeleteButton";
import Link from "next/link";

const Table = ({ data, className }: ShareStoriesTableProps) => {
  const formatValue = (value: any) => {
    if (value instanceof Date) {
      return value.toLocaleDateString(); // Format tanggal menjadi string
    }
    return value; // Return value as is if not a Date
  };

  return (
    <table
      className={`w-full text-sm text-left text-zinc-700 overflow-x-scroll  ${className}`}
    >
      <thead className="uppercase font-bold text-black">
        <tr>
          <th scope="col" className="px-6 py-3 text-nowrap">
            Judul
          </th>
          <th scope="col" className="px-6 py-3 text-nowrap">
            Kategori
          </th>
          <th scope="col" className="px-6 py-3 text-nowrap">
            Tanggal
          </th>
          <th scope="col" className="px-6 py-3 text-nowrap">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((row, rowIndex) => (
          <tr
            className={clsx("", {
              "bg-zinc-100": (rowIndex + 1) % 2 == 0,
            })}
            key={rowIndex}
          >
            <td className="px-6 py-4">{row.title}</td>
            <td className="px-6 py-4">{row.category}</td>
            <td className="px-6 py-4">{formatValue(row.created_at)}</td>
            <td className="px-6 !h-full text-nowrap">
              <div className="flex flex-row justify-start items-center gap-2">
                {/* Button Delete Start */}
                <DeleteButton slug={row.slug} image_url={row.image_url} />
                {/* Button Delete Stop */}

                <Link
                  href={`/dashboard/cerita-berbagi/${row.slug}/edit`}
                  className="bg-blue-50 w-16 hover:bg-blue-500 hover:text-white text-blue-500 rounded-lg px-2 py-1"
                >
                  Edit
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
