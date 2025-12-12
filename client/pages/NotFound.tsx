import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4" dir="rtl">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-[#0C74C7]">404</h1>
        <h2 className="text-2xl font-bold text-[#242933]">
          صفحه مورد نظر یافت نشد
        </h2>
        <p className="text-base text-[#4F545E]">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-[#0C74C7] text-white rounded-xl font-bold text-sm hover:bg-[#0C74C7]/90 transition-colors"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
