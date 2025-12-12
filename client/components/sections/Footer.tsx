import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#D6D9DF]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-[1104px] mx-auto flex flex-col items-center gap-8">
          {/* Address */}
          <div className="flex items-center gap-1 text-center">
            <MapPin className="w-5 h-5 text-[#4F545E]" />
            <span className="text-lg font-bold text-[#4F545E]">
              آدرس: تهران خیابان وزرا خیابان هجدهم پلاک 66
            </span>
          </div>

          {/* Copyright */}
          <p className="text-base font-medium text-center">
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
