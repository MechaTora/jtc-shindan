export interface Question {
  id: number;
  text: string;
}

export const QUESTIONS: Question[] = [
  { id: 1, text: "上司への返事は「承知しました」「かしこまりました」など、決まり切った敬語ばかりだ。" },
  { id: 2, text: "稟議書や決裁には、今でも紙とハンコが必要だ。" },
  { id: 3, text: "「なるはや」「よしなに」「一旦持ち帰ります」といった、曖昧なのに全員が通じる社内用語がある。" },
  { id: 4, text: "朝礼がある、または社訓・経営理念を唱和する習慣がある。" },
  { id: 5, text: "会議の前に「根回し」が済んでいないと、本音の議論にならない。" },
  { id: 6, text: "有給休暇は「休暇届」を提出し、上司の顔色をうかがってから取るものだ。" },
  { id: 7, text: "部署名が「〇〇部〇〇課〇〇係」のように、細かく階層化されている。" },
  { id: 8, text: "新卒一括採用・終身雇用・年功序列が、いまだに人事の大前提になっている。" },
  { id: 9, text: "名刺交換の作法やお辞儀の角度など、ビジネスマナー研修がやたら厳しい。" },
  { id: 10, text: "クールビズでも「上着は脱いでもネクタイは着用」など、服装規定が細かい。" },
  { id: 11, text: "FAXや紙の書類が、今でも現役の連絡手段として使われている。" },
  { id: 12, text: "会議は出席者が多いほど良いとされ、発言しない人も大量に呼ばれる。" },
];

// 0: 全く当てはまらない  1: あまり当てはまらない  2: やや当てはまる  3: 非常に当てはまる
export const ANSWER_LABELS = ["全く当てはまらない", "あまり当てはまらない", "やや当てはまる", "非常に当てはまる"];

const MAX_SCORE = QUESTIONS.length * 3;

export function scoreToPercent(answers: number[]): number {
  const total = QUESTIONS.reduce((sum, _, i) => sum + (answers[i] ?? 0), 0);
  return Math.round((total / MAX_SCORE) * 100);
}

export interface Tier {
  min: number;
  max: number;
  name: string;
  catch: string;
  desc: string;
}

export const TIERS: Tier[] = [
  {
    min: 0,
    max: 20,
    name: "ノーJTC企業",
    catch: "JTCとは無縁、風通し良好。",
    desc: "ハンコも朝礼も根回しも、ほぼ縁がない環境。意思決定はフラットでスピーディー。JTC的な空気はほとんど感じられない職場。",
  },
  {
    min: 21,
    max: 40,
    name: "プレJTC",
    catch: "兆候はある、でもまだ現代的。",
    desc: "たまに紙文化や謎ルールに遭遇するが、全体としては合理的。油断すると徐々にJTC化していく可能性を秘めたライン。",
  },
  {
    min: 41,
    max: 60,
    name: "隠れJTC",
    catch: "見た目はモダン、中身は昭和。",
    desc: "黄色信号。オフィスやツールは今どきなのに、根回しや階層、謎マナーなど中身は伝統的な日本企業の作法が根強く残っている。",
  },
  {
    min: 61,
    max: 80,
    name: "JTC認定",
    catch: "もう立派なJapanese Traditional Companyです。",
    desc: "ハンコ、紙の稟議、年功序列、細かい階層――JTCらしい特徴がしっかり揃っている。歴とした伝統的日本企業として胸を張れるレベル。",
  },
  {
    min: 81,
    max: 100,
    name: "伝説のTHE・JTC",
    catch: "令和に紛れ込んだ、生きた昭和企業。",
    desc: "JTC度カンスト級。FAX、朝礼、根回し、ハンコ、細かすぎる階層――すべてが揃った、もはや文化財レベルの伝統的日本企業。",
  },
];

export function getTier(percent: number): Tier {
  return TIERS.find((t) => percent >= t.min && percent <= t.max) ?? TIERS[TIERS.length - 1];
}
