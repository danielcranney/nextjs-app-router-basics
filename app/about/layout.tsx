export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-white flex flex-col gap-y-3 py-12">
        <div className="container mx-auto flex flex-col">
          <p className="sm-text">Who are we?</p>
          <h3 className="text-darkest text-4xl font-bold">About</h3>
          <p>
            This layout nests inside of app/layout.tsx, and will only affect the
            'about' route.
          </p>
        </div>
      </section>

      <section className="w-full flex flex-col">
        <div className="flex flex-col container mx-auto p-12 items-center justify-center">
          {children}
        </div>
      </section>
    </div>
  );
}
