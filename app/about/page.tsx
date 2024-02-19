import PawIcon from "@/components/Icon";

export default async function About() {
  return (
    <div className="grid grid-cols-3 gap-6 w-full">
      <div className="w-full aspect-square bg-darkest flex items-center justify-center gap-x-1">
        <PawIcon />

        <h3 className="text-white font-bold sm:text-xl md:text-3xl lg:text-4xl">
          woof<span className="font-normal">pix</span>
        </h3>
      </div>
      <div className="col-span-2 flex flex-col gap-y-2">
        <p className="font-bold">
          This content exists in the about/page.tsx route.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio minus
          eveniet dolorem autem quae dolores ad. Odio cum suscipit vel natus
          laboriosam consectetur nesciunt sint ratione. Culpa perspiciatis
          explicabo quae.
        </p>
      </div>
    </div>
  );
}
