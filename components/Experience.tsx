"use client";

import React from "react";

import { workExperienceStructure } from "@/data";
import { Button } from "./ui/MovingBorders";
import { useLanguage } from "@/context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const cards = workExperienceStructure.map((structure) => {
    const text = t.experience.items.find((e) => e.id === structure.id);
    return {
      ...structure,
      title: text?.title ?? "",
      desc: text?.desc ?? "",
    };
  });

  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        {t.experience.heading1} <span className="text-purple">{t.experience.heading2}</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {cards.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
