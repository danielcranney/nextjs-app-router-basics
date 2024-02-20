import UpdateButton from "@/components/UpdateButton";
import Image from "next/image";
import { update } from "./actions/update";

async function getDogFacts() {
  const res = await fetch("http://dog-api.kinduff.com/api/facts?number=5");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getDogPhoto() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const factData = await getDogFacts();
  const { facts } = factData;

  const photoData = await getDogPhoto();
  const { message } = photoData;
  let photoUrl = message;

  return (
    <div className="scrollable-container">
      <div className="container mx-auto flex flex-col">
        <p className="sm-text">A little dose of doggy cuteness</p>
        <h3 className="hero-header">Facts and Photos</h3>
        <p className="hero-p">
          Want more? Refresh the page now for a new photo, but you&apos;ll need
          to click the button to get a new fact.
        </p>
        <form action={update} className="mx-24 mt-4">
          {/* You could add inputs here, with the data accessible from the 'FormData' inside of the server action */}

          <div className="grid grid-cols-3 gap-8">
            <Image
              src={photoUrl}
              alt="Random photo of a dog"
              width="400"
              height="200"
              className="w-full rounded-lg overflow-hidden col-span-1"
            />
            <ul id="facts">
              {facts.map((fact: any, index: number) => {
                return (
                  <li key={"fact" + index}>
                    <div className="block">{index + 1}</div>
                    {fact}
                  </li>
                );
              })}
            </ul>
          </div>

          <UpdateButton />
        </form>
      </div>
    </div>
  );
}
