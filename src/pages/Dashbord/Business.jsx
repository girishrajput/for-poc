import React from "react";
import { Banknote, HandCoins, Wallet, PiggyBank } from "lucide-react";

function Business() {
  const stats = [
    {
      title: "GGR Current Month",
      value: "R 4.95 m",
      iconBg: "bg-red-100",
      IconColor: "text-[#F9837C]",
      icon: Banknote,
    },
    {
      title: "GGR YTD",
      value: "R 85.29 m",
      iconBg: "bg-[#FEC53D33]",
      IconColor: "text-[#FEC53D]",
      icon: HandCoins,
    },
    {
      title: "NGR Current Month",
      value: "R 3.14 m",
      iconBg: "bg-green-100",
      IconColor: "text-[#70B6C1]",
      icon: Wallet,

    },
    {
      title: "NGR YTD",
      value: "R 54.16 m",
      iconBg: "bg-purple-100",
      IconColor: "text-[#8280FF]",
      icon: PiggyBank,
    },
  ];
  

  return (
    <>
      <div className="grid grid-cols-1">
        <h2 className="text-xl font-semibold text-title-color !mb-0">Business</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-2.5">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div>
                <p className="text-sm font-medium text-title-color-70 !mb-0">
                  {item.title}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-title-color !mb-0">
                  {item.value}
                </h3>
              </div>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg}`}
              >
                  <Icon size={22} className={item.IconColor} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Business;
