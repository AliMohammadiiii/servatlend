import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "آیا می‌توانم هم‌زمان چند درخواست اعتبار داشته باشم؟",
      answer: "در هر زمان، تنها یک درخواست فعال برای هر کاربر امکان‌پذیر است. پس از تعیین تکلیف درخواست فعلی، می‌توانید درخواست جدید ثبت کنید."
    },
    {
      question: "آیا بعد از بارگذاری چک، امکان لغو تسهیلات وجود دارد؟",
      answer: "بله، تا زمانی که درخواست شما تأیید نهایی نشده باشد، امکان لغو آن وجود دارد."
    },
    {
      question: "اگر قیمت کالا بیشتر از میزان اعتبار من باشد، چه اتفاقی می‌افتد؟",
      answer: "در صورتی که قیمت کالا بیشتر از اعتبار شما باشد، می‌توانید تفاوت مبلغ را به‌صورت نقدی پرداخت کنید."
    },
    {
      question: "آیا می‌توانم با یک اعتبار، بیش از یک کالا خریداری کنم؟",
      answer: "بله، تا سقف اعتبار مصوب خود می‌توانید چندین خرید انجام دهید."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="text-2xl font-bold text-[#242933] text-right mb-16">
            سوالات متداول
          </h2>

          <div className="flex flex-col gap-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-[#D6D9DF] rounded-xl bg-white p-3 transition-all ${
                  openIndex === index ? 'shadow-sm' : ''
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center gap-3 text-right"
                >
                  <ChevronDown 
                    className={`w-[18px] h-[18px] text-[#4F545E] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                  <span className="flex-1 text-sm font-medium leading-6 text-[#4F545E]">
                    {faq.question}
                  </span>
                </button>

                {openIndex === index && (
                  <>
                    <div className="h-[1px] bg-[#D6D9DF] my-3" />
                    <p className="text-sm font-medium leading-6 text-[#4F545E] text-right pr-9">
                      {faq.answer}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
