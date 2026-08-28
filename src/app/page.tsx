export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-24 font-sans dark:bg-black">
      <main className="w-full max-w-xl space-y-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Lowkey
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Next.js + Supabase + Vercel
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          프로젝트 세팅이 완료되었습니다. Supabase 대시보드에서 API 키를
          복사해 <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">.env.local</code>
          에 입력한 뒤 개발을 시작하세요.
        </p>
      </main>
    </div>
  );
}
