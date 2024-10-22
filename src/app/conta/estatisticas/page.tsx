import statsGet from "@/actions/stats-get";

import { Metadata } from "next";
import dynamic from "next/dynamic";

const ContaEstatisticas = dynamic(
  () => import("@/components/conta/conta-estatiticas"),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Postar | Estatisticas",
};

export default async function Estatisticas() {
  const { data } = await statsGet();

  if (!data) return null;
  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  );
}
