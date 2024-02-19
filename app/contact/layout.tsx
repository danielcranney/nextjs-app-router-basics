export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="w-1/2 bg-white flex flex-col gap-y-3 p-12 h-full">
        <div className="container mx-auto flex flex-col h-full justify-center">
          <p className="sm-text">
            Get in touch
          </p>
          <h3 className="text-darkest text-4xl font-bold">Contact</h3>
          <p>
            This sidebar layout is stored in contact/layout.tsx and will only
            affect contact/page.tsx.
          </p>
        </div>
      </section>

      <section className="w-1/2 flex flex-col h-full">
        <div className="flex flex-col container mx-auto p-12 items-center justify-center h-full">
          {children}
        </div>
      </section>
    </>
  );
}
