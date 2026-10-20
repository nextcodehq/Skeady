import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

function RootLayout() {
  const linkClass = "block rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen grid-cols-[14rem_minmax(0,1fr)]">
        <aside className="border-r border-sidebar-border bg-sidebar p-4">
          <Link to="/" className="text-xl font-semibold">
            Skeady
          </Link>

          <nav aria-label="Primary navigation" className="mt-8 space-y-1">
            <Link to="/" className={linkClass}>
              Home
            </Link>
          </nav>
        </aside>

        <main className="min-w-0 p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
