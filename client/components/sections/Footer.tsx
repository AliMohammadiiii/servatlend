export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#D6D9DF]">
      <div className="container mx-auto px-4 py-10 lg:py-16">
        <div className="max-w-[1104px] mx-auto flex flex-col items-center gap-6 lg:gap-8">
          {/* Address */}
          <div className="flex items-center justify-center gap-1 text-center">
            <svg className="w-5 h-5 text-[#4F545E]" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 10.8335V10.8335C11.3808 10.8335 12.5 9.71433 12.5 8.3335V8.3335C12.5 6.95266 11.3808 5.8335 10 5.8335V5.8335C8.61917 5.8335 7.5 6.95266 7.5 8.3335V8.3335C7.5 9.71433 8.61917 10.8335 10 10.8335Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M10 17.5C10 17.5 15.8334 12.7083 15.8334 8.33333C15.8334 5.11167 13.2217 2.5 10 2.5C6.77837 2.5 4.16671 5.11167 4.16671 8.33333C4.16671 12.7083 10 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm lg:text-lg font-bold lg:font-bold text-[#4F545E]">
              آدرس: تهران خیابان وزرا خیابان هجدهم پلاک 66
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs lg:text-base font-medium text-center">
            <span className="text-[#4F545E]">تمام حقوق مادی و معنوی برای</span>
            {' '}
            <span className="text-[#0C74C7]">ثروت‌لند</span>
            {' '}
            <span className="text-[#4F545E]">محفوظ است</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
