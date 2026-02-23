"use client";

import { gridItemsStructure } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

const Grid = () => {
  const { t } = useLanguage();

  const items = gridItemsStructure.map((structure) => {
    const text = t.gridItems.find((g) => g.id === structure.id);
    return {
      ...structure,
      title: text?.title ?? "",
      description: text?.description ?? "",
    };
  });

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {items.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
