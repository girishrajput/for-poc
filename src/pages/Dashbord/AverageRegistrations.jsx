import React from "react";
import { Wallet, HandCoins, UserPlus, Users } from "lucide-react";

function AverageRegistrations() {
  const stats = [
    {
      title: "Registration Per Day",
      value: "7,040",
      IconColor: "text-[#8280FF]",
      icon: UserPlus ,
    },
    {
      title: "Registration Per Month",
      value: "228,046",
      IconColor: "text-[#F9837C]",
      icon: Users,
    },
    {
      title: "FTD Per Day",
      value: "R 87,646.57",
      IconColor: "text-[#70B6C1]",
      icon:  Wallet,

    },
    {
      title: "FTD Per Month",
      value: "R 2.73 m",
      IconColor: "text-[#F3CC5C]",
      icon:  HandCoins,
    },
  ];
  

  return (
    <>
      <div className="grid grid-cols-1 mt-6">
        <h2 className="text-xl font-semibold text-title-color !mb-0">Average Registrations & FTD</h2>
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
                <h3 className="mt-1 text-2xl font-semibold text-title-color">
                  {item.value}
                </h3>
              </div>
              <div className={`flex items-center justify-center`}>
                  <Icon size={22} className={item.IconColor} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AverageRegistrations;
