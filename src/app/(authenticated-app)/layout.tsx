import AppShell from './_components/app-shell'

type AuthenticatedAppLayoutProps = {
  children: React.ReactNode
}

export default function AuthenticatedAppLayout({ children }: AuthenticatedAppLayoutProps) {
  return <AppShell>{children}</AppShell>
}
