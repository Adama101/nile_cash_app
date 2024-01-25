// LoanTable.js

import React from "react";

const LoanTable = () => {
  return (
    <>
      <div className="bg-gray-200 p-4">
        {/* Top Bar */}
        <div className="text-white p-4 mb-4">
          <h1 className="text-2xl font-bold">History</h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-4 border rounded-l"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-r">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM15 15h5l-4-4m0 0l-4 4m4-4V3"
              ></path>
            </svg>
          </button>
        </div>

        {/* Table */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Names</th>
              <th className="py-2 px-4 border-b">Disbursed Loan</th>
              <th className="py-2 px-4 border-b">Repayment Date</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Payback Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your data rows here */}
            <tr>
              <td className="py-2 px-4 border-b flex flex-row pl-3">
                <div>
                  <img
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" // Replace with the actual path to your avatar image
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="mx-px">Kadoon</div>
              </td>
              <td className="py-2 px-4 border-b">02/01/2024</td>
              <td className="py-2 px-4 border-b">02/25/2024</td>
              <td className="py-2 px-4 border-b">100</td>
              <td className="py-2 px-4 border-b">110</td>
            </tr>
            <tr>
            <td className="py-2 px-4 border-b flex flex-row pl-3">
                <div>
                  <img
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" // Replace with the actual path to your avatar image
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="mg-l-4">Precious</div>
              </td>
              <td className="py-2 px-4 border-b">02/01/2024</td>
              <td className="py-2 px-4 border-b">02/25/2024</td>
              <td className="py-2 px-4 border-b">100</td>
              <td className="py-2 px-4 border-b">110</td>
            </tr>
            <tr>
            <td className="py-2 px-4 border-b flex flex-row pl-3">
                <div>
                  <img
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" // Replace with the actual path to your avatar image
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="mg-l-4">Shadrack</div>
              </td>
              <td className="py-2 px-4 border-b">02/01/2024</td>
              <td className="py-2 px-4 border-b">02/25/2024</td>
              <td className="py-2 px-4 border-b">100</td>
              <td className="py-2 px-4 border-b">110</td>
            </tr>
            <tr>
            <td className="py-2 px-4 border-b flex flex-row pl-3">
                <div>
                  <img
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" // Replace with the actual path to your avatar image
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="mg-l-4">Adama</div>
              </td>
              <td className="py-2 px-4 border-b">02/01/2024</td>
              <td className="py-2 px-4 border-b">02/25/2024</td>
              <td className="py-2 px-4 border-b">100</td>
              <td className="py-2 px-4 border-b">110</td>
            </tr>
            <tr>
            <td className="py-2 px-4 border-b flex flex-row pl-3">
                <div>
                  <img
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" // Replace with the actual path to your avatar image
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="mg-l-4">Usha</div>
              </td>
              <td className="py-2 px-4 border-b">02/01/2024</td>
              <td className="py-2 px-4 border-b">02/25/2024</td>
              <td className="py-2 px-4 border-b">100</td>
              <td className="py-2 px-4 border-b">110</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LoanTable;
