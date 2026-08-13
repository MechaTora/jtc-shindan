"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ANSWER_LABELS, QUESTIONS, scoreToPercent } from "@/lib/types";

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const question = QUESTIONS[step];
  const isLast = step === QUESTIONS.length - 1;

  function pick(value: number) {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);

    window.setTimeout(() => {
      if (isLast) {
        const percent = scoreToPercent(next);
        router.push(`/result/${percent}`);
      } else {
        setStep(step + 1);
      }
    }, 180);
  }

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => (step === 0 ? router.push("/") : setStep(step - 1))}
            className="text-ink-soft text-xl leading-none"
            aria-label="戻る"
          >
            ‹
          </button>
          <span className="text-sm font-bold">
            質問 {step + 1} / {QUESTIONS.length}
          </span>
          <span className="w-5" />
        </div>

        <div className="flex gap-1.5 justify-center mb-7 flex-wrap">
          {QUESTIONS.map((_, i) => (
            <div
              key={i}
              className={
                i < step
                  ? "w-1.5 h-1.5 rounded-full bg-accent"
                  : i === step
                    ? "w-4 h-1.5 rounded-full bg-ink"
                    : "w-1.5 h-1.5 rounded-full bg-line"
              }
            />
          ))}
        </div>

        <p className="text-lg font-extrabold leading-relaxed mb-6 text-balance">
          {question.text}
        </p>

        <div className="flex flex-col gap-2.5">
          {ANSWER_LABELS.map((label, i) => {
            const picked = answers[step] === i;
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                className={
                  "flex items-center justify-between rounded-2xl border-[1.5px] px-4 py-4 text-sm font-semibold text-left transition-colors " +
                  (picked
                    ? "border-accent bg-accent-soft text-accent-ink"
                    : "border-line bg-surface text-ink hover:border-ink-faint")
                }
              >
                <span>{label}</span>
                <span
                  className={
                    "w-[18px] h-[18px] rounded-full border-2 shrink-0 " +
                    (picked ? "border-accent bg-accent" : "border-line")
                  }
                />
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
