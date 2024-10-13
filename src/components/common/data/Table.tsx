import clsx from "clsx";
import { TableProps } from "@/types/TableProps";
const Table = <T extends object>({
  columns,
  data,
  className,
  type,
}: TableProps<T>) => {
  const formatValue = (value: any) => {
    if (value instanceof Date) {
      return value.toLocaleDateString(); // Format tanggal menjadi string
    }
    return value; // Return value as is if not a Date
  };

  return (
    <table className={`w-full text-sm text-left text-zinc-500 overflow-x-scroll  ${className}`}>
      <thead className="uppercase font-bold text-black">
        <tr>
          {columns?.map((column) => (
            <th scope="col" className="px-6 py-3 text-nowrap" key={column.key}>
              {column.label}
            </th>
          ))}
          {type === "edit" ? (
            <th scope="col" className="px-6 py-3 text-nowrap">
              AKSI
            </th>
          ) : (
            ""
          )}
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
            {columns?.map((column, index) => (
              <td className="px-6 py-4" key={index}>
                {formatValue(row[column.key as keyof T])}
              </td>
            ))}
            {type === "edit" ? (
              <td className="px-6 py-4 text-nowrap">BTN</td>
            ) : (
              ""
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
