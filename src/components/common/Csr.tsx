"use client";
import WaIcon from "../icons/WaIcon";
import { useState } from "react";
import EmailIcon from "../icons/EmailIcon";
import { Target } from "lucide-react";

export default function Csr({ className }: { className?: string }) {
  const [message, setMessage] = useState<{
    email: string;
    phone: string;
    body: string;
  }>({ email: "", phone: "", body: "" });

  const handleSubmit = (e: any) => {
    console.log(e);
    e.preventDefault;
    const subject = `Pesan dari ${message.email} | ${message.phone}`;
    const body = encodeURIComponent(message.body);
    const mailtoLink = `mailto:${message.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink; // Buka aplikasi email
  };
  return (
    <section className={className}>
      <div className="">
        <div className="flex flex-col lg:flex-row">
          {/* Contact Start */}
          <div className="container py-10 lg:py-20 bg-secondary">
            <p className=" text-zinc-800 font-bold">
              Siap Kolaborasi Membawa Perubahan Melalui Program Berkelanjutan ?
            </p>
            <p className="text-zinc-800 font-bold my-5">Hubungi Kami</p>
            <div className="flex flex-col gap-5">
              {/* Whatsapp Start */}
              {/* <a href="https://api.whatsapp.com/send?phone=6285891877388&text=Hallo%20Yayasan%20Indonesia%20Emas%20saya%20mau%20tanya," target="_blank">
                <div className="flex flex-row gap-3 items-center text-zinc-800 py-5 px-3 border-zinc-800 border rounded-lg">
                  <div className="inline-flex justify-center items-center p-3 rounded-full bg-green-500">
                    <WaIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold">Whatsapp</h4>
                    <p className="text-sm">+62-858-9187-7388</p>
                  </div>
                </div>
              </a> */}
              {/* Whatsapp Stop */}
              {/* Email Start */}
              <a href={"mailto:ira@yayasanindonesiaemas.com"}>
                <div className="flex flex-row gap-3 items-center text-zinc-800 py-5 px-3 border-zinc-800 border rounded-lg">
                  <div className="inline-flex justify-center items-center p-3 rounded-full bg-red-500">
                    <EmailIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-sm">ira@yayasanindonesiaemas.com</p>
                  </div>
                </div>
              </a>
              {/* Email Stop */}
            </div>
          </div>
          {/* Contact Stop */}
          {/* Form Start */}
          <div className="py-10 lg:py-20 bg-amber-50 container">
            <form action={handleSubmit} className="flex flex-col gap-5 ">
              {/* Email Start */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Masukan email perusahaan"
                  value={message.email}
                  onChange={(e) => {
                    setMessage({ ...message, email: e.target.value });
                  }}
                  className="rounded-lg py-4 px-3 focus:outline-none placeholder:text-sm"
                />
              </div>
              {/* Email Stop */}
              {/* Phone Start */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Nomor Hp
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Masukan nomor aktif"
                  value={message.phone}
                  onChange={(e) => {
                    setMessage({ ...message, phone: e.target.value });
                  }}
                  className="rounded-lg py-4 px-3 focus:outline-none placeholder:text-sm"
                />
              </div>
              {/* Phone Stop */}
              {/* Message Start */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Pesan
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Contoh : Program tanam mangrove di pesisir pantai"
                  value={message.body}
                  onChange={(e) => {
                    setMessage({ ...message, body: e.target.value });
                  }}
                  className="rounded-lg py-4 px-3 focus:outline-none placeholder:text-sm"
                  rows={5}
                />
              </div>
              {/* Message Stop */}
              <div>
                <button
                  type="submit"
                  className="py-2 text-center rounded-xl inline-flex justify-center font-bold text-white items-center w-full bg-primary mt-5"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
          {/* Form Stop */}
        </div>
      </div>
    </section>
  );
}
