export default function ContentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-7xl">{children}</div>;
}
