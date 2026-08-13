import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm flex flex-col items-center text-center gap-6">
        <div className="w-16 h-16 rounded-[20px] bg-accent text-white flex items-center justify-center text-2xl font-extrabold">
          印
        </div>
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">JTC診断</h1>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">
            12の質問で、あなたの会社のJTC度を0〜100%で診断
          </p>
        </div>
        <span className="inline-flex text-[11.5px] text-ink-faint bg-surface-2 px-3 py-1.5 rounded-full">
          約1分・ログイン不要
        </span>

        <div className="w-full flex flex-col gap-2 mt-4">
          <Link
            href="/quiz"
            className="w-full bg-accent text-white font-bold text-[15px] py-4 rounded-2xl text-center"
          >
            診断をはじめる
          </Link>
        </div>
      </div>
    </main>
  );
}
