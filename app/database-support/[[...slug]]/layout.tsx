import { Leftbar } from "@/components/leftbar";
import {DB_ROUTES} from "@/lib/routes-config";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14">
      <Leftbar path={"database-support"} routes={DB_ROUTES} />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
