import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-3 rounded-t-3xl shadowFt footer1">
        <div className="container mx-auto px-4 text-center text-gray-400">
            <p className="mb-2">ISKCON Gurugram</p>
            <p className="mb-2">
            Sudarshan Dham, Gurugram-Sohna Road, Badshahpur, Sector-67,
            Gurugram, Haryana - 122101
            </p>
            <p>
            <a
                href="tel:+918527215003"
                className="text-blue-400 hover:underline"
            >
                Call +91 85272 15003
            </a>{" "}
            |{" "}
            <a
                href="mailto:communications@iskcongurugram.com"
                className="text-blue-400 hover:underline"
            >
                communications@iskcongurugram.com
            </a>
            </p>
        </div>
    </footer>
  );
}
