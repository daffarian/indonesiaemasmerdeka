import clsx from "clsx";
import { PrivasiPolicyTableProps } from "@/types/TableProps";
import DeleteButtonPrivacyPolicy from "./DeleteButtonPrivacyPolicy";
import Link from "next/link";

// max words
import { setMaxWords } from "@/lib/utils";

const TablePrivacyPolicy = ({ data, className }: PrivasiPolicyTableProps) => {
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
            Isi
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
        {data && data.length > 0 ? (
          data?.map((row, rowIndex) => (
            <tr
              className={clsx("", {
                "bg-zinc-100": (rowIndex + 1) % 2 == 0,
              })}
              key={rowIndex}
            >
              <td className="px-6 py-4">
                {setMaxWords(row.title, 10)}
              </td>
              <td
                className="px-6 py-4 min-w-32 prose prose-p:text-sm"
                dangerouslySetInnerHTML={{
                  __html: setMaxWords(row.content, 10),
                }}
              ></td>
              <td className="px-6 py-4">{formatValue(row.created_at)}</td>
              <td className="px-6 !h-full text-nowrap">
                <div className="flex flex-row justify-start items-center gap-2">
                  {/* Button Delete Start */}
                  <DeleteButtonPrivacyPolicy id={row.id} />
                  {/* Button Delete Stop */}

                  <Link
                    href={`/dashboard/kebijakan-privasi/${row.id}/edit`}
                    className="bg-blue-50 w-16 hover:bg-blue-500 hover:text-white text-blue-500 rounded-lg px-2 py-1"
                  >
                    Edit
                  </Link>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>
              <div className="text-center py-4">Data tidak ditemukan</div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TablePrivacyPolicy;
