import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTier } from "@/lib/types";

type Props = { params: Promise<{ score: string }> };

function parseScore(raw: string): number | null {
  if (!/^\d+$/.test(raw)) return null;
  const n = Number(raw);
  if (n < 0 || n > 100) return null;
  return n;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { score: raw } = await params;
  const score = parseScore(raw);
  if (score === null) return {};

  const tier = getTier(score);
  const title = `JTC度${score}%「${tier.name}」でした`;
  const description = `${tier.catch} あなたの会社のJTC度は？ #JTC診断`;

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ResultPage({ params }: Props) {
  const { score: raw } = await params;
  const score = parseScore(raw);
  if (score === null) notFound();

  const tier = getTier(score);

  const shareText = `うちの会社のJTC度は${score}%「${tier.name}」でした…\n${tier.catch}\nあなたの会社のJTC度は？\n#JTC診断`;
  const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(`https://jtc-shindan.vercel.app/result/${score}`)}`;

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center pt-2">
          <div className="w-[92px] h-[92px] rounded-full bg-accent-soft border-2 border-accent flex items-center justify-center mx-auto mb-3.5">
            <span className="text-xl font-extrabold text-accent-ink">{score}%</span>
          </div>
          <h1 className="text-xl font-extrabold mb-1.5 text-balance">{tier.name}</h1>
          <p className="text-[12.5px] font-bold text-accent mb-3.5">{tier.catch}</p>
          <p className="text-[13px] text-ink-soft leading-relaxed mb-6">{tier.desc}</p>
        </div>

        <div className="mb-8">
          <div className="h-[10px] rounded-full bg-surface-2 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-accent"
              style={{ width: `${score}%` }}
            />
          </div>
          <div className="flex justify-between text-[10.5px] font-semibold text-ink-faint mt-1.5">
            <span>ノーJTC企業</span>
            <span>伝説のTHE・JTC</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 mb-8">
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-accent text-white font-bold text-[13.5px] py-3.5 rounded-2xl text-center"
          >
            Xでシェア
          </a>
        </div>

        <Link href="/quiz" className="block text-center text-ink-soft text-[13px] font-semibold">
          もう一度診断する
        </Link>
      </div>
    </main>
  );
}
