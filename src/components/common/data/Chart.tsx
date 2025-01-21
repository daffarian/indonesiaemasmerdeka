"use client";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

export default function ChartJs({
  className,
  data,
}: {
  className?: string;
  data: { month: string; count: number }[];
}) {
  const label = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  // console.info(label[parseInt("1", 10)-1]);

  return (
    <Line
      className={className}
      data={{
        labels: data.map((value) => label[parseInt(value.month) - 1]),
        datasets: [
          {
            label: "Pengunjung 2024",
            data: data.map((value) => value.count),
            // data: [10, 25, 32, 12, 80, 40, 13, 23, 64, 22, 90, 74],
          },
        ],
      }}
    />
  );
}
