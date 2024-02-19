export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-white flex flex-col gap-y-3 py-12">
        <div className="container mx-auto flex flex-col">
          <p className="sm-text">Access your Favourite Facts &amp; Photos</p>
          <h3 className="text-darkest text-4xl font-bold">Authentication</h3>
          <p>
            All of the pages in the (auth) folder will have this layout, which
            includes a page header
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
